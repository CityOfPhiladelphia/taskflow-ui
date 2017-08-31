<template>
  <div>
    <h2 class="display-1">Login</h2>
    <v-card>
      <v-card-text>
        <form @submit.prevent="submit">
          <v-text-field
            label="Username"
            v-model="username"></v-text-field>
          <v-text-field
            label="Password"
            type="password"
            v-model="password"></v-text-field>
          <v-btn primary type="submit">
            Login
          </v-btn>
        </form>
      </v-card-text>
    </v-card>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  data () {
    return {
      username: '',
      password: ''
    }
  },
  methods: {
    ...mapActions([
      'login'
    ]),
    submit (evt) {
      const payload = {
        username: this.username,
        password: this.password
      }
      this.login(payload)
    }
  }
}
</script>
