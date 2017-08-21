<template>
  <section>
    <aside class="menu-wrapper">
      <el-menu default-active="2" class="el-menu-vertical-demo" theme="dark" unique-opened>
       <!--  <el-submenu :index="workbook.name">
         <template slot="title">
           <div :title="workbook.name">{{ workbook.name }}</div>
         </template>
         <el-menu-item-group v-if="workbook.views.length">
           <el-menu-item
             v-for="(view, index) in workbook.views"
             :index="view.url"
             :key="index">
             {{ view.name }}
           </el-menu-item>
         </el-menu-item-group>
       </el-submenu> -->
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
