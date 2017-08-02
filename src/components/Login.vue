<template>
  <el-row class="p-login container">
    <el-row class="login-wrap">
      <el-row class="login-con">
        <el-row class="login-logo">
          <img src="../assets/logo.png" alt="" width="72px" class="logo">
        </el-row>
        <el-form class="login-form">
          <el-form-item>
            <el-input :placeholder="$t('rules.username_placeholder')"></el-input>
          </el-form-item>
          <el-form-item>
            <el-input type="password" :placeholder="$t('rules.password_placeholder')"></el-input>
          </el-form-item> 
          <el-form-item>
            <el-button
              size="large"
              type="primary">
              {{ $t('common.login') }}
            </el-button>
          </el-form-item> 

          <el-form-item style="text-align:center">
            <el-button
              size="large"
              type="text">
              微信登录
            </el-button>
          </el-form-item>
        </el-form>
      </el-row>
    </el-row>

    
  </el-row>
</template>

<script>
  export default {
    data () {
      return {};
    },
  };
</script>

<style lang="scss">
  @import "../styles/_login.scss";
</style>
