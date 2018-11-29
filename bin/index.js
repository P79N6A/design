'use strict';

const path = require('path');
const fs = require('fs');
const glob = require('glob');
const mkdirp = require('mkdirp');
const child_process = require('child_process');
const PKG = require('../package.json');

const baseUrl = `//g.alicdn.com/fusion-site/alibaba/${PKG.version}`;
const srcDir = path.join(__dirname, '../src');
const buildDir = path.join(__dirname, '../build');

function replaceCont(filePath, fileCont) {
    fileCont = fileCont.replace(/<link(.*)href="([^"]*)"/g, function (match, p1, p2, offset, string) {
        const relative = path.relative(srcDir, path.resolve(path.dirname(filePath), p2));
        if (p2.indexOf('.') === 0) {
            return `<link${p1}href="${baseUrl}/${relative}"`;
        }
        return match;
    });
    fileCont = fileCont.replace(/src="([^"]*)"/g, function (match, p1, offset, string) {
        const relative = path.relative(srcDir, path.resolve(path.dirname(filePath), p1));

        if (p1.indexOf('`./img/') === 0) {
            const addr = '`' + baseUrl +'/img/'; 
            const str = p1.replace('`./img/', addr);
            return `src="${str}"`;
        }

        if (p1.indexOf('.') === 0) {
            if (p1[p1.length - 1] === '/') {
                return `src="${baseUrl}/${relative}/"`;
            }
            return `src="${baseUrl}/${relative}"`;
        }
        return match;
    });
    fileCont = fileCont.replace(/url\("([^"]*)"\)/g, function (match, p1, offset, string) {
        const relative = path.relative(srcDir, path.resolve(path.dirname(filePath), p1));
        if (p1.indexOf('.') === 0) {
            return `url("${baseUrl}/${relative}")`;
        }
        return match;
    });

    return fileCont;
}

function writeFileSync(filePath, contents) {
    mkdirp(path.dirname(filePath), function (err) {
        if (err) return;

        fs.writeFileSync(filePath, contents, 'utf8');
    });
}

glob('**/*.*', {
    cwd: srcDir
}, (err, files) => {
    files.forEach(file => {
        if (['.html', '.js', '.css'].indexOf(path.extname(file)) >= 0) {
            let fileCont = new Buffer(fs.readFileSync(path.join(srcDir, file), 'utf8')).toString();
            fileCont = replaceCont(path.join(srcDir, file), fileCont);
            writeFileSync(path.join(buildDir, file), fileCont);
        } else {
            mkdirp(path.dirname(path.join(buildDir, file)), function (err) {
                if (err) return;
                child_process.spawnSync('cp', ['-fr', path.join(srcDir, file), path.join(buildDir, file)]);
            });
        }
    });
});