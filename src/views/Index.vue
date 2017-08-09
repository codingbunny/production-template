<template>
  <div>
    <header-nav></header-nav>
    <el-row class="container">
      <side-nav></side-nav>
      <el-row class="content">
        <router-view></router-view>
      </el-row>
    </el-row>
  </div>
</template>

<script>
  import headerNav from '../components/Header.vue';
  import sideNav from '../components/Nav.vue';
  export default {
    data () {
      return {};
    },
    components: {
      headerNav, sideNav,
    },
  };
</script>

<style>
  
</style>
