<template>
  <section  width="100%" height="100%">
  <el-row width="100%" height="100%">
    <iframe :src="url" frameborder="0" width="100%" height="100%"></iframe>
  </el-row>
  </section>
</template>

<script>
  import { mapState } from 'vuex';

  export default {
    data () {
      return {
        url: '',
      };
    },
    computed: {
      ...mapState({
        menu: state => state.views.menu,
      }),
    },
    watch: {
      menu: {
        handler () {
          this.fetchPageDetail();
        },
        deep: true,
      },
    },
    methods: {
      fetchPageDetail () {
        let target = {};
        this.menu.forEach((menu) => {
          if (!menu.source && menu.items.length > 0) {
            menu.items.forEach((item) => {
              if (item.name === this.$route.params.name) target = item;
            });
          } else if (menu.source && (!menu.items || menu.items.length === 0)) {
            if (menu.name === this.$route.params.name) target = menu;
          }
        });
        this.url = target.url;
      },
    },
    created () {
      this.$store.dispatch('updateCurrentView', {
        name: this.$route.name,
        params: {
          name: this.$route.params.name,
        },
      });
      if (this.menu.length) this.fetchPageDetail();
    },
  };
</script>

<style>
  
</style>
