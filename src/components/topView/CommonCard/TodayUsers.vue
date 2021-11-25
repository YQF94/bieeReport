<template>
  <common-card
    title='今日交易用户数'
    value='81,041'
  >
    <template v-slot>
      <v-chart :options="getOptions()" />
    </template>
    <template v-slot:footer>
      <span>退货率 </span>
      <span class="bold">5.14%</span>
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
            type: 'bar',
            data: [410,82,200,334,390,330,220,150,82,200,134,290,330,150],
            color: ['#3398DB'],
            barWidth: '60%'
          }
        ],
        xAxis: {
          type: 'category',
          data: ['00.00','01.00','02.00','03.00','04.00','05.00','06.00','07.00','08.00','09.00','10.00','11.00','12.00','13.00'],
          show: false,
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
#today-users-chart{
  width: 100%;
  height: 100%;
}
</style>
