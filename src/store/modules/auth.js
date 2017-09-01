import localForage from 'localforage'

import router from '../../router'

export default (api) => ({
  state: {
    isLoggedIn: false,
    csrf: null
  },
  mutations: {
    receiveAuth (state, auth) {
      state.isLoggedIn = true
      state.csrf = auth.csrf_token
      api.setCsrfValue(auth.csrf_token)
    },
    resetAuth (state) {
      state.isLoggedIn = false
      state.csrf = null
      api.setCsrfValue(null)
    }
  },
  actions: {
    async getStoredAuth ({ commit }) {
      let result
      try {
        result = await localForage.getItem('auth')
      } catch (err) {
        return
      }

      if (result) commit('receiveAuth', result)
    },
    async login ({ commit, dispatch }, { username, password }) {
      let result
      try {
        result = await api.login(username, password)
      } catch (err) {
        console.error('Login error', err)
        dispatch('notify', { msg: 'Invalid login' })
        return
      }

      try {
        await localForage.setItem('auth', result.data)
      } catch (err) {
        console.error('Error storing csrf token', err)
      }

      commit('receiveAuth', result.data)
      router.push('/')
    },
    async logout ({ commit }) {
      try {
        await localForage.removeItem('auth')
      } catch (err) {
        console.error('Error removing stored csrf token', err)
        return
      }

      try {
        await api.logout()
      } catch (err) {
        console.error('Error logging out of server', err)
      }

      commit('resetAuth')
      router.push('/login')
    }
  }
})
