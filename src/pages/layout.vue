<template>
  <v-app>
    <site-header title="Taskflow" :username="username"></site-header>
    <main>
      <router-view></router-view>
    </main>
  </v-app>
</template>

<script>
import { mapState } from 'vuex'

import SiteHeader from '../components/site-header.vue'

export default {
  computed: mapState({
    username: (state) => state.auth.user.name
  }),
  components: {
    'site-header': SiteHeader
  }
}
</script>

<style lang="stylus">
  @import '../stylus/main'
</style>
