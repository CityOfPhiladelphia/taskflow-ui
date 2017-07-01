import Vue from 'vue'
import VueRouter from 'vue-router'

import Dashboard from '../pages/dashboard.vue'
import Login from '../pages/login.vue'

Vue.use(VueRouter)

const routes = [
  { path: '/', component: Dashboard },
  { path: '/login', component: Login }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
