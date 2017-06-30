<template>
  <v-toolbar light>
    <v-toolbar-title v-text="title"></v-toolbar-title>
    <v-toolbar-items>
      <v-toolbar-item ripple to="/" exact>
        Dashboard
      </v-toolbar-item>
      <v-toolbar-item ripple to="/workflows">
        Workflows
      </v-toolbar-item>
      <v-toolbar-item ripple to="/tasks">
        Tasks
      </v-toolbar-item>
    </v-toolbar-items>
  </v-toolbar>
</template>

<script>
export default {
  props: [
    'title'
  ]
}
</script>
