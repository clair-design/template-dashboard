import 'regenerator-runtime'
import Vue from 'vue'
import Clair from '@clair/vue'
import * as CatChartsVue from 'cat-charts-vue'

import './styles/main.scss'

import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false
Vue.use(Clair)
Vue.use(CatChartsVue)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
