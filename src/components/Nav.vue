<template>
  <section>
    <aside class="menu-wrapper">
      <el-menu default-active="2" class="el-menu-vertical-demo" theme="dark" unique-opened router>
        <template v-for="(route, index) in $router.options.routes[1].children">
          <el-menu-item v-if="!route.meta.hidden" :index="route.name" :route="route">{{ $t(`menu.${route.name}`) }}</el-menu-item>
        </template>
      </el-menu>
    </aside>
  </section>
</template>

<script>
  export default {
    data () {
      return {};
    },
  };
</script>

<style>
  
</style>
