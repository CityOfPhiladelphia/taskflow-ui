<template>
  <div>
    <h2 class="display-1">Recurring tasks and workflows</h2>
    <v-card>
      <v-list two-line>
        <v-list-item v-for="(item, index) in instances" v-bind:key="item.workflow_name">
          <v-list-tile avatar ripple>
            <v-list-tile-content>
              <v-list-tile-title>{{ item.workflow_name }}</v-list-tile-title>
              <v-list-tile-sub-title>{{ item.run_at | timeago }}</v-list-tile-sub-title>
            </v-list-tile-content>
            <v-list-tile-avatar>
              <instance-status :status="item.status"></instance-status>
            </v-list-tile-avatar>
          </v-list-tile>
          <v-divider v-if="index + 1 < instances.length"></v-divider>
        </v-list-item>
      </v-list>
    </v-card>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import Timeago from 'timeago.js'

import InstanceStatus from '../components/instance-status.vue'

const timeagoInstance = Timeago()

export default {
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
  filters: {
    timeago (datetime) {
      return timeagoInstance.format(datetime)
    }
  },
  created () {
    this.getRecurringLatest()
  },
  components: {
    'instance-status': InstanceStatus
  }
}
</script>
