import Vue from 'vue'
import Vuex from 'vuex'

import db from './modules/db'
import auth from './modules/auth'

Vue.use(Vuex)

const DEBUG = (process.env.NODE_ENV !== 'production')

const store = new Vuex.Store({
  modules: {
    db,
    auth
  },
  strict: DEBUG
})

export default store
