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

var mixins = {
  data: function() {
    return {
      colorOverview: colorOverview.map(item => ({
        ...item,
        title: i18n.t(item.title),
        subtitle: i18n.t(item.subtitle),
        list: item.list.map(item => ({
          ...item,
        })),
      })),
      promotionColors: promotionColors.map(item => ({
        ...item,
        title: i18n.t(item.title),
        subtitle: i18n.t(item.subtitle),
        list: item.list.map(item => ({
          ...item,
        })),
      })),
    }
  },
  methods: {
    copyColor: function(e) {
      this.$message({ type: 'success', message: 'Copy ' + e + ' success!' }),
        copy(e)
    },
    handleTabClick() {},
  },
}
