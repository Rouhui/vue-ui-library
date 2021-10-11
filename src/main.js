/*
 * @Author: jiangruohui
 * @Date: 2021-10-08 14:34:13
 * @LastEditors: jiangruohui
 * @LastEditTime: 2021-10-11 14:32:13
 * @Description:
 */
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Alert from './components/alert/alert.js'

Vue.config.productionTip = false
Vue.prototype.$Alert = Alert

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
