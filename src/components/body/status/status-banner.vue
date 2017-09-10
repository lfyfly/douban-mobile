<!-- —————————————↓SCSS———————分界线————————————————————————— -->
<style lang="scss">
.status-banner {
  display: flex;
  align-items: center;
  justify-content: space-between;

  height: .8rem;
  padding-left: .18rem;
  background: url('/static/img/body/status/promotion_bg.jpg') no-repeat cover;

  color: #42bd56;

  &>.right {
    margin-right: .1rem;
    font-size: .12rem;
    .btn {
      padding: .06rem .14rem;
      font-weight: bold;
      border: 1px solid #42bd56;
      border-radius: 2px;
    }
    .btn1 {
      margin-right: .08rem;

      background: #42bd56;
      color: #fff;
    }
    .btn2 {
      box-sizing: border-box;
      color: #42bd56;
    }
  }
}
</style>

<!-- —————————————↓HTML————————分界线———————————————————————— -->
<template lang="pug">
.status-banner
  .left.text 打开app,回复广播
  .right
    a.btn.btn1 极速下载
    a.btn.btn2 打开
</template>

<!-- ——————————————↓JS—————————分界线———————————————————————— -->
<script>
//import XXX from './components/XXX'

export default {
  name: 'status-banner',
  data() {
    return {
      msg: 'this is from status-banner.vue'
    }
  },
  methods: {

  }
}
</script>
