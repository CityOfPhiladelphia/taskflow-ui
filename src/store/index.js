import Vue from 'vue'
import Vuex from 'vuex'

import Api from '../api'
import DB from './modules/db'
import Auth from './modules/auth'

Vue.use(Vuex)

const DEBUG = (process.env.NODE_ENV !== 'production')
const API_BASE_URL = 'https://taskflow-api.data.phila.gov/v1/'
const api = new Api(API_BASE_URL)

const store = new Vuex.Store({
  modules: {
    db: DB(api),
    auth: Auth(api)
  },
  strict: DEBUG
})

export default store
