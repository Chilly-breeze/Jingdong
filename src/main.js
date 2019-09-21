import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import '@js/rootFontSize.js'
import '@js/filter.js'
import '@css/index.scss'
import axios from './utils/http'
import { Card, Button, Notify, Toast   } from 'vant';

Vue.use(Card).use(Button).use(Notify).use(Toast);

Vue.config.productionTip = false
Vue.prototype.$http = axios
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
