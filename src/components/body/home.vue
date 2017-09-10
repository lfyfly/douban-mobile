<!-- —————————————↓SCSS———————分界线————————————————————————— -->
<style lang="scss">
@import 'src/scss/index.scss';
#home {
  margin: 0 .18rem;
}

#quick-nav {
  display: flex;
  flex-flow: row wrap;

  width: 100%;
  margin-top: .26rem;
  &>li {
    box-sizing: border-box;
    width: 50%;
    padding: .03rem;
    &>a {
      text-align: center;
      line-height: .44rem;

      display: block;
      border-radius: .02rem;

      background: #f6f6f6;
      -webkit-tap-highlight-color: rgba(0, 0, 0, .05);
    }
  }
}

.load-more {
  margin-top: 25px;
  margin-bottom: 50px;
  height: .4rem;
  background: url('/static/img/body/home/loading_grey.gif') 50% 50% no-repeat;
  background-size: .24rem .24rem;
}

.no-more {
  text-align: center;
  line-height: 3;
}

.first-loading {
  position: fixed;
  margin: auto;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;

  @include bgImgRem(.4, .4, '/static/img/loading_green.gif');
}
</style>

<!-- —————————————↓HTML————————分界线———————————————————————— -->
<template lang="pug">
#home
  ul#quick-nav
    li(v-for="v in quickNavData")
      a {{v.text}}
  #home-content(v-if="contentData.length!=0",v-for="item in contentData")
    home-item(v-for="v in item", :data="v")

  .first-loading(v-if="firstLoaing")
  .load-more(v-if="!allLoaded&&!firstLoaing")
  .no-more(v-if="allLoaded") 没有更多了
</template>

<!-- ——————————————↓JS—————————分界线———————————————————————— -->
<script>
import homeItem from './home/home-item.vue'
import homeData1 from 'src/mockData/home/homeData-1.js'

export default {
  name: 'home',
  components: {
    homeItem
  },
  data() {
    return {
      msg: 'this is from home.vue',
      isLoading: false,
      allLoaded: false, // 全部加载完成之后（假设加载次数上限为5次），隐藏加载动画
      count: 1, // 加载的次数统计
      maxCount: 10, //加载次数上限为5次
      contentData: [],
      quickNavData: [{ text: '影院热映' }, { text: '华语新碟榜' }, { text: '豆瓣时间' }, { text: '使用豆瓣app' }],
    }
  },
  computed: {
    firstLoaing() {
      return this.contentData.length === 0
    }
  },
  methods: {

  },
  created() {
    // 模拟首次已经加载过了
    // 模拟首次加载时间
    setTimeout(() => {
      this.contentData.push(homeData1.recommend_feeds)
    }, 1000)
  },
  mounted() {
    window.addEventListener('scroll', () => {
      // 如果不是主页，或 首页数据已经全部加载完，就不触发滚动加载
      if (this.$route.path != '/home' || this.allLoaded) return

      // 距离底部100px 开始加载
      // && 如果处于数据加载中，就不会多次触发
      if (document.body.scrollHeight - window.innerHeight - document.body.scrollTop <= 100 && !this.isLoading) {
        this.isLoading = true
        console.log('加载中。。。')

        // 模拟数据获取过程,加载时间为1s
        setTimeout(() => {
          this.contentData.push(homeData1.recommend_feeds)
          console.log('加载完成')

          // 对加载的次数进行记录，是请求数据的动态参数
          this.count++
          if (this.count === this.maxCount) this.allLoaded = true
          // 加载完成
          this.isLoading = false
        }, 1000)
      }
    })
  }
}
</script>
