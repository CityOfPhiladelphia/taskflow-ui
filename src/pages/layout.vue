<template>
  <v-app>
    <site-header title="Taskflow"></site-header>
    <main>
      <v-container fluid>
        <router-view></router-view>
      </v-container>
    </main>
  </v-app>
</template>

<script>
import SiteHeader from '../components/site-header.vue'

export default {
  components: {
    'site-header': SiteHeader
  }
}
</script>

<style lang="stylus">
  @import '../stylus/main'
</style>
