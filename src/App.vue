<template lang="html">
  <section>
    <template>
      <template>
        <header class="header">
          <router-link class="logo" :to="{path: '/'}"><img alt="Logo" src="./assets/logo.png" height="48px"></router-link>
          <el-row class="user-info">
            <el-dropdown trigger="click">
              <span class="el-dropdown-link">
                <span class="avatar"><i class="iconfont icon-user"></i></span>
                <span>username</span>
                <i class="el-icon-arrow-down el-icon--right"></i>
              </span>
              <el-dropdown-menu slot="dropdown" class="db-dropdown">
                <el-dropdown-item><i class="iconfont icon-user-tie el-icon--left"></i>account</el-dropdown-item>
                <el-dropdown-item><i class="iconfont icon-exit el-icon--left"></i>logout</el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
          </el-row>
        </header>

        <el-row class="container">
          <aside class="menu-wrapper">
            <el-menu default-active="2" class="el-menu-vertical-demo" theme="dark" unique-opened>
              <el-submenu index="1">
                <template slot="title"><i class="el-icon-message"></i>Navigator One</template>
                <el-menu-item-group title="Group One">
                  <el-menu-item index="1-1">item one</el-menu-item>
                  <el-menu-item index="1-2">item one</el-menu-item>
                </el-menu-item-group>
                <el-menu-item-group title="Group Two">
                  <el-menu-item index="1-3">item three</el-menu-item>
                </el-menu-item-group>
                <el-submenu index="1-4">
                  <template slot="title">item four</template>
                  <el-menu-item index="1-4-1">item one</el-menu-item>
                </el-submenu>
              </el-submenu>
              <el-menu-item index="2"><i class="el-icon-menu"></i>Navigator Two</el-menu-item>
              <el-menu-item index="3"><i class="el-icon-setting"></i>Navigator Three</el-menu-item>
            </el-menu>
          </aside>

          <el-row class="content">
            <router-view></router-view>
          </el-row>
        </el-row>
      </template>
    <!--   <template>
      <router-view></router-view>
    </template> -->
    </template>
  </section>
</template>

<script>
export default {
  name: 'app'
};
</script>

<style lang="scss">
  @import "./styles/_global.scss";
  @import "./assets/font/iconfont.css";
</style>
