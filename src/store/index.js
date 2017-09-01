import Vue from 'vue'
import Vuex from 'vuex'

import Api from '../api'
import DB from './modules/db'
import Auth from './modules/auth'
import ui from './modules/ui'

Vue.use(Vuex)

const DEBUG = (process.env.NODE_ENV !== 'production')
const API_BASE_URL = 'https://taskflow-api.data.phila.gov/v1/'
const api = new Api(API_BASE_URL)

const store = new Vuex.Store({
  modules: {
    db: DB(api),
    auth: Auth(api),
    ui
  },
  strict: DEBUG
})

export default store
