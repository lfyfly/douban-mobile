<!-- —————————————↓SCSS———————分界线————————————————————————— -->
<style lang="scss">
.movie-book-classify {
  margin-left: .18rem;
  padding-bottom: .3rem;
  &>.title {
    font-size: .16rem;
    line-height: .56rem;
    margin-top: .14rem;
  }
  &>ul {
    overflow: hidden;
    li {
      display: inline-block;
      box-sizing: border-box;
      width: 50%;
      line-height: .42rem;

      a {
        display: block;
        color: #42bd56;
      }
      .right-ward-icon {

        display: inline-block;
        border-right: solid 1px #ccc;
        border-bottom: solid 1px #ccc;
        width: .1rem;
        height: .1rem;
        vertical-align: middle;
        transform: rotate(-45deg);
        margin-top: .16rem;
        margin-right: .2rem;
      }
      border-top: 1px solid #eee;
      border-bottom: 1px solid #eee;
      margin-top: -1px;
    }
    li:nth-child(even) {
      a {
        margin-left: .2rem;
      }
      border-left: 1px solid #eee;
    }
  }
}
</style>

<!-- —————————————↓HTML————————分界线———————————————————————— -->
<template lang="pug">
.movie-book-classify
  h3.title 分类浏览
  ul
   li(v-for="v in data")
    a
      span {{v.text}}
      .right-ward-icon.fr
</template>

<!-- ——————————————↓JS—————————分界线———————————————————————— -->
<script>
//import XXX from './components/XXX'

export default {
  name: 'movie-book-classify',
  props: {
    data: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      msg: 'this is from movie-book-classify.vue'
    }
  },
  methods: {

  }
}
</script>
