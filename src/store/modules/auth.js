import localForage from 'localforage'
import eres from 'eres'

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
      const [err, result] = await eres(localForage.getItem('auth'))
      if (err) return console.error('Error fetching stored csrf token', err)

      if (result) commit('receiveAuth', result)
    },
    async login ({ commit }, { username, password }) {
      const [apiErr, result] = await eres(api.login(username, password))
      if (apiErr) return console.error('Login error', apiErr)

      const [storageErr] = await eres(localForage.setItem('auth', result.data))
      if (storageErr) return console.error('Error storing csrf token', storageErr)

      commit('receiveAuth', result.data)
      router.push('/')
    },
    async logout ({ commit }) {
      const [storageErr] = await eres(localForage.removeItem('auth'))
      if (storageErr) console.error('Error removing stored csrf token', storageErr)

      const [apiErr] = await eres(api.logout())
      if (apiErr) console.error('Error logging out of server', apiErr)

      commit('resetAuth')
    }
  }
})
