<template>
  <el-row class="p-login container">
    <el-row class="login-wrap">
      <el-row class="login-con">
        <el-row class="login-logo">
          <img src="../assets/logo.png" alt="" width="72px" class="logo">
        </el-row>
        <el-form v-model="form" ref="form">
          <el-form-item prop="username">
            <el-input
              size="large"
              :placeholder="$t('rules.username_placeholder')"  v-model="form.username">
            </el-input>
          </el-form-item>
          <el-form-item prop="password">
            <el-input
              type="password"
              size="large"
              :placeholder="$t('rules.password_placeholder')"  v-model="form.password" @keyup.enter.native="login">
            </el-input>
          </el-form-item> 
          <el-form-item>
            <el-col :span="12">
              <el-checkbox label="记住密码" name="type"></el-checkbox>
            </el-col>
            <el-col :span="12">
              <a href="#" class="link-blue">忘记密码？</a>
            </el-col>
          </el-form-item>
          <el-form-item>
            <el-button
              size="large"
              type="primary" @click="login">
              {{ $t('common.login') }}
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
      return {
        app_key: 'SfaB52c65Nm5Genx76rjRRPLH8LDjvvk',
        form: {
          app_key: 'SfaB52c65Nm5Genx76rjRRPLH8LDjvvk',
          username: '',
          password: '',
        },
      };
    },
    methods: {
      login () {
        console.log(this.form);
        this.$auth.login(this.form).then(() => {
          this.$router.push({ name: 'wentu' });
        }).catch((res) => {
          if (res.body.reason !== 'invalid login or password') {
            this.locked = true;
          } else {
            this.forbid = true;
            this.$message.error('用户名或密码错误');
          }
        });
       /* this.$refs.form.validate((valid) => {
          if (!this.form.username || !this.form.password) {
            this.$message('请填写用户名和密码');
            return;
          }
          if (valid) {
            this.$auth.login(this.form).then(() => {
              this.$router.push({ name: 'products' });
            }).catch((res) => {
              if (res.body.reason !== 'invalid login or password') {
                this.locked = true;
              } else {
                this.forbid = true;
                this.$message.error('用户名或密码错误');
              }
            });
          }
        }); */
      },
    },
  };
</script>

<style lang="scss">
  @import "../styles/_login.scss";
</style>
