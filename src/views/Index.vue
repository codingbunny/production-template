<template>
  <div style="height: 100%">
    <header-nav v-bind:logo="logo" v-if="menu.length"></header-nav>
    <el-row class="container">
      <side-nav v-if="menu.length" v-bind:menu="menu"></side-nav>
      <el-row class="content">
        <router-view></router-view>
      </el-row>
    </el-row>
  </div>
</template>

<script>
  import { mapState } from 'vuex';
  import headerNav from './components/Header.vue';
  import sideNav from './components/Nav.vue';
  export default {
    data () {
      return {
        menu: [],
        logo: '',
      };
    },
    computed: {
      ...mapState({
        currentView: state => state.views.currentView,
      }),
    },
    components: {
      headerNav, sideNav,
    },
    watch: {
      currentView () {
        this.$router.push(this.currentView);
      },
    },
    methods: {
      fetchProjectDetail (id) {
        this.$api.fetchProjectDetail(id).then((res) => {
          console.log(res);
          this.menu = res.data.menu;
          this.logo = res.data.info.logo;
          this.$store.dispatch('updateMenu', this.menu);
          if (!Object.keys(this.currentView).length) {
            let source = '';
            let name = '';
            if (!this.menu[0].source && this.menu[0].items.length === 0) {
              source = this.menu[0].source;
              name = this.menu[0].name;
            } else {
              source = this.menu[0].items[0].source;
              name = this.menu[0].items[0].name;
            }
            this.$store.dispatch('updateCurrentView', {
              name: source,
              params: {
                name: name,
              },
            });
          }
        });
      },
    },
    created () {
      this.fetchProjectDetail(this.$route.params.id);
    },
  };
</script>

<style>
  
</style>
