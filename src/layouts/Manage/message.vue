<template lang="pug">
.message-manage
  .message-manage-title Messages
</template>

<script>
import { getMessage } from '@/services/messageServices'

export default {
  name: 'MessageManage',
  data () {
    return {
      messageParams: {
        page: 1,
        count: 10
      }
    }
  },
  created () {
    getMessage(this.messageParams)
  }
}
</script>

<style lang="scss" scoped>
.message-manage-title {
  @apply text-[24px] leading-[32px] font-bold text-main-color dark:text-dark-main-color;
}
</style>
