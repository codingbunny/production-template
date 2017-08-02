<template>
  <section>
    <el-row class="content-title">
      <h2 class="txt-gray">{{ $t('menu.components') }}</h2>
    </el-row>

    <el-row class="content-top">
      <el-alert type="info" title="info" description="description" show-icon></el-alert>
    </el-row>
    <el-row>
      <el-button @click="dialog = true">Normal Dialog</el-button>
      <el-button @click="showMessage" type="success">Success Message</el-button>
      <el-button @click="showNotify" type="danger">Error Notify</el-button>
      <el-button type="warning" @click="showMessageBox">Confirm Message Box</el-button>
    </el-row>
    
    <el-dialog v-model="dialog" title="Title">
        Any componet here
    </el-dialog>
  </section>
</template>

<script>
  export default {
    data () {
      return {
        dialog: false,
      };
    },
    methods: {
      showMessage () {
        this.$message({
          message: 'Success',
          type: 'success',
        });
      },
      showNotify () {
        this.$notify.error({
          title: 'Error',
          message: 'Error notify',
          type: 'Error',
        });
      },
      showMessageBox () {
        this.$msgbox.confirm('Confirm', 'Warning', {
          confirmButtonText: 'OK',
          cancleButtonText: 'Cancle',
          type: 'warning',
        });
      },
    },
  };
</script>

<style>
  
</style>
