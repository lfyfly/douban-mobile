<!-- —————————————↓SCSS———————分界线————————————————————————— -->
<style lang="scss" >
.status-item {
  margin: .26rem .18rem .2rem .68rem;

  padding-bottom: .2rem;
  border-bottom: 1px solid #f5f5f5;

  &.reshares-type {

    margin-top: .4rem!important;
    .avatar {
      background-image: url('/static/img/body/status/up161017787-2.jpg') !important;
    }
  }
}

//_______________________________
.author-info {
  position: relative;
  .avatar {
    position: absolute;
    right: 100%;
    top: 0;
    margin-right: .1rem;

    border-radius: 50%;
  }

  .author {
    font-size: .16rem;
    .name {
      color: #42bd56;
      font-weight: bold;
    }
  }
  .date {
    font-size: .12rem;
    font-weight: bold;
    color: #c6c6c6;
    line-height: 1;
    margin-top: .1rem;
  }
  .reshares-text {
    // 文字'豆瓣分享'
    position: absolute;
    bottom: 100%;
    font-size: .12rem;
    color: #ccc;
    vertical-align: middle;
    .reshares {
      vertical-align: middle;
    }
  }
}

//______豆瓣分享内容_________________________
.status-content2 {
  font-size: .17rem;
  line-height: .22rem;
  margin-top: .1rem;
}

.status-content {
  border: 1px solid #d8d8d8;
  margin-top: .14rem;
  box-sizing: border-box;
  padding: .15rem;
  .title {
    font-size: .16rem;
    line-height: 1.4;
    margin-bottom: .04rem;
  }
  .row {
    position: relative;
  }
  .subtitle {
    width: 1.6rem;
    font-size: .13rem;
    line-height: .16rem;
    color: #aaa;
    -webkit-line-clamp: 3;
  }
  .img {
    width: .75rem;
    height: .48rem;
    background-size: cover;
    margin-left: .22rem;
    position: absolute;
    top: 0;
    right: 0;
  }
}

//—————评论内容————————————————————————
.rating-info {
  color: #c6c6c6;
  margin-top: .12rem;
  &>* {
    margin-right: .22rem;
  }
  .more {
    margin-right: 0;
    font-size: .12rem;
  }
  div>i {
    vertical-align: -.04rem;
  }
}
</style>

<!-- —————————————↓HTML————————分界线———————————————————————— -->
<template lang="pug">
.status-item(:class="data.type==='reshares'?'reshares-type':''")
  .author-info
    //- 文字： 豆瓣分享
    .reshares-text(v-if="data.type==='reshares'") 豆瓣 转播
      i.retweet-gray-icon.reshares

    .avatar.douban-avatar
    .author
      span.name {{data.author_name}}
      span &nbsp;{{data.activity}}
    .date {{data.create_time}}

  .status-content(v-if="data.card")
    .title.text-overflow-multi-line {{data.card.title}}
    .row
      .subtitle.text-overflow-multi-line(:style="{width: data.card.image?'':'auto'}") {{data.card.subtitle}}
      .img(:style="{backgroundImage:`url(${data.card.image})`}")

  //- 豆瓣分享内容
  .status-content2(v-else) {{data.text}}

  .rating-info.horizontal
    .like-count
      i.like-grey-icon
      span {{data.like_count}}
    .comment-count
      i.comment-icon
      span {{data.comments_count}}
    .share-count
      i.retweet-gray-icon
      span {{data.reshares_count}}
    .more.fr
      i.more-icon
</template>

<!-- ——————————————↓JS—————————分界线———————————————————————— -->
<script>
//import XXX from './components/XXX'

export default {
  name: 'status-item',
  props: {
    data: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      msg: 'this is from status-item.vue'
    }
  },
  methods: {

  }
}
</script>
