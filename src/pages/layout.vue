<template>
  <v-app>
    <site-header title="Taskflow" :isloggedin="isLoggedIn"></site-header>
    <main>
      <v-container fluid>
        <v-alert
          v-for="item in notifications"
          :key="item.id"
          value="true"
          :error="item.type === 'error'"
          :warning="item.type === 'warning'"
          :success="item.type === 'success'"
          :primary="item.type === 'primary'"
        >
          {{ item.msg }}
        </v-alert>
        <router-view></router-view>
      </v-container>
    </main>
  </v-app>
</template>

<script>
import { mapState } from 'vuex'
import values from 'lodash/values'

import SiteHeader from '../components/site-header.vue'

export default {
  computed: mapState({
    isLoggedIn: (state) => state.auth.isLoggedIn,
    notifications: (state) => values(state.ui.notifications)
  }),
  components: {
    'site-header': SiteHeader
  }
}
</script>

<style lang="stylus">
  @import '../stylus/main'
</style>
