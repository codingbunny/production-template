<template>
  <el-row class="iframe-wrapper" id="view" :key="view.name">
    <object class="tableauViz" style="display:none;">
      <param
        v-for="(value, key) in view"
        :name="key"
        :value="value"
      />
    </object>
    <router-view></router-view>
  </el-row>
</template>

<script>
  import { mapState } from 'vuex';

  export default {
    data () {
      return {
        view: {
          name: '',
          ticket: '',
        },
        viz_script: '',
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
      getTableauTicket (url) {
        this.$api.getTableauTicket({
          url: url,
        }).then((res) => {
          this.viz_script = res.data.viz_script_src;
          this.view.name = `${res.data.workbook}/${res.data.view}`;
          this.view.ticket = res.data.ticket;
          if (res.data.site && res.data.site !== null) this.view.site_root = `/t/${res.data.site}`;
          this.addJs();
        });
      },
      addJs () {
        const script = document.createElement('script');
        script.type = 'text/javascript';
        script.src = this.viz_script;
        script.id = 'viz_script';
        document.body.appendChild(script);
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
        this.getTableauTicket(target.url);
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
