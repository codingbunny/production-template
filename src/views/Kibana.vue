<template>
  <section>
  <el-row v-if="proxyUrl">
    <iframe :src="proxyUrl" frameborder="0"></iframe>
  </el-row>
  </section>
</template>

<script>
  import { mapState } from 'vuex';

  export default {
    data () {
      return {
        url: '',
        proxyUrl: '',
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
      getKibanaTicket (url) {
        this.$api.getKibanaTicket({
          url: url,
        }).then((res) => {
          this.proxyUrl = res.data.proxy_url;
        });
      },
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
        this.getKibanaTicket(this.url);
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
