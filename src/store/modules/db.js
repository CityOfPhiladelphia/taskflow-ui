import router from '../../router'

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
    },
    receiveWorkflows (state, workflows) {
      state.workflows = workflows
    }
  },
  actions: {
    async getRecurringLatest ({ commit, dispatch }) {
      let result
      try {
        result = await api.getRecurringLatest()
      } catch (err) {
        if (err.response.status === 401) {
          commit('resetAuth')
          router.push('/login')
        } else {
          dispatch('notify', { msg: `Failed to retrieve instances from server` })
        }
        return
      }

      commit('receiveRecurringLatest', result.data)
    },
    async getWorkflows ({ commit, dispatch }) {
      let result
      try {
        result = await api.getWorkflows()
      } catch (err) {
        if (err.response.status === 401) {
          commit('resetAuth')
          router.push('/login')
        } else {
          dispatch('notify', { msg: `Failed to retrieve workflows from server` })
        }
        return
      }

      commit('receiveWorkflows', result.data.data)
    }
  }
})
