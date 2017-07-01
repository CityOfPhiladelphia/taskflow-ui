import workflowInstances from './fixtures/workflow-instances.json'

export default {
  getRecurringLatest () {
    return Promise.resolve(workflowInstances)
  },
  login (username, password) {
    return Promise.resolve({
      csrf_token: 'EXAMPLE_CSRF_TOKEN',
      user: {
        name: username
      }
    })
  }
}
