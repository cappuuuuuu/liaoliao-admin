<template lang="pug">
component(:is="modalType")
</template>

<script>
import { mapState } from 'pinia'
import { useDialogStore } from '@/stores/dialog'

export default {
  name: 'DialogContainer',
  components: {
    MessageDetail: () => import('@/components/DialogContent/MessageDetail'),
    DeleteMessage: () => import('@/components/DialogContent/DeleteMessage')
  },
  computed: {
    ...mapState(useDialogStore, {
      modalType: 'type'
    })
  }

}
</script>
