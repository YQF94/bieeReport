<template>
  <div class="home">
    <top-view />
    <sales-view />
    <bottom-view />
    <map-view />
  </div>
</template>

<script>
import topView from '@/components/topView'
import salesView from '@/components/salesView'
import bottomView from '@/components/bottomView'
import mapView from '@/components/mapView'

export default {
  name: 'Home',
  components: {
    topView,
    salesView,
    bottomView,
    mapView
  }
}
</script>
<style lang="less" scoped>
.home{
  width: 100%;
  height: 100%;
  padding: 20px;
  background: #eee;
  box-sizing: border-box;
}
</style>
