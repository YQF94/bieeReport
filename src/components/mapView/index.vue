<template>
  <ve-line :data="orgOptions" width="100%" height='400px' />
</template>
<script>
// import VeLine from 'v-charts/lib/line.common'
export default {
  name: "mapView",
	components: {
		// VeLine
	},
  data () {
    return {
      orgOptions: {
        columns: ['日期', '访问用户', '下单用户'],
				rows: [
					{ '日期': '2018-05-22', '访问用户': 32371, '下单用户': 19810 },
					{ '日期': '2018-05-23', '访问用户': 12328, '下单用户': 4398 },
					{ '日期': '2018-05-24', '访问用户': 92381, '下单用户': 52910 }
				]
      }
    }
  },
}
</script>
<style lang="less" scoped>
.echarts{
	width: 100%;
	height: 400px;
}
</style>
