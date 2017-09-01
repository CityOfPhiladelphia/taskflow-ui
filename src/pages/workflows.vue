<template>
  <div>
    <h2 class="display-1">Workflows</h2>
    <v-card>
      <v-data-table
        :headers="headers"
        :items="workflows"
        hide-actions
        class="elevation-1">
        <template slot="items" scope="props">
          <td>{{ props.item.name }}</td>
          <td>{{ props.item.schedule }}</td>
        </template>
      </v-data-table>
    </v-card>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
  data () {
    return {
      headers: [
        { text: 'Workflow', value: 'name', align: 'left' },
        { text: 'Schedule', value: 'schedule', align: 'left' }
      ]
    }
  },
  computed: {
    ...mapState({
      workflows: (state) => state.db.workflows
    })
  },
  methods: {
    ...mapActions([
      'getWorkflows'
    ])
  },
  created () {
    this.getWorkflows()
  }
}
</script>
