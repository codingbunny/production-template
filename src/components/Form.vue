<template>
  <section>
    <el-row class="content-title">
      <h2 class="txt-gray">{{ $t('menu.form') }}</h2>
    </el-row>

    <el-form :model="formData" ref="form" :rules="formRules" label-width="160px">
      <el-form-item :label="$t('pages.form.input')" prop="input">
        <el-input v-model="formData.input"></el-input>
      </el-form-item>
      <el-form-item :label="$t('pages.form.textarea')" prop="textarea">
        <el-input type="textarea" v-model="formData.textarea"></el-input>
      </el-form-item>
      <el-form-item :label="$t('pages.form.password')" prop="password">
        <el-input type="password" v-model="formData.password"></el-input>
      </el-form-item>
      <el-form-item :label="$t('pages.form.checkbox')" prop="checkbox">
        <el-checkbox v-model="formData.checkbox"></el-checkbox>
      </el-form-item>
      <el-form-item>
        <el-button>{{ $t('common.save') }}</el-button>
      </el-form-item>      
    </el-form>
  </section>
</template>

<script>
  export default {
    data () {
      const pwValidator = (rule, value, cb) => {
        const ptn = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/;
        if (value === '') {
          cb(new Error(this.$t('rules.require_password')));
        } else if (!ptn.test(value)) {
          cb(new Error(this.$t('rules.password_format')));
        } else {
          cb();
        }
      };
      return {
        formData: {
          input: 'placeholder',
          textarea: 'placeholder',
          password: 'Abcd1234',
          checkbox: true,
        },
        formRules: {
          input: [
            { required: true, message: this.$t('rules.require_input'), },
          ],
          password: [
            { required: true, validator: pwValidator, },
          ],
        },
      };
    },
  };
</script>

<style>
  
</style>