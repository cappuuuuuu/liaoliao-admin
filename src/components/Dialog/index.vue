<template lang="pug">
section
  component(v-bind="modalInfo" :is="modalType")
</template>

<script>
import { mapState } from 'pinia'
import { useDialogStore } from '@/stores/dialog'

export default {
  name: 'DialogContainer',
  components: {
    MessageDetail: () => import('@/components/Dialog/MessageDetail')
  },
  computed: {
    ...mapState(useDialogStore, {
      modalType: 'type',
      modalInfo: 'info'
    })
  }

}
</script>
