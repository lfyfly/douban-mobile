<!-- —————————————↓SCSS———————分界线————————————————————————— -->
<style lang="scss">
.movie-book-discovery {

  h2.title {
    margin: .1rem 0 0 .18rem;

    font-size: .16rem;
    line-height: .56rem;
  }
  .discover-scroll-container {
    overflow-x: scroll;
  }
  .discover-list {
    padding-left: .18rem;
    white-space: nowrap;
    &>li {
      display: inline-block;
      .link4,
      .link8 {
        margin-right: .18rem;
        color: #FF4055;
        border-color: #FF4055;
      }
      .link1 {
        color: #CC3344;
        border-color: #CC3344;
      }
      .link2,
      .link3 {
        color: #FFAC2D;
        border-color: #FFAC2D;
      }
      .link5,
      .link6 {
        color: #2384E8;
        border-color: #2384E8;
      }
      .link7 {
        color: #42BD56;
        border-color: #42BD56;
      }

      a {
        display: inline-block;
        height: 50px;
        padding: 0 .26rem;
        margin-right: .08rem;
        margin-bottom: .06rem;
        border: 1px solid red;
        border-radius: 4px;

        text-align: center;
        line-height: 50px;
        letter-spacing: .1em;
      }
    }
  }
}
</style>

<!-- —————————————↓HTML————————分界线———————————————————————— -->
<template lang="pug">
.movie-book-discovery
  h2.title {{title}}
  .discover-scroll-container
    ul.discover-list
      template(v-for="(v,i) in data")
        li: a(:class="'link'+(i+1)") {{v.text}}
        br(v-if="i===3")

</template>

<!-- ——————————————↓JS—————————分界线———————————————————————— -->
<script>
//import XXX from './components/XXX'

export default {
  name: 'movie-book-discovery-item',
  props: {
    title: {
      type: String,
      required: true
    },
    data: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      msg: 'this is from movie-book-discovery-item.vue'
    }
  },
  methods: {

  }
}
</script>
