<template>
  <header class="header">
    <router-link class="logo" :to="{path: '/'}"><img alt="Logo" :src="'/api/common/uploads/'+logo" height="48px"></router-link>
    <el-row class="user-info">
    <el-dropdown trigger="click">
        <span class="el-dropdown-link">
          <span class="avatar"><i class="iconfont icon-user"></i></span>
          <span>{{ $auth.user().username }}</span>
          <i class="el-icon-arrow-down el-icon--right"></i>
        </span>
        <el-dropdown-menu slot="dropdown" class="db-dropdown">
          <el-dropdown-item @click.native="$router.push({name: 'account'})"><i class="iconfont icon-user-tie el-icon--left"></i>{{ $t('common.account') }}</el-dropdown-item>
          <el-dropdown-item @click.native="logout"><i class="iconfont icon-exit el-icon--left"></i>{{ $t('common.logout') }}</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </el-row>
    </header>
</template>

<script>
  export default {
    props: ['logo'],
    data () {
      return {
        currentLang: this.$i18n.locale,
      };
    },
    methods: {
      switchLang (lang) {
        this.$i18n.locale = lang;
      },
      logout () {
        this.$http.post('/api/auth/logout').then((res) => {
          if (res.body.ok) {
            this.$auth.logout().then(() => {
              this.$router.push({ name: 'login' });
            });
          }
        });
      },
    },
  };
</script>

<style>
  
</style>