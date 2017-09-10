<!-- —————————————↓SCSS———————分界线————————————————————————— -->
<style lang="scss" >
@import 'src/scss/index.scss';

.item-header {
  display: flex;
  align-items: center;
  justify-content: space-between;

  box-sizing: border-box;
  height: .40rem;
  margin: 0 .18rem .1rem .18rem;

  .movie-type {
    font-size: .16rem;
  }
  .movie-more {
    color: #42bd56;
    font-size: .14rem;
  }
} //_____________________________________
.scroll-container {
  overflow-x: scroll;
  overflow-y: hidden;
}


.all-container {
  display: flex;
  width: 8rem + .08rem * 7;
  margin-bottom: .14rem;
  padding: 0 .18rem;


  .item-container {
    width: 1rem;
    margin-right: .08rem;
    &:last-child {
      margin-right: 0;
    }
    .item-poster {
      width: 1rem;
      height: 1.43rem;
      background-repeat: no-repeat;
      background-size: cover;
    }
    .item-title {
      font-size: .14rem;
      margin: .06rem 0;
      text-align: center;
    }
  }
  .rating {
    text-align: center;
    color: #bdbdbd;
    font-size: .12rem;
    &>* {
      display: inline-block;
      vertical-align: middle;
    }
    .rating-average {
      margin-left: .04rem;
    }
  }
  .price {
    text-align: center;
    color: #bdbdbd;
    font-size: .12rem;
  }
}
</style>

<!-- —————————————↓HTML————————分界线———————————————————————— -->
<template lang="pug">
//- movie.vue 与 book.vue 共用
.movie-book-item
  .item-header
    h2.movie-type: a {{title}}
    a.movie-more 更多
  //- 书店时插值
  slot

  //- 水平滚动部分
  .scroll-container
    .all-container
      a.item-container(v-for="v in data")
        .item-poster(:style="{backgroundImage:`url(${v.poster})`}")
        h3.item-title.text-overflow {{v.title}}

        //- 不是暂时书店的时候渲染
        template(v-if="!isBookShop")
          .rating(v-if="v.rating.average")
            star.rating-star(:starsNum="v.rating.stars")
            .rating-average {{v.rating.average}}

          p.rating(v-else) 暂无评分
        //- 书店
        template(v-if="isBookShop")
          p.price ￥{{v.price}}

</template>

<!-- ——————————————↓JS—————————分界线———————————————————————— -->
<script>
//import XXX from './components/XXX'
import star from 'src/commom/components/star/star.vue'

export default {
  name: 'movie-book-item',
  components: {
    star
  },
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
  computed: {
    isBookShop() {
      return this.title === '豆瓣书店'
    }
  },
  data() {
    return {
      msg: 'this is from movie-book-item.vue'
    }
  },
  methods: {

  }
}
</script>
