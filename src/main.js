import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Vant from 'vant';
import 'vant/lib/index.css';

import { request } from "@/config/Axios.config.js"

Vue.use(Vant);
Vue.config.productionTip = false
Vue.prototype.$axios = request // 将axios挂载到vue的原型上

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
