<template lang="pug">
.button-wrap
  vs-button(danger @click="confirmDialog") Confirm
  vs-button(warn @click="closeDialog") Cancel
</template>

<script>
import { mapActions } from 'pinia'
import { useDialogStore } from '@/stores/dialog'

export default {
  name: 'ButtonGroup',
  methods: {
    ...mapActions(useDialogStore, ['confirmDialog', 'closeDialog'])
  }
}
</script>

<style lang="scss" scoped>
.button-wrap {
  @apply
    flex
    justify-end;
}
</style>
