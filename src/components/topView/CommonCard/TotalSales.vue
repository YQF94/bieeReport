<template>
  <common-card
    :title='"累计销售额"'
    :value='"34580.30"'
  >
    <template v-slot>
      <div class="compare-wrapper">
        <div class="compare">
          <span>日同比 </span>
          <span class="bold">7.33%</span>
          <div class="increase"></div>
        </div>
        <div class="compare">
          <span>月同比 </span>
          <span class="bold">7.33%</span>
          <div class="decrease"></div>
        </div>
      </div>
    </template>
    <template v-slot:footer>
      <span>昨日销售额 </span>
      <span class="bold">￥ 30,000,000</span>
    </template>
  </common-card>
</template>

<script>
import CommonCardMixin from '@/components/mixins/CommonCardMixin.js'
export default {
  mixins: [CommonCardMixin]
}
</script>

<style lang="less" scoped>
.compare-wrapper{
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.compare{
  display: flex;
  margin-top: 3px;
  font-size: 12px;
  color: #666;
}

</style>
