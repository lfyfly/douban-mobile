<!-- —————————————↓SCSS———————分界线————————————————————————— -->
<style lang="scss">
.group{
  margin: 0 .18rem;
}

</style>

<!-- —————————————↓HTML————————分界线———————————————————————— -->
<template lang="pug">
.group
  group-item(v-for="v in groupData", :data="v")
  download-app
</template>

<!-- ——————————————↓JS—————————分界线———————————————————————— -->
<script>
import groupItem from './group/group-item.vue'
import downloadApp from './commom/download-app.vue'

import groupData from 'src/mockData/group/groupData.js'

export default {
  name: 'group',
  components:{
    groupItem,
    downloadApp
  },
  data () {
    return {
      msg: 'this is from group.vue',
      groupData
    }
  },
  methods: {

  }
}
</script>
