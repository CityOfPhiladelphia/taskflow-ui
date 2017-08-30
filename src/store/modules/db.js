import eres from 'eres'

export default (api) => ({
  state: {
    workflows: [],
    tasks: [],
    workflowInstances: [],
    taskInstances: [],
    recurringLatest: []
  },
  mutations: {
    receiveRecurringLatest (state, instances) {
      state.recurringLatest = instances
    }
  },
  actions: {
    async getRecurringLatest ({ commit }) {
      const [err, result] = await eres(api.getRecurringLatest())
      if (err) return console.error('Failed to fetch recurring latest', err)

      commit('receiveRecurringLatest', result.data)
    }
  }
})
