<!-- —————————————↓SCSS———————分界线————————————————————————— -->
<style lang="scss">
#movie {}
</style>

<!-- —————————————↓HTML————————分界线———————————————————————— -->
<template lang="pug">
#movie
  movie-item(v-if="movieShowingData",title="影院热映",:data="movieShowingData")
  movie-item(v-if="movieShowingData",title="免费在线电影",:data="movieFreeData")
  movie-item(v-if="movieShowingData",title="新片速递",:data="movieNewData")
  movie-discovery(:data="moveDiscoveryData",title="发现好电影")
  movie-classify(:data="classifyData")

  download-app
</template>

<!-- ——————————————↓JS—————————分界线———————————————————————— -->
<script>
import movieItem from './movie-book/movie-book-item.vue'
import movieDiscovery from './movie-book/movie-book-discovery.vue'
import movieClassify from './movie-book/movie-book-classify.vue'
import downloadApp from './commom/download-app.vue'
// 模拟数据
import movieShowingData from 'src/mockData/movie/movieShowingData.js'
import movieFreeData from 'src/mockData/movie/movieFreeData.js'
import movieNewData from 'src/mockData/movie/movieNewData.js'


export default {
  name: 'movie',
  components: {
    movieItem,
    movieDiscovery,
    movieClassify,

    downloadApp
  },
  data() {
    return {
      msg: 'this is from movie.vue',

      // 模拟数据
      movieShowingData, // 影院热映
      movieFreeData, // 免费在线电影
      movieNewData, // 新片速递

      moveDiscoveryData: [
        { text: '同时入选IMDB250和豆瓣电影250的电影' },
        { text: '带你进入不正常的世界' },
        { text: '用电【影】来祭奠逝去的岁月' },
        { text: '女孩们的故事【电影】' },
        { text: '科幻是未来的钥匙——科幻启示录【科幻题材】' },
        { text: '美国生活面面观' },
        { text: '2015终极期待' },
        { text: '经典韩国电影——收集100部' },
      ],
      classifyData: [
        { text: '经典' },
        { text: '冷门佳片' },
        { text: '豆瓣高分' },
        { text: '动作' },
        { text: '喜剧' },
        { text: '爱情' },
        { text: '悬疑' },
        { text: '恐怖' },
        { text: '科幻' },
        { text: '治愈' },
        { text: '文艺' },
        { text: '成长' },
        { text: '动画' },
        { text: '华语' },
        { text: '欧美' },
        { text: '韩国' },
        { text: '日本' }

      ]
    }
  },
  methods: {

  },
  created() {
    this.movieShowingData = movieShowingData

  },
  beforeCreated(){

  }
}
</script>
