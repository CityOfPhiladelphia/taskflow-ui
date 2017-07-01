<template>
  <v-toolbar light fixed>
    <v-toolbar-title v-text="title"></v-toolbar-title>
    <v-toolbar-items class="hidden-xs-only">
      <v-toolbar-item ripple to="/" exact router>
        Dashboard
      </v-toolbar-item>
      <v-toolbar-item ripple to="/workflows" router>
        Workflows
      </v-toolbar-item>
      <v-toolbar-item ripple to="/tasks" router>
        Tasks
      </v-toolbar-item>
      <v-menu v-if="username" left bottom offset-y origin="bottom right" transition="v-slide-y-transition">
        <v-btn light icon slot="activator">
          <v-icon>account_circle</v-icon>
        </v-btn>
        <v-list>
          <v-list-item>
            <v-list-tile>
              <router-link tag="v-list-tile-title" to="/logout">
                Logout {{ username }}
              </router-link>
            </v-list-tile>
          </v-list-item>
        </v-list>
      </v-menu>
      <v-toolbar-item v-else ripple to="/login" router>
        Login
      </v-toolbar-item>
    </v-toolbar-items>
  </v-toolbar>
</template>

<script>
export default {
  props: [
    'title',
    'username'
  ]
}
</script>
