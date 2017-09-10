<!-- —————————————↓SCSS———————分界线————————————————————————— -->
<style lang="scss" >
.group-item {
  a {
    display: inline-block;
  }

  .group-type>a {
    line-height: .5rem;
    font-size: .18rem;
  }

  .group-container {
    display: block;
    border-bottom: 1px solid #f4f4f4;
    margin-bottom: .16rem;
  }
// __________________
  .group-row1 {

    display: flex;
    justify-content: space-between;
    align-items: center;

    .group-row1.left {
      font-size: .18rem;
      display: flex;
      align-items: center;
      .group-avatar {
        width: .4rem;
        height: .4rem;
        margin-right: .14rem;
        background-size: cover;
      }
      .group-name {
        width: 2rem;
      }
    }
    .right.group-member {
      color: #ccd5e2;
    }
  }

  .group-row2.update-info {
    width: 100%;
    line-height: .4rem;
    color: #aaa;
  }

  .more-group {
    text-align: center;
    line-height: .4rem;
    margin-top: -.16rem;
    margin-bottom: .12rem;
    border-bottom: 1px solid #f4f4f4;

    a {
      color: #42bd56;
    }
  }
}
</style>

<!-- —————————————↓HTML————————分界线———————————————————————— -->
<template lang="pug">
.group-item
  h2.group-type: a {{data.type}}
  a.group-container(v-for="v in data.groups")
    .group-row1
      .left.group-row1
        .group-avatar(:style="{backgroundImage: `url(${v.avatar})`}")
        .group-name.text-overflow {{v.name}}
      .right.group-member {{v.member}}人
    p.group-row2.update-info.text-overflow {{v.update}}：{{v.title}}
  p.more-group: a 更多相关小组

</template>

<!-- ——————————————↓JS—————————分界线———————————————————————— -->
<script>
//import XXX from './components/XXX'

export default {
  name: 'group-item',
  props: {
    data: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      msg: 'this is from group-item.vue'
    }
  },
  methods: {

  }
}
</script>
