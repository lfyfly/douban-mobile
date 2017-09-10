<!-- —————————————↓SCSS———————分界线————————————————————————— -->
<style lang="scss">
.status {
  .more-status {
    padding: .15rem 0;

    text-align: center;
    font-size: .16rem;

    a {
      color: #42bd56;
    }
  }
}
</style>

<!-- —————————————↓HTML————————分界线———————————————————————— -->
<template lang="pug">
.status
  status-banner
  statusLogin
  statusItem(v-for="v in statusItemData",:data="v")

  p.more-status: a 显示更多广播

  downloadApp
  </template>

<!-- ——————————————↓JS—————————分界线———————————————————————— -->
<script>
import statusBanner from './status/status-banner.vue'
import statusLogin from './status/status-login.vue'
import statusItem from './status/status-item.vue'
import downloadApp from './commom/download-app.vue'


var statusItemData = require('src/mockData/status/status.json')

export default {
  name: 'status',
  components: {
    statusBanner,
    statusLogin,
    statusItem,

    downloadApp
  },
  data() {
    return {
      msg: 'this is from status.vue',
      statusItemData
    }
  },
  methods: {

  }
}
</script>
