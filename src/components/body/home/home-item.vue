<!-- —————————————↓SCSS———————分界线————————————————————————— -->
<style lang="scss">
@import 'src/scss/index.scss';

.home-item {
  -webkit-tap-highlight-color: rgba(0, 0, 0, .05);

  display: block;
  padding: .25rem 0;
  border-bottom: 1px solid #f5f5f5;
  &>.content {
    &.hasCover {
      &>h3,
      &>p {
        margin-right: 1.14rem;
      }
    }
    &>p {
      -webkit-line-clamp: 3; // 2行

    }
    .cover {
      display: inline-block;
      width: .88rem;
      height: .88rem;
      background-size: cover;
    }

    &>h3 {
      font-size: .17rem;
      line-height: 1.4;
    }

    &>p {
      font-size: .12rem;
      color: #aaa;
      line-height: 1.5;
      margin-top: .05rem;
    }
  }
  .layout2 {
    // 图片布局
    margin-bottom: .12rem;
    border: none;
    padding: 0;
    .cover-2 {
      width: 2.54rem;
      height: 1.64rem;
      background-size: cover;
      display: inline-block;
    }
    .title {
      margin-top: .06rem;
    }
    .more-pic {
      &>* {
        width: .8rem;
        height: .8rem;
        background-size: cover;
      }
      .more-pic-1 {
        margin-bottom: .04rem;
      }
    }
  }

  .author {
    width: 100%;
    color: #ccc;
    font-size: .12rem;
    margin-top: .05rem;
  }
}
</style>

<!-- —————————————↓HTML————————分界线———————————————————————— -->
<template lang="pug">
a.home-item.clearfix
  .content.clearfix(:class="{hasCover: data.target.cover_url,layout2:data.layout!=1}")
    template(v-if="data.layout==1")
      .cover.fr(v-if="data.target.cover_url", :style="{backgroundImage:`url(${data.target.cover_url})`}")
      h3.title {{data.title}}
      p.text-overflow-multi-line {{data.target.desc}}

    //- 图片布局 layout2
    template(v-else)
      .cover-2(:style="{backgroundImage:`url(${data.target.cover_url})`}")
      .more-pic.fr
        .more-pic-1(:style="{backgroundImage:`url(${data.target.more_pic_urls[0]})`}")
        .more-pic-2(:style="{backgroundImage:`url(${data.target.more_pic_urls[1]})`}")
      h3.title {{data.title}}

  div.author.clearfix
    span by {{data.target.author.name}}
    span.fr {{data.source_cn}}


</template>

<!-- ——————————————↓JS—————————分界线———————————————————————— -->
<script>
//import XXX from './components/XXX'

export default {
  name: 'home-item',
  props: {
    data: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      msg: 'this is from home-item.vue'
    }
  },
  methods: {

  }
}
</script>
