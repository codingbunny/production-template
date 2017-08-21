<template>
  <section>
    <aside class="menu-wrapper">
      <el-menu default-active="2" class="el-menu-vertical-demo" theme="dark" unique-opened>
        <template v-for="submenu in menu">
          <el-submenu :index="submenu.name" v-if="!submenu.source && submenu.items">
            <template slot="title"><i :class="submenu.icon"></i>{{submenu.name}}</template>
            <template v-for="item in submenu.items">
              <el-menu-item :index="item.name" @click="selectMenu(item)" :class="{'is-active': $route.params.name === item.name}">
                <template slot="title"><i :class="item.icon"></i>{{item.name}}</template>
              </el-menu-item>
            </template>
          </el-submenu>
          <el-menu-item v-else :index="submenu.name" @click="selectMenu(submenu)" :class="{'is-active': $route.params.name === submenu.name}">
            <template slot="title"><i :class="submenu.icon"></i>{{submenu.name}}</template>
          </el-menu-item>
        </template>
      </el-menu>
    </aside>
  </section>
</template>

<script>
  // import { mapState } from 'vuex';
  export default {
    props: ['menu'],
    data () {
      return {
      };
    },
    methods: {
      fetchProjectDetail (id) {
        this.$api.fetchProjectDetail(id).then((res) => {
          this.menu = this.menu;
          console.log(res);
        });
      },
      selectMenu (item) {
        this.$router.push({
          name: item.source,
          params: {
            name: item.name,
          },
        });
      },
    },
  };
</script>

<style>
  
</style>
