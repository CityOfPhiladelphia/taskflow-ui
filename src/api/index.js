import Axios from 'axios'

export default class Api {
  constructor (baseURL) {
    this.axios = Axios.create({
      baseURL,
      withCredentials: true
    })
  }

  setCsrfValue (csrfValue) {
    this.axios.defaults.headers.common['X-CSRF'] = csrfValue
  }

  async login (username, password) {
    return this.axios.post('/session', { username, password })
  }

  async logout () {
    return this.axios.delete('/session')
  }

  getRecurringLatest () {
    return this.axios.get('/workflow-instances/recurring-latest')
  }

  getWorkflows () {
    return this.axios.get('/workflows')
  }
}
