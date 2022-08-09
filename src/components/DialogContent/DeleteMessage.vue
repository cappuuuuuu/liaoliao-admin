<template lang="pug">
DialogLayout
  template(#header) Delete Message
  template(#content)
    span.content
      template(v-if="selectedList.length") Are you sure you want to delete the selected messages ?
      template(v-else) Please tick the message you want to delete.
  template(#footer)
    ButtonGroup(v-if="selectedList.length")
</template>

<script>
import { mapState } from 'pinia'
import { useDialogStore } from '@/stores/dialog'
import DialogLayout from '@/components/Dialog/layout'
import ButtonGroup from './base/ButtonGroup'

export default {
  name: 'DeleteMessage',
  components: {
    DialogLayout,
    ButtonGroup
  },
  computed: {
    ...mapState(useDialogStore, { selectedList: 'info' })
  }
}
</script>

<style lang="scss" scoped>
.button-wrap {
  @apply
    flex
    justify-end
}

.content {
  @apply
    text-main-color
    dark:text-dark-main-color;
}
</style>
