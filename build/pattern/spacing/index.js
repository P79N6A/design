'use strict'
var textarea = null,
  getTextarea = function() {
    if (!textarea) {
      textarea = document.createElement('textarea')
      var e =
        'textarea-' +
        Math.random()
          .toString()
          .replace('.', '')
      ;(textarea.id = e),
        (textarea.style.width = 0),
        (textarea.style.height = 0),
        (textarea.style.overflow = 'hidden'),
        (textarea.style.opacity = 0),
        (textarea.style.position = 'absolute'),
        (textarea.style.left = 0),
        (textarea.style.top = 0),
        document.body.appendChild(textarea)
    }
    return textarea
  }
function copy(e) {
  var t = getTextarea()
  return (t.value = e), t.select(), document.execCommand('copy')
}
$(function() {
  var e = !1,
    t = $(document),
    a = $('.layout-header'),
    o = $('.top-bar'),
    l = !1
  $('.icon-close, .icon-category').click(function() {
    ;(e = !e),
      $('.layout-aside').toggleClass('un-expand', e),
      this.classList.contains('icon-search') &&
        $('.layui-input .search').focus()
  }),
    $('.logo, .layout-sidebar-logo, .icon-alibaba').click(function() {
      window.location.href = '../index.html'
    }),
    t.on('scroll', function() {
      var e = t.scrollTop()
      150 <= e && !l ? (l = !0) : e < 150 && l && (l = !1),
        o[l ? 'hide' : 'show'](),
        (a.toggleClass('reverse', l).find('.logo img')[0].src =
          '../assets/img/' + (l ? 'alibaba-logo.png' : 'logo.png'))
    }),
    util.fixbar({
      help: !0,
      click: function(e) {
        console.log(e), 'bar1' === e && alert('click bar1')
      },
    })
})
