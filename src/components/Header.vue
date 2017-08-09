<template>
  <header class="header">
    <router-link class="logo" :to="{path: '/'}"><img alt="Logo" src="../assets/logo.png" height="48px"></router-link>
    <router-link class="logo" :to="{path: '/product-manage'}"><span>项目管理</span></router-link>
    <router-link class="logo" :to="{path: '/user-manage'}"><span>用户管理</span></router-link>
    <router-link class="logo" :to="{path: '/auth-manage'}"><span>权限管理</span></router-link>
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
</template>

<script>
  export default {
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

<style>
  
</style>
