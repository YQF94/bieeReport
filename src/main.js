import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/style/index.css'
import 'element-ui/lib/theme-chalk/index.css'
import './plugins/element.js'
import './plugins/vcharts.js'
import VueECharts from 'vue-echarts'
import * as Echarts from 'echarts'

Vue.config.productionTip = false
Vue.prototype.$echarts = Echarts
Vue.component('v-chart', VueECharts)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
