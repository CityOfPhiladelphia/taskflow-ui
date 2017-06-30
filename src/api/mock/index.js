import workflowInstances from './fixtures/workflow-instances.json'

export default {
  getRecurringLatest () {
    return Promise.resolve(workflowInstances)
  }
}
