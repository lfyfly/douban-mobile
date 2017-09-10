<template lang="pug">
#app
  my-header(:style="!isMobile?{width:pcWidth+'px',left:'50%',marginLeft: -pcWidth/2 +'px' }:''")
  my-body(:style="!isMobile?{width:pcWidth+'px',left:'50%',marginLeft: -pcWidth/2 +'px' }:''")
  search(v-if="searchShow")
</template>

<script>
import myHeader from 'components/header.vue'
import myBody from 'components/body.vue'
import search from 'components/search.vue'

import BUS from 'src/bus/bus.js'
console.log(BUS.isMobile)
export default {
  name: 'app',
  components: {
    myHeader,
    myBody,
    search
  },
  computed: {
    isMobile() {
      return BUS.isMobile
    },
    pcWidth() {
      return BUS.pcWidth
    },
    searchShow() {
      return BUS.searchShow
    }
  },
  beforeCreate() {

  }

}
</script>

<style lang="scss">
@import 'src/scss/index.scss';

@import 'src/commom/scss/reset.scss';
@import 'src/icon/bg-icon.scss';


::-webkit-scrollbar {
  /*隐藏滚轮*/
  display: none;
}
// 非移动动显示为600px
body {
  position: relative;

  overflow: scroll;
  a {
    -webkit-tap-highlight-color: transparent;
  }
}

#app {

}

// 对body标签的属性设置在这
</style>
