<template>
  <section>
    <el-row class="content-title">
      <h2 class="txt-gray">{{ $t('menu.tabs') }}</h2>
    </el-row>

    <el-tabs v-model="active">
      <el-tab-pane label="Amy" name="amy">
        Amy
      </el-tab-pane>
      <el-tab-pane label="Becky" name="becky">
        Becky
      </el-tab-pane>
      <el-tab-pane label="Cate" name="cate">
        Cate
      </el-tab-pane>
    </el-tabs>
  </section>
</template>

<script>
  export default {
    data () {
      return {
        active: 'amy',
      };
    },
  };
</script>

<style>
  
</style>
