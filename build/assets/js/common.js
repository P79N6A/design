"use strict";

var headerNavList = [
  {
    label: "品牌",
    url: "./brand/index.html"
  },
  {
    label: "设计指导",
    url: "./guidelines/index.html"
  },
  {
    label: "设计样式",
    url: "./pattern/index.html"
  },
  {
    label: "资料库",
    url: "./library/index.html"
  }
];

var sideNavList0 = [
  {
    label: "品牌故事",
    type: "title"
  },
  {
    label: "愿景",
    url: "../mission/index.html"
  },
  {
    label: "目标用户",
    url: "../target/index.html"
  },
  {
    label: "关键词",
    url: "../keywords/index.html"
  },
  {
    label: "设计原则",
    url: "../principles/index.html"
  },
  {
    label: "品牌语调",
    type: "title"
  },
  {
    label: "产品",
    url: "../product/index.html"
  },
  {
    label: "邮件",
    url: "../edm/index.html"
  },
  {
    label: "文章",
    url: "../article/index.html"
  }
];

var sideNavList1 = [
  {
    label: "设计语言",
    type: "title"
  },
  {
    label: "设计语言概述",
    url: "../language/index.html"
  },
  // {
  //   label: "元素概述",
  //   url: "../element/index.html"
  // },
  // {
  //   label: "设计关系",
  //   url: "../relationship/index.html"
  // },
  // {
  //   label: "设计框架",
  //   type: "title"
  // },
  // {
  //   label: "设计框架概述",
  //   url: "../framework/index.html"
  // },
  {
    label: "创意设计",
    type: "title"
  },
  // {
  //   label: "语境",
  //   url: "../text/index.html"
  // },
  // {
  //   label: "范围",
  //   url: "../range/index.html"
  // },
  {
    label: "方法 & 过程",
    url: "../method/index.html"
  },
//   {
//     label: "管理 & 用户感知验证",
//     url: "../manage/index.html"
//   }
// 
];

var sideNavList2 = [
  {
    label: "样式",
    type: "title"
  },
  {
    label: "Token规范",
    url: "../token/index.html"
  },
  {
    label: "色彩",
    url: "../color/index.html"
  },
  {
    label: "字体",
    url: "../typography/index.html"
  },
  {
    label: "图标",
    url: "../icon/index.html"
  },
    {
    label: "线条",
    url: "../line/index.html"
  },
  {
    label: "尺寸",
    url: "../size/index.html"
  },
  {
    label: "栅格",
    url: "../grid/index.html"
  },
  {
    label: "间距",
    url: "../spacing/index.html"
  },
  {
    label: "插画",
    url: "../illustration/index.html"
  },
  {
    label: "图片",
    url: "../photograph/index.html"
  },
  {
    label: "动效",
    url: "../media/index.html"
  },
  {
    label: "组件",
    type: "title"
  },
  {
    label: "按钮",
    url: "../button/index.html"
  },
  {
    label: "导航",
    url: "../navigation/index.html"
  },
  {
    label: "卡片",
    url: "../card/index.html"
  },
   {
    label: "复选框",
    url: "../check/index.html"
  },
     {
    label: "滑块选择",
    url: "../range/index.html"
  },
    {
    label: "开关",
    url: "../switch/index.html"
  },
      {
    label: "数字输入框",
    url: "../number/index.html"
  },
    {
    label: "单选框",
    url: "../radio/index.html"
  },
    {
    label: "对话框",
    url: "../dialog/index.html"
  },
];

var sideNavList3 = [
  // {
  //   label: "体验数据库",
  //   type: "title"
  // },
  // {
  //   label: "PC端测试",
  //   url: "../pc/index.html"
  // },
  // {
  //   label: "无线端测试",
  //   url: "../mobile/index.html"
  // },
  {
    label: "设计思维",
    type: "title"
  },
  {
    label: "基于图片优化探索「平台型产品内容规范设计」",
    url: "../thinking-1/index.html"
  },
  {
    label: "B类贸易展会品牌合作创意方案初探",
    url: "../thinking-2/index.html"
  },
  {
    label: "Form and Quote: A sample of friendly form with guides",
    url: "../thinking-3/index.html"
  },
  {
    label: "词汇库",
    type: "title"
  },
  {
    label: "一般",
    url: "../vocabulary-1/index.html"
  },
  {
    label: "全球贸易和海关",
    url: "../vocabulary-2/index.html"
  },
  {
    label: "资金及外滙词汇",
    url: "../vocabulary-3/index.html"
  },
  {
    label: "国际贸易出口流程及相关外贸术语",
    url: "../vocabulary-4/index.html"
  }
];

var _extends =
  Object.assign ||
  function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }
  return obj;
}

var mixins = mixins || {};

Vue.component("top-bar", {
  props: {
    lang: {
      type: String,
      default: "en"
    }
  },
  template: /*html*/ `
  <div class="top-bar">
    {{ $t(" ")}}
      <a href="http://www.fusion.design/" target="”_blank">
      {{ $t(" ") }}</a>
  </div>
`
});
Vue.component("layout-header", {
  props: {
    lang: {
      type: String,
      default: "en"
    },
    isHome: {
      type: Boolean,
      default: false
    },
    active: {
      type: [String, Number],
      default: ""
    }
  },
  data: function data() {
    return {
      current: i18n.t(document.title),
      navList: headerNavList.map(function(item) {
        return _extends({}, item, {
          label: i18n.t(item.label)
        });
      })
    };
  },
  methods: {
    switchLanguage: function switchLanguage() {
      var language = this.lang === "cn" ? "en" : "cn";
      var currentHostname = window.location.hostname;
      var env = getEnv();

      if (env === "dev") {
        window.localStorage.setItem(LOCALE_KEY, language);
        window.location.reload();
      } else {
        window.location.href = window.location.href.replace(
          currentHostname,
          URL_MAP[language]
        );
      }
    },
    handleLogoClick: function handleLogoClick() {
      window.location.href =
        document.title === i18n.t("体验设计指南")
          ? "./index.html"
          : "../index.html";
    }
  },
  template: /*html*/ `
    <div class="layout-header">
      <div class="logo"
        @click="handleLogoClick">
        <img
          src="https://g.alicdn.com/fusion-site/alibaba/0.0.11/assets/img/logo.png"
          alt=""
        />
      </div>
      <div class="menu">
        <i class="iconfont icon-menu"></i>
        <ul class="nav flex">
          <li v-for="(item, index) of navList"
            :class="{ 'active': active === String(index) || current === item.label }"
            :key="index">
            <a :href="(isHome ? '' : '.') +item.url">{{ item.label }}</a>
          </li>
        </ul>
        <input class="menu-search" type="search" />
        <i class="iconfont icon-search"></i>
        <div class="locale-switch"
          @click="switchLanguage">
          <span :class="lang === 'en' ? 'active' : ''">En</span> <i>/</i>
          <span :class="lang === 'cn' ? 'active' : ''">中文</span>
        </div>
      </div>
    </div>
  `
});

Vue.component("layout-aside", {
  props: {
    lang: {
      type: String,
      default: "cn"
    },
    active: {
      type: [String, Number],
      default: 0
    }
  },
  data: function data() {
    return {
      current: i18n.t(document.title),
      navList0: sideNavList0,
      navList1: sideNavList1,
      navList2: sideNavList2,
      navList3: sideNavList3,
      visible: true
    };
  },
  methods: {
    handleShow: function handleShow() {
      this.visible = true;
    },
    handleHide: function handleHide() {
      this.visible = false;
    },
    handleVisible: function handleVisible() {
      this.visible = !this.visible;
    }
  },
  computed: {
    currentNavList: function currentNavList() {
      return this["navList" + this.active].map(function(item) {
        return _extends({}, item, {
          label: i18n.t(item.label)
        });
      });
    }
  },
  template: /*html*/ `
    <div class="layout-aside"
      :class="{
        'un-visible': !visible,
      }">
      <div>
        <div class="expand-wrap">
          <ul class="nav">
            <li v-for="(item, index) of currentNavList"
              :class="{
                title: item.type === 'title',
                active: current === item.label
              }"
              :title="item.label"
              :key="index">
              <span v-if="item.type === 'title'">{{ item.label }}</span>
              <a v-else
                :href="item.url">{{ item.label }}</a>
            </li>
          </ul>
        </div>
      </div>
      <aside>
        <span class="icon-wrap"
          @click="handleVisible">
          <i v-if="visible" class="el-icon-d-arrow-left"></i>
          <i v-else class="el-icon-d-arrow-right"></i>
        </span>
      </aside>
    </div>
  `
});

Vue.component("layout-footer", {
  props: {
    lang: {
      type: String,
      default: "cn"
    }
  },
  template: /*html*/ `
    <div class="layout-footer">
      <div>
        <img src="https://g.alicdn.com/fusion-site/alibaba/0.0.11/assets/img/footer-01.png" alt="" />
        <img src="https://g.alicdn.com/fusion-site/alibaba/0.0.11/assets/img/footer-02.png" alt="" />
      </div>
      <br />
      <p class="pfooter">
        {{ $t("本网站由阿里巴巴国际用户体验部 - B2B品牌组维护") }}
        {{ $t("我们致力于通过提升体验来帮助全球中小买卖家。 如果您有任何建议，请随时与我们联系: yanzuo.zp@alibaba-inc.com") }}
      </p>
      <br />
      <p>© 1999-2018 Alibaba.com. All rights reserved.</p>
    </div>
  `
});

Vue.component("layout-page", {
  props: {
    lang: {
      type: String,
      default: "cn"
    },
    active: {
      type: [String, Number],
      default: ""
    }
  },
  template: /*html*/ `
    <div class='content-wrap'>
      <top-bar></top-bar>
      <layout-header :lang="lang" :active="active"></layout-header>
      <div class="wrap">
        <layout-aside :lang="lang" :active="active"></layout-aside>
        <div class="layout-container">
          <div class='layout-container-info'>
            <slot></slot>
          </div>
          <layout-footer></layout-footer>
        </div>
      </div>
    </div>
  `
});

var vm = new Vue({
  el: "#app",
  i18n: i18n,
  mixins: [mixins],
  data: function data() {
    return _defineProperty(
      {
        lang: i18n.lang,
        menuFlex: !0,
        activeName: "tab1"
      },
      "lang",
      window.localStorage.getItem(LOCALE_KEY)
    );
  },
  mounted: function mounted() {
    $(document).on("click", ".layout-header .menu .icon-menu", function(e) {
      var n = $(".layout-header .nav");
      n.addClass("active"),
        $(document).on("click.closeNav", function(e) {
          $.contains(n.get(0), e.target) ||
            (n.removeClass("active"), $(document).off("click.closeNav"));
        });
    });

    $(document).on("click", ".layout-header .menu .icon-search", function(e) {
      var n = $(".layout-header .menu"),
        o = $(".layout-header .nav"),
        c = $(".layout-header .menu-search");
      o.toggleClass("flex"),
        c.toggleClass("flex"),
        c.focus(),
        $(document).on("click.closeFlex", function(e) {
          $.contains(n.get(0), e.target) ||
            (o.toggleClass("flex"),
            c.toggleClass("flex"),
            $(document).off("click.closeFlex"));
        });
    });

    docsearch({
      apiKey: "10ccb292caf1f598900a539ee6f74f44",
      indexName: "fusion_design",
      inputSelector: ".menu-search",
      debug: true
    });

    (function() {
      var l = $(document),
        i = $(".layout-header"),
        n = $(".top-bar"),
        e = false;

      l.on("scroll", function() {
        var o = l.scrollTop();
        200 <= o && !e ? (e = true) : o < 200 && e && (e = false);
        n[e ? "hide" : "show"]();
        i.toggleClass("reverse", e).find(".logo img")[0].src =
          "https://g.alicdn.com/fusion-site/alibaba/0.0.11/assets/img/" +
          (e ? "alibaba-logo.png" : "logo.png");
      });
    })();

    util.fixbar({
      help: !0,
      click: function click(o) {
        console.log(o), "bar1" === o && alert("点击了bar1");
      }
    });

    if (window.WOW) {
      new WOW({ offset: 100 }).init();
    }

    if (window.Viewer) {
      new Viewer(document.querySelector("#app .content"));
    }

    document.title = i18n.t(document.title);
  },
  methods: {
    handleTabClick: function handleTabClick() {}
  }
});
