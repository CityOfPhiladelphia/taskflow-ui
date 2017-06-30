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
      let instances
      try {
        instances = await api.getRecurringLatest()
      } catch (err) {
        console.error(err)
      }
      commit('receiveRecurringLatest', instances)
    }
  }
}
