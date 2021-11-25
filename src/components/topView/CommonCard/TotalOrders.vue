<template>
  <common-card
    :title='"累计订单量"'
    :value='"2,157,420"'
  >
    <template v-slot>
      <v-chart :options="getOptions()" />
    </template>
    <template v-slot:footer>
      <span>昨日订单量 </span>
      <span class="bold">￥ 30,000,000</span>
    </template>
  </common-card>
</template>

<script>
import CommonCardMixin from '@/components/mixins/CommonCardMixin.js'
export default {
  mixins: [CommonCardMixin],

  mounted(){
  },
  methods: {
    getOptions(){
      return {
        tooltip: {},
        series: [
          {
            type: 'line',
            data: [620,432,220,534,790,430,220,320,532,320,834,690,530,220,620],
            areaStyle: {
              color: 'purple'
            },
            lineStyle: {
              width: 0
            },
            itemStyle: {
              opacity: 0
            },
            smooth: true,
          }
        ],
        xAxis: {
          type: 'category',
          show: false,
          boundaryGap: false
        },
        yAxis: {
          show: false
        },
        grid: {
          top: 0,
          bottom: 0,
          left: 0,
          right: 0
        }
      }
    }
  }
}
</script>

<style lang="less" scoped>
#total-orders-chart{
  width: 100%;
  height: 100%;
}
</style>