import Vue from 'vue'
import Vuex from 'vuex'

import App from './app/app.vue'

Vue.config.productionTip = false

Vue.use(Vuex)

const store = new Vuex.Store({});

new Vue({
  store,
  render: h => h(App)
}).$mount('#app')
