<template>
  <div>
    <h2 class="display-1">Recurring tasks and workflows</h2>
    <v-card>
      <v-data-table
        :headers="headers"
        :items="instances"
        hide-actions
        class="elevation-1">
        <template slot="items" scope="props">
          <td>{{ props.item.workflow_name }}</td>
          <td>{{ props.item.run_at }}</td>
          <td class="text-xs-right">
            <instance-status :status="props.item.status"></instance-status>
          </td>
        </template>
      </v-data-table>
    </v-card>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'

import InstanceStatus from '../components/instance-status.vue'

export default {
  data () {
    return {
      headers: [
        { text: 'Workflow', value: 'workflow_name', align: 'left' },
        { text: 'Run at', value: 'run_at', align: 'left' },
        { text: 'Status', value: 'status' }
      ]
    }
  },
  computed: {
    ...mapState({
      instances: (state) => state.db.recurringLatest
    })
  },
  methods: {
    ...mapActions([
      'getRecurringLatest'
    ])
  },
  created () {
    this.getRecurringLatest()
  },
  components: {
    'instance-status': InstanceStatus
  }
}
</script>
