<template>
  <v-toolbar fixed>

    <v-toolbar-title v-text="title"></v-toolbar-title>

    <v-spacer></v-spacer>

    <v-toolbar-items class="hidden-xs-only">

      <v-btn to="/" exact router>
        Dashboard
      </v-btn>
      <v-btn to="/workflows" router>
        Workflows
      </v-btn>

      <v-menu v-if="isloggedin" left bottom offset-y origin="bottom right" transition="v-slide-y-transition">
        <v-btn light icon slot="activator">
          <v-icon>account_circle</v-icon>
        </v-btn>
        <v-list>
          <v-list-tile>
            <router-link tag="v-list-tile-title" to="/logout">
              Logout
            </router-link>
          </v-list-tile>
        </v-list>
      </v-menu>

      <v-btn v-else to="/login" router>
        Login
      </v-btn>

    </v-toolbar-items>
  </v-toolbar>
</template>

<script>
export default {
  props: [
    'title',
    'isloggedin'
  ]
}
</script>
