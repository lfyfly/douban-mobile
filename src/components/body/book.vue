<!-- —————————————↓SCSS———————分界线————————————————————————— -->
<style lang="scss">
.book {
  .book-shop-header {
      margin-bottom: .2rem;
      margin-left: .18rem;
    display: block;
    &>img {
      width: 1rem;
      height: 1.32rem;
      margin-right: .22rem;
      vertical-align: top;
    }
    &>.right {
      width: 2.16rem;
      margin-top: .1rem;
      p {
        font-size: .16rem;
        .price {
          color: #E76648;
        }
      }
      .desc {
        font-size: .12rem;
        line-height: 1.5;
        color: #9B9B9B;
        margin-top: .1rem;
      }
    }
  }
}
</style>

<!-- —————————————↓HTML————————分界线———————————————————————— -->
<template lang="pug">
.book
  book-item(v-if="bookHotfictionData",title="最受关注图书｜虚构类",:data="bookHotfictionData")
  book-item(v-if="bookNonfictionData",title="最受关注图书｜非虚构类",:data="bookNonfictionData")
  book-item(v-if="bookShopData",title="豆瓣书店",:data="bookShopData")
    .book-shop-header.horizontal
      img(:src="bookShopHeaderData.poster")
      .right
        p.clearfix
          span.title {{bookShopHeaderData.title}}
          span.price.fr ￥{{bookShopHeaderData.price}}
        .desc {{bookShopHeaderData.desc}}

  book-discovery(title="发现好图书",:data="bookDiscoveryData")
  book-classify(:data="bookClassifyData")
  download-app
</template>

<!-- ——————————————↓JS—————————分界线———————————————————————— -->
<script>
import bookItem from './movie-book/movie-book-item.vue'
import bookDiscovery from './movie-book/movie-book-discovery.vue'
import bookClassify from './movie-book/movie-book-classify.vue'
import downloadApp from './commom/download-app.vue'

// 模拟数据
import bookHotfictionData from 'src/mockData/book/bookHotfictionData.js'
import bookNonfictionData from 'src/mockData/book/bookNonfictionData.js'
import bookShopData from 'src/mockData/book/bookShopData.js'
console.log(bookShopData)
export default {
  name: 'book',
  components: {
    bookItem,
    bookDiscovery,
    bookClassify,
    downloadApp
  },
  data() {
    return {
      msg: 'this is from book.vue',

      bookHotfictionData,
      bookNonfictionData,
      bookShopData,
      bookDiscoveryData: [
        { text: '小波看书' },
        { text: '村上春树周边' },
        { text: '我凭名字认定了你' },
        { text: '不可饶恕的女人们' },
        { text: '爱欲书' },
        { text: '他们还写侦探小说' },
        { text: '人生识字始忧患' },
        { text: '詩歌書店' },
      ],
      bookClassifyData: [
        { text: '小说' },
        { text: '爱情' },
        { text: '历史' },
        { text: '外国文学' },
        { text: '青春' },
        { text: '励志' },
        { text: '随笔' },
        { text: '传记' },
        { text: '推理' },
        { text: '旅行' },
        { text: '奇幻' },
        { text: '经管' },
      ],
      bookShopHeaderData: {
        title: '不可思议图书馆',
        price: '48',
        desc: '让寺山修司为脑洞充值，欢迎来到冷知识图书馆',
        poster: 'static/img/body/book/book-shop/book-shop-header.jpg'
      }
    }
  },
  methods: {

  }
}
</script>
