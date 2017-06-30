import Vue from 'vue'
import VueRouter from 'vue-router'

import Dashboard from '../pages/dashboard.vue'

Vue.use(VueRouter)

const routes = [
  { path: '/', component: Dashboard }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
