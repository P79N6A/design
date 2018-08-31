'use strict';

const path = require('path');
const fs = require('fs');
const glob = require('glob');
const mkdirp = require('mkdirp');
const PKG = require('../package.json');

const baseUrl = `//g.alicdn.com/fusion-site/alibaba/${PKG.version}`;
const srcDir = path.join(__dirname, '../src');
const buildDir = path.join(__dirname, '../build');

function replaceCont(filePath, fileCont) {
    fileCont = fileCont.replace(/<link(.*)href=\"([^\"]*)\"/g, function (match, p1, p2, offset, string) {
        const relative = path.relative(srcDir, path.resolve(path.dirname(filePath), p2));
        return `<link${p1}href="${baseUrl}/${relative}"`;
    });
    fileCont = fileCont.replace(/src=\"([^\"]*)\"/g, function (match, p1, offset, string) {
        const relative = path.relative(srcDir, path.resolve(path.dirname(filePath), p1));
        return `src="${baseUrl}/${relative}"`;
    });
    fileCont = fileCont.replace(/url\(\"([^\"]*)\"\)/g, function(match, p1, offset, string) {
        const relative = path.relative(srcDir, path.resolve(path.dirname(filePath), p1));
        return `url("${baseUrl}/${relative}")`;
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
        let fileCont = new Buffer(fs.readFileSync(path.join(srcDir, file), 'utf8')).toString();
        fileCont = replaceCont(path.join(srcDir, file), fileCont);
        writeFileSync(path.join(buildDir, file), fileCont);
    });
});