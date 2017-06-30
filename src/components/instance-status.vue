<template>
  <v-chip class="white--text" :class="className" v-text="title"></v-chip>
</template>

<script>
const statuses = {
  queued: {
    title: 'Queued',
    className: 'grey lighten-1'
  },
  pushed: {
    title: 'Pushed',
    className: ''
  },
  running: {
    title: 'Running',
    className: 'green lighten-3'
  },
  retry: {
    title: 'Retry',
    className: 'red lighten-3'
  },
  dequeued: {
    title: 'Dequeued',
    className: 'grey darken-2'
  },
  failed: {
    title: 'Failed',
    className: 'red'
  },
  success: {
    title: 'Success',
    className: 'green'
  }
}

export default {
  props: [
    'status'
  ],
  computed: {
    className () {
      const match = statuses[this.status]
      return match ? match.className : ''
    },
    title () {
      const match = statuses[this.status]
      return match ? match.title : this.status
    }
  }
}
</script>
