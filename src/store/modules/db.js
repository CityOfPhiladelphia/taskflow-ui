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
      let result
      try {
        result = await api.getRecurringLatest()
      } catch (err) {
        console.error('Failed to fetch recurring latest', err)
        return
      }

      commit('receiveRecurringLatest', result.data)
    }
  }
})
