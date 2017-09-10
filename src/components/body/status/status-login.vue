<!-- —————————————↓SCSS———————分界线————————————————————————— -->
<style lang="scss" >
@import 'src/scss/index.scss';
.status-login {
  display: flex;
  align-items: center;
  justify-content: space-between;

  height: .6rem;
  border-bottom: 1px solid #f4f4f4;

  .left,
  .right {
    display: flex;
    align-items: center;
  }
  .left {
    margin-left: .18rem;
    font-size: .16rem;
    color: #aaa;

    .avatar {
      margin-right: .12rem;
      border-radius: 50%;
    }
  }
  .right {
    margin-right: .24rem;
    .pen-icon {
      margin-right: .2rem;
    }
  }
}
</style>

<!-- —————————————↓HTML————————分界线———————————————————————— -->
<template lang="pug">
.status-login
  .left
    a.avatar.avatar-icon
    .text 登录发广播
  .right
    a.pen-icon
    a.carmera-icon


</template>

<!-- ——————————————↓JS—————————分界线———————————————————————— -->
<script>
//import XXX from './components/XXX'

export default {
  name: 'status-login',
  data() {
    return {
      msg: 'this is from status-login.vue'
    }
  },
  methods: {

  }
}
</script>
