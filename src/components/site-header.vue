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
      <v-toolbar-item v-if="username" ripple to="/profile" router>
        <v-icon light>account_circle</v-icon>
        {{ username }}
      </v-toolbar-item>
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
