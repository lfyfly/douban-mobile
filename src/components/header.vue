<!-- —————————————↓SCSS———————分界线————————————————————————— -->
<style lang="scss">
#my-header {
  position: fixed;
  z-index: 99;

  display: flex;
  align-items: center;
  justify-content: space-between;


  box-sizing: border-box;
  width: 100%;
  height: .47rem;
  padding: 0 .18rem;

  background: #fff;
  border-bottom: 1px solid #f3f3f3;
}

#header-nav {
  font-size: .16rem;

  &>ul>* {
    margin: 0 .1rem;
  }
  .item-movie {
    color: #2384E8;
  }
  .item-book {
    color: #9F7860;
  }
  .item-status {
    color: #E4A813;
  }
  .item-group {
    color: #2AB8CC;
  }
  .search-icon {
    vertical-align: middle;

    margin-top: .04rem;
    margin-left: .1rem;
  }
}
</style>

<!-- —————————————↓HTML————————分界线———————————————————————— -->
<template lang="pug">
#my-header
  router-link.left.link-home.douban-logo(to="/home")
  #header-nav.right.horizontal
    ul.horizontal
      li: router-link.item-movie(to="/movie") 电影
      li: router-link.item-book(to="/book") 图书
      li: router-link.item-status(to="/status") 广播
      li: router-link.item-group(to="/group") 小组
    .search-icon(@click="showSearchFn")
</template>

<!-- ——————————————↓JS—————————分界线———————————————————————— -->
<script>

import BUS from 'src/bus/bus.js'


export default {
  name: 'my-header',
  data() {
    return {
      msg: 'this is from my-header.vue',
      imgSrc: ''
    }
  },

  methods: {
    showSearchFn() {
      BUS.searchShow = true
    }
  },

}
</script>
