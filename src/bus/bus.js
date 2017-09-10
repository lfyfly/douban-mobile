import Vue from 'vue'

export default new Vue({
  data: {
    searchShow: false,
    pcWidth: 600, // pc 网页宽度端默认为66px
  },
  computed: {
    isMobile() { // 时候为移动端
      return navigator.userAgent.match(/(iPhone|iPod|Android|ios)/i) ? true : false
    }
  },
  methods: {
    initHtmlFontSize() {
      var htmlFontSize
      // 采用rem布局，移动端根据屏幕宽度计算html 的font-size
      // pc端由 pcWidth设为固定宽度
      htmlFontSize = this.isMobile ? window.innerWidth / 3.75 : this.pcWidth / 3.75
      document.documentElement.style.fontSize = htmlFontSize + 'px';
    }
  },
  created() {
    this.initHtmlFontSize()
  },
  watch:{
    searchShow(newV){
      // 搜索框时禁止滚动
      document.body.style.overflow= newV?'hidden':'scroll'
    }
  }
})
