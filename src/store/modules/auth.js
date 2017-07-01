import api from '../../api/mock'

export default {
  state: {
    csrf: null,
    user: {
      name: null
    }
  },
  mutations: {
    receiveLogin (state, loginResult) {
      state.csrf = loginResult.csrf
      state.user.name = loginResult.user.name
    }
  },
  actions: {
    async login ({ commit }, { username, password }) {
      try {
        const result = await api.login(username, password)
        commit('receiveLogin', result)
      } catch (err) {
        console.error('Login error', err)
      }
    }
  }
}
