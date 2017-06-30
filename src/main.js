import Vue from 'vue'
import Vuetify from 'vuetify'

import store from './store'
import router from './router'
import Layout from './pages/layout.vue'

Vue.use(Vuetify)

new Vue({ // eslint-disable-line
  el: '#app',
  store,
  router,
  render: h => h(Layout)
})
