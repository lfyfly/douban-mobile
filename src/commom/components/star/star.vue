<!-- —————————————↓SCSS———————分界线————————————————————————— -->
<style lang="scss">
.star {
  background: url('./star-rating.png');
  background-size: cover;
  background-repeat: no-repeat;
  width: 60px;
  height: 12px;
}

.star0 {
  background-position: 0 -12 * 0px;
}
.star1 {
  background-position: 0 -12 * 1px;
}

.star2 {
  background-position: 0 -12 * 2px;
}

.star3 {
  background-position: 0 -12 * 3px;
}
.star4 {
  background-position: 0 -12 * 4px;
}
.star5 {
  background-position: 0 -12 * 5px;
}
.star6 {
  background-position: 0 -12 * 6px;
}
.star7 {
  background-position: 0 -12 * 7px;
}
.star8 {
  background-position: 0 -12 * 8px;
}
.star9 {
  background-position: 0 -12 * 9px;
}
.star10 {
  background-position: 0 -12 * 10px;
}

</style>

<!-- —————————————↓HTML————————分界线———————————————————————— -->
<template lang="pug">
.star(:class="score")


</template>

<!-- ——————————————↓JS—————————分界线———————————————————————— -->
<script>
//import XXX from './components/XXX'

export default {
  name: 'star',
  props: {
    starsNum: {
      default: 50
    }
  },
  data() {
    return {
      msg: 'this is from star.vue'
    }
  },
  computed: {
    score() {
      return 'star' +  (10 - this.starsNum / 5)
    }
  },
  methods: {

  }
}
</script>
