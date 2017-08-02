<template lang="html">
  <section class="wrapper">
    <template>
      <template v-if="$route.name !== 'login'">
        <header class="header">
          <router-link class="logo" :to="{path: '/'}"><img alt="Logo" src="./assets/logo.png" height="48px"></router-link>
          <el-row class="user-info">
            <el-dropdown trigger="click">
              <span class="el-dropdown-link">
                <span class="avatar"><i class="iconfont icon-user"></i></span>
                <span>{{ $t('common.username') }}</span>
                <i class="el-icon-arrow-down el-icon--right"></i>
              </span>
              <el-dropdown-menu slot="dropdown" class="db-dropdown">
                <el-dropdown-item @click.native="$router.push({name: 'account'})"><i class="iconfont icon-user-tie el-icon--left"></i>{{ $t('common.account') }}</el-dropdown-item>
                <el-dropdown-item><i class="iconfont icon-exit el-icon--left"></i>{{ $t('common.logout') }}</el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>

            <div class="switch-lang">
              <span  @click="switchLang('zh')" :class="{ 'active-lang': currentLang === 'zh' }">中文</span> / <span  @click="switchLang('en')" :class="{ 'active-lang': currentLang === 'en' }">En</span>
            </div>
          </el-row>
        </header>

        <el-row class="container">
          <aside class="menu-wrapper">
            <el-menu default-active="2" class="el-menu-vertical-demo" theme="dark" unique-opened router>
              <template v-for="(route, index) in $router.options.routes[1].children">
                <el-menu-item v-if="!route.meta.hidden" :index="route.name" :route="route">{{ $t(`menu.${route.name}`) }}</el-menu-item>
              </template>
            </el-menu>
          </aside>

          <el-row class="content">
            <router-view></router-view>
          </el-row>
        </el-row>
      </template>
      <template v-else>
      <router-view></router-view>
    </template>
    </template>
  </section>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      currentLang: this.$i18n.locale,
    };
  },
  methods: {
    switchLang (lang) {
      this.$i18n.locale = lang;
    },
  },
};
</script>

<style lang="scss">
  @import "./styles/_global.scss";
  @import "./assets/font/iconfont.css";
</style>
