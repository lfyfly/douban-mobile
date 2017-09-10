<!-- —————————————↓SCSS———————分界线————————————————————————— -->
<style lang="scss">
#my-body{
  position: absolute;
  top:.47rem;

  width: 100%;
  box-sizing: border-box;
}

</style>

<!-- —————————————↓HTML————————分界线———————————————————————— -->
<template lang="pug">
#my-body
  keep-alive
    router-view


</template>

<!-- ——————————————↓JS—————————分界线———————————————————————— -->
<script>
//import XXX from './components/XXX'

export default {
  name: 'my-body',
  data () {
    return {
      msg: 'this is from my-body.vue'
    }
  },
  methods: {

  }
}
</script>
