<template lang="html">
  <section class="wrapper">
    <router-view></router-view>
  </section>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
    };
  },
  methods: {
  },
};
</script>

<style lang="scss">
  @import "./styles/_global.scss";
  @import "./assets/iconfont.css";
</style>
