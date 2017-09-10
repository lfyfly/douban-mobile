<!-- —————————————↓SCSS———————分界线————————————————————————— -->
<style lang="scss" >
.download-app {
  text-align: center;
  margin: .5rem -0;
  .row1 {
    img {
      width: .48rem;
      height: .48rem;
      vertical-align: top;
      margin-right: .12rem;
    }
    strong {
      font-size: .22rem;
      display: block;
      text-align: left;
    }
  }
  .row2 {
    color: #42bd56;
    margin-top: .18rem;
    line-height: 1;
  }
}
</style>

<!-- —————————————↓HTML————————分界线———————————————————————— -->
<template lang="pug">
.download-app
  .row1.horizontal
    img.douban-app-logo(src="/static/img/douban-app-logo.png")
    .right
      strong 豆瓣
      p 我们的精神角落
  p.row2 去 App Store 免费下载 iOS 客户端

</template>

<!-- ——————————————↓JS—————————分界线———————————————————————— -->
<script>
//import XXX from './components/XXX'

export default {
  name: 'download-app',
  data() {
    return {
      msg: 'this is from download-app.vue'
    }
  },
  methods: {

  }
}
</script>
