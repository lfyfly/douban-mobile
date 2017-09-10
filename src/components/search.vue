<!-- —————————————↓SCSS———————分界线————————————————————————— -->
<style lang="scss">
@import 'src/scss/index.scss';

#search {
  position: fixed;
  top: 0;
  bottom: 0;
  z-index: 999;
  overflow: hidden;

  width: 100%;

  background: #fff;
}
// ————————————————————————————————————————————
#search-bar {
  display: flex;
  align-items: center;

  height: .6rem;
  padding: 0 .18rem;
  border-bottom: 1px solid #f4f4f4;
  &>.close {
    margin-right: .12rem;

    font-size: .16rem;
    color: #42bd56;
  }
  .search-input {
    flex-grow: 1;

    box-sizing: border-box;
    height: .3rem;
    padding: 0 .4em;
    border: none;
    background:  #f3f3f3 url('/static/img/body/search/search-btn-icon.png') no-repeat center/.18rem .18rem;

    font-size: .14rem;

    &:focus {
      background: #f3f3f3;
    }
  }
}
// ————————————————————————————————————————————
#search-type {
  margin-top: .12rem;
  display: flex;
  flex-wrap: wrap;
  text-align: center;
  &>* {
    box-sizing: border-box;
    width: 33.3%;
    padding: .16rem;
  }
  .title {
    font-size: .22rem;
  }
  .type1 {
    color: rgb(35, 132, 232);
  }
  .type2 {
    color: rgb(122, 106, 219);
  }
  .type3 {
    color: rgb(159, 120, 96);
  }
  .type4 {
    color: rgb(230, 70, 126);
  }
  .type5 {
    color: rgb(42, 184, 204);
  }
  .type6 {
    color: rgb(244, 143, 46);
  }
  .type7 {
    color: rgb(159, 120, 96);
  }
  .type8 {
    color: rgb(87, 116, 197);
  }
  .type9 {
    color: rgb(89, 108, 221);
  }
  .type10 {
    color: rgb(225, 100, 77);
  }
  .type11 {
    color: rgb(64, 207, 169);
  }
  .type12 {
    color: rgb(66, 189, 86);
  }
  .info {
    color: #999;
    font-size: .12rem;
  }
}
// ————————————————————————————————————————————
#bottom-list {
  display: flex;
  flex-wrap: wrap;

  &>li {
    text-align: center;

    box-sizing: border-box;
    width: 50%;
    padding: .14rem 0;
    border-top: 1px solid #f3f3f3;
    border-bottom: 1px solid #f3f3f3;

    color: #42bd56;

    a.bottom-list-item {
      display: inline-block;
      width: 100%;

      color: #42bd56;
    }
    &:nth-child(even) a {
      border-left: 1px solid #e5e5e5;
    }
    &:nth-child(3),
    &:nth-child(4) {
      border-top: none;
    }
  }
}
</style>

<!-- —————————————↓HTML————————分界线———————————————————————— -->
<template lang="pug">
#search(:style="!isMobile?{width:pcWidth+'px',left:'50%',marginLeft: -pcWidth/2 +'px' }:''")
  #search-bar
    a.close(@click="hideSearch") 关闭
    input.search-input(v-model="searchText",type="search",:style="{background: searchText? '#f3f3f3':''}")
  ul#search-type
    li(v-for="(v,i) in searchTypeData")
      a(:class="'type'+i")
        h2.title {{v.title}}
        p.info {{v.info}}
  ul#bottom-list
    li(v-for="v in bottomListDara")
      a.bottom-list-item {{v.text}}
</template>

<!-- ——————————————↓JS—————————分界线———————————————————————— -->
<script>
import BUS from 'src/bus/bus.js'

export default {
  name: 'search',
  data() {
    return {
      msg: 'this is from search.vue',
      showSearchBtn: true,
      searchText: '',
      searchTypeData: [
        { title: '电影', info: '影院热映' },
        { title: '电视', info: '正在热播' },
        { title: '图书', info: '畅销排行' },
        { title: '同城', info: '周末活动' },
        { title: '小组', info: '志趣相投' },
        { title: '音乐', info: '新碟榜' },
        { title: '阅读', info: '电子书' },
        { title: '游戏', info: '虚拟世界' },
        { title: '应用', info: '玩手机' },
        { title: '东西', info: '心爱之物' },
        { title: 'FM', info: '红心歌单' },
        { title: '市集', info: '购买原创' },
      ],
      bottomListDara: [
        { text: '注册账号' },
        { text: '登录豆瓣' },
        { text: '使用桌面版' },
        { text: '使用豆瓣App' },
      ]
    }
  },
  computed: {
    isMobile() {
      return BUS.isMobile
    },
    pcWidth() {
      return BUS.pcWidth
    },
    searchShow() {
      return BUS.searchShow
    }
  },
  methods: {
    hideSearch() {
      BUS.searchShow = false
    }
  }
}
</script>
