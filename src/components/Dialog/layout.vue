<template lang="pug">
vs-dialog(
  scroll
  overflow-hidden
  :value="active"
  @close="closeDialog"
)
  template(#header)
    .header
      slot(name="header")
  .content
    slot(name="content")
  .bottom
    slot(name="bottom")
</template>

<script>
import { mapState, mapActions } from 'pinia'
import { useDialogStore } from '@/stores/dialog'

export default {
  name: 'DialogLayout',
  computed: {
    ...mapState(useDialogStore, ['active'])
  },
  methods: {
    ...mapActions(useDialogStore, ['closeDialog'])
  }
}
</script>

<style lang="scss" scoped>
.vs-dialog-content::v-deep {
  backdrop-filter: saturate(180%) blur(8px);

  .vs-dialog {
    @apply
      bg-dialog-bg
      dark:bg-dark-dialog-bg;
  }

  .vs-dialog__header {
    @apply
      font-bold
      py-[20px];
  }

  .vs-dialog__content {
    @apply
      pb-0
      px-[30px];
  }

  .header {
    @apply
      text-[22px]
      text-main-color
      dark:text-dark-main-color;
  }

  .content {
    @apply
      flex
      items-center
      justify-center;
  }

  .bottom {
    @apply
      py-[18px]
      pb-[10px];
  }

  .vs-icon-close::before,
  .vs-icon-close::after {
    @apply
      dark:bg-white;
  }
}
</style>
