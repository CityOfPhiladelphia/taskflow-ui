import Vue from 'vue'
import VueRouter from 'vue-router'

import Dashboard from '../pages/dashboard.vue'
import Workflows from '../pages/workflows.vue'
import Login from '../pages/login.vue'
import store from '../store'

Vue.use(VueRouter)

const routes = [
  { path: '/', component: Dashboard, beforeEnter: auth },
  { path: '/workflows', component: Workflows, beforeEnter: auth },
  { path: '/login', component: Login },
  { path: '/logout', beforeEnter: logout }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

function auth (to, from, next) {
  if (!store.state.auth.isLoggedIn) {
    next({
      path: '/login',
      query: { redirect: to.fullPath }
    })
  } else {
    next()
  }
}

async function logout (to, from, next) {
  await store.dispatch('logout')
  next('/login')
}

export default router
