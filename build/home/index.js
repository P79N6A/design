"use strict";$(function(){var l=$(document),i=$(".layout-header"),n=$(".top-bar"),e=!1;$(".logo, .layout-sidebar-logo").click(function(){window.location.href="./index.html"}),l.on("scroll",function(){var o=l.scrollTop();200<=o&&!e?e=!0:o<200&&e&&(e=!1),n[e?"hide":"show"](),i.toggleClass("reverse",e).find(".logo img")[0].src="./assets/img/"+(e?"alibaba-logo.png":"logo.png")}),util.fixbar({help:!0,click:function(o){console.log(o),"bar1"===o&&alert("点击了bar1")}}),new WOW({offset:100}).init()});