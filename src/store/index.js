import Vue from 'vue'
import Vuex from 'vuex'

import db from './modules/db'

Vue.use(Vuex)

const DEBUG = (process.env.NODE_ENV !== 'production')

const store = new Vuex.Store({
  modules: {
    db
  },
  strict: DEBUG
})

export default store
