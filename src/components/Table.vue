<template>
  <section>
    <el-row class="content-title">
      <h2 class="txt-gray">{{ $t('menu.table') }}</h2>
    </el-row>

    <el-row class="content-top">
      <el-select filterable v-model="select">
        <el-option v-for="data in tableData" :label="data.name" :value="data" :key="data.name">{{data.name}}</el-option>
      </el-select>
    </el-row>
    
    <el-row>
      <el-table :data="tableData">
        <el-table-column prop="id" :label="$t('pages.table.id')"></el-table-column>
        <el-table-column prop="name" :label="$t('pages.table.name')"></el-table-column>
        <el-table-column prop="time" :label="$t('pages.table.time')" :formatter="formatDatetime"></el-table-column>
        <el-table-column :label="$t('pages.table.operation')">
          <template scope="scope">
             <el-button type="text">{{ $t('pages.table.operation') }}</el-button> 
          </template>
        </el-table-column>
      </el-table>
    </el-row>
    
    <el-row>
      <el-pagination :page-sizes="pageData.pageSizes" :page-size="pageData.pageSize" :current-page="pageData.currentPage" layout="sizes, prev, pager, next" :total="pageData.total"></el-pagination>
    </el-row>
  </section>
</template>

<script>
  export default {
    data () {
      return {
        select: '',
        pageData: {
          pageSizes: [ 10, 20, ],
          pageSize: 10,
          currentPage: 1,
          total: 100,
        },
        tableData: [
          {
            id: 1,
            name: 'Amy',
            time: new Date(),
          },
          {
            id: 2,
            name: 'Becky',
            time: new Date(),
          },
          {
            id: 3,
            name: 'Cate',
            time: new Date(),
          },
        ],
      };
    },
    methods: {
      formatDatetime (r, c) {
        const ds = r[c.property];
        return ds ? this.$moment(ds).utcOffset(+960).format('YYYY/M/DD HH:mm:ss') : '';
      },
    },
  };
</script>

<style>
  
</style>
