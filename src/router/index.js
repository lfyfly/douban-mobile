import Vue from 'vue'
import Router from 'vue-router'

// 路由组件
import home from 'components/body/home'
import movie from 'components/body/movie'
import book from 'components/body/book'
import status from 'components/body/status'
import group from 'components/body/group'

Vue.use(Router)

var router = new Router({
  routes: [
    {
      path: '', redirect: '/home'
    },
    {
      path: '/home',
      name: 'home',
      component: home
    },
    {
      path: '/movie',
      name: 'movie',
      component: movie
    },
    {
      path: '/book',
      name: 'book',
      component: book
    },
    {
      path: '/status',
      name: 'status',
      component: status
    },
    {
      path: '/group',
      name: 'group',
      component: group
    },
  ],

})
router.beforeEach((to, from, next) => {

  window.scrollTo(0, 0) // 切换路由滚动条归位

  next() // 必须的
})
export default router
