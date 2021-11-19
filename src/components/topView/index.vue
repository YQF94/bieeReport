<template>
  <div class="top-view">
    <el-row :gutter="20">
      <el-col :span="6">
        <el-card shadow="always">
          <TotalSales />
        </el-card>
      </el-col>
      <el-col :span="6">
        <el-card shadow="always">
          <TotalOrders />
        </el-card>
      </el-col>
      <el-col :span="6">
        <el-card shadow="always">
          <TodayUsers />
        </el-card>
      </el-col>
      <el-col :span="6">
        <el-card shadow="always">
          <TotalUsers />
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import TotalSales from './CommonCard/TotalSales.vue'
import TotalOrders from './CommonCard/TotalOrders.vue'
import TodayUsers from './CommonCard/TodayUsers.vue'
import TotalUsers from './CommonCard/TotalUsers.vue'
export default {
    name: 'topView',
    components: {
      TotalSales,
      TotalOrders,
      TotalUsers,
      TodayUsers
    },
    data: () => {
        return {
            name: 'top View'
        }
    }
}
</script>
<style lang="less" scoped>

</style>
