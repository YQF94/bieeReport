import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/style/index.css'
import 'element-ui/lib/theme-chalk/index.css'
import './plugins/element.js'
import * as Echarts from 'echarts'

Vue.config.productionTip = false
Vue.prototype.$echarts = Echarts

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
