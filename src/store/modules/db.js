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
    async getRecurringLatest ({ commit, dispatch }) {
      let result
      try {
        result = await api.getRecurringLatest()
      } catch (err) {
        dispatch('notify', { msg: `Failed to retreive instances from server` })
        return
      }

      commit('receiveRecurringLatest', result.data)
    }
  }
})
