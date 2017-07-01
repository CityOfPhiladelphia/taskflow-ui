import api from '../../api/mock'

export default {
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
      try {
        const instances = await api.getRecurringLatest()
        commit('receiveRecurringLatest', instances)
      } catch (err) {
        console.error('Failed to get recurring latest', err)
      }
    }
  }
}
