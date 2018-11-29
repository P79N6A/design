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
    r = !1
  $('.icon-close .icon-category').click(function() {
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
      200 <= e && !r ? (r = !0) : e < 200 && r && (r = !1),
        o[r ? 'hide' : 'show'](),
        (a.toggleClass('reverse', r).find('.logo img')[0].src =
          '../assets/img/' + (r ? 'alibaba-logo.png' : 'logo.png'))
    }),
    util.fixbar({
      help: !0,
      click: function(e) {
        console.log(e), 'bar1' === e && alert('click bar1')
      },
    })
})
