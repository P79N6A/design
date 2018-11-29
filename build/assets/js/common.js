'use strict'
var commonMessage = {
  '原 fusion 官网已迁移:': 'The original fusion website has been moved to:',
  点击前往: 'Click Here',
  品牌: 'BRAND',
  设计指导: 'GUIDELINES',
  资料库: 'LIBRARY',
  '本网站由阿里巴巴国际用户体验部 - B2B品牌组维护':
    'This website is maintained by alibaba international user experience department-b2b brand group',
  '我们致力于通过提升体验来帮助全球中小买卖家。 如果您有任何建议，请随时与我们联系。':
    'We are committed to helping small and medium-sized traders around the world by enhancing the experience. If you have any Suggestions, please feel free to contact us.',
  品牌故事: 'Brand Story',
  愿景: 'Vision',
  目标用户: 'Target Audience',
  品牌个性: 'Brand Personality',
  关键词: 'Keywords',
  设计原则: 'Design Principles',
  品牌调性: 'Brand Voice',
  产品: 'Product',
  邮件: 'EDM',
  文章: 'Article',
  设计语言: 'Design Language',
  设计语言概述: 'Overview',
  元素概述: 'Design Element',
  设计关系: 'Relationship',
  设计框架: 'Design Framework',
  什么是设计框架: 'What is it',
  怎样运用设计框架: 'How to use it',
  视觉规范: 'Visual Guidelines',
  色彩: 'Color',
  栅格: 'Grid',
  间距: 'Spacing',
  图标: 'Icon',
  插画: 'Illustrations',
  字体排版: 'Typography',
  图片: 'Photograph',
  创意设计: 'Creative Design',
  语境: 'Context',
  范围: 'Range',
  '方法 & 过程': 'Method & Process',
  '管理 & 用户感知验证': 'Management & User verification',
  体验数据: 'Experience Data',
  词汇库: 'Glossary',
  工具: 'Tools',
  '了解更多': 'Learn More',
  '如有任何疑问，': 'If you have any question, ',
  '可联系yanzuo.zp@alibaba-inc.com': 'please email: yanzuo.zp@alibaba-inc.com',
  '即将上线，敬请期待': 'Coming Soon...',
  '设计元素': 'Element',
  '设计模式库': 'Design Library',
  '词汇库': 'Glossary',
  '体验数据库': 'Experience Database',
  '设计思维': 'Design Thinking',
  'Token规范': 'Token',
  '点击这里': 'Click Here',
}
var _extends =
  Object.assign ||
  function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i]
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key]
        }
      }
    }
    return target
  }
var messages = _extends({}, commonMessage, messages || {})
var init = Vue.prototype._init
var DEFAULT_LANG = 'cn'
var LOCALE_KEY = 'localeLanguage'
var locales = {
  zh: 'zh',
  en: 'en',
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true,
    })
  } else {
    obj[key] = value
  }
  return obj
}

var realMessage = {
  cn: Object.keys(messages).reduce(function(map, item) {
    return Object.assign({}, map, _defineProperty({}, item, item))
  }, {}),
  en: Object.keys(messages).reduce(function(map, item) {
    return Object.assign({}, map, _defineProperty({}, item, messages[item]))
  }, {}),
}

var i18n = new VueI18n({
  locale: 'cn',
  messages: realMessage,
})

function setup(lang) {
  if (lang === undefined) {
    lang = window.localStorage.getItem(LOCALE_KEY)
    if (locales[lang] === undefined) {
      lang = DEFAULT_LANG
    }
  }
  window.localStorage.setItem(LOCALE_KEY, lang)

  Object.keys(locales).forEach(lang => {
    document.body.classList.remove(`lang-${lang}`)
  })
  document.body.classList.add(`lang-${lang}`)
  document.body.setAttribute('lang', lang)

  Vue.config.lang = lang
  i18n.locale = lang
}

setup()

Vue.prototype._init = function(options) {
  init.call(
    this,
    _extends(
      {
        i18n: i18n,
      },
      options
    )
  )
}

var colorOverview
var promotionColors

$(function() {
  new Vue({
    el: '#app',
    i18n: i18n,
    data: function() {
      return {
        lang: i18n.lang,
        menuFlex: !0,
        activeName: 'tab1',
        colorOverview: colorOverview,
        promotionColors: promotionColors,
        lang: window.localStorage.getItem(LOCALE_KEY),
      }
    },
    mounted: function() {
      $(document).on('click', '.layout-header .menu .icon-menu', function(e) {
        var n = $('.layout-header .nav')
        n.addClass('active'),
          $(document).on('click.closeNav', function(e) {
            $.contains(n.get(0), e.target) ||
              (n.removeClass('active'), $(document).off('click.closeNav'))
          })
      }),
        $(document).on('click', '.layout-header .menu .icon-search', function(
          e
        ) {
          var n = $('.layout-header .menu'),
            o = $('.layout-header .nav'),
            c = $('.layout-header .menu-search')
          o.toggleClass('flex'),
            c.toggleClass('flex'),
            c.focus(),
            $(document).on('click.closeFlex', function(e) {
              $.contains(n.get(0), e.target) ||
                (o.toggleClass('flex'),
                c.toggleClass('flex'),
                $(document).off('click.closeFlex'))
            })
        })

      docsearch({
        apiKey: '10ccb292caf1f598900a539ee6f74f44',
        indexName: 'fusion_design',
        inputSelector: '.menu-search',
        debug: true,
      })

      document.title = i18n.t(document.title)
    },
    methods: {
      switchLanguage() {
        var language = this.lang === 'cn' ? 'en' : 'cn'
        window.localStorage.setItem(LOCALE_KEY, language)
        window.location.reload()
      },
      copyColor: function(e) {
        this.$message({ type: 'success', message: 'Copy ' + e + ' success!' }),
          copy(e)
      },
      handleTabClick() {},
    },
  })
})
