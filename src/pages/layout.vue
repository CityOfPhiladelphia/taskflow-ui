<template>
  <v-app>
    <site-header title="Taskflow" :isloggedin="isLoggedIn"></site-header>
    <main>
      <v-container fluid>
        <router-view></router-view>
      </v-container>
    </main>
  </v-app>
</template>

<script>
import { mapState } from 'vuex'

import SiteHeader from '../components/site-header.vue'

export default {
  computed: mapState({
    isLoggedIn: (state) => state.auth.isLoggedIn
  }),
  components: {
    'site-header': SiteHeader
  }
}
</script>

<style lang="stylus">
  @import '../stylus/main'
</style>
