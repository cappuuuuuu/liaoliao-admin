<template lang="pug">
.manage-page
  .manage-center
    Header
</template>

<script>
import { mapActions } from 'pinia'
import Header from '@/components/Header'
import { getOperatorAccount } from '@/services/authServices'
import { useOperatorStore } from '@/stores/operator'

export default {
  name: 'Manage',
  components: {
    Header
  },
  created () {
    getOperatorAccount()
      .then(res => {
        const OperatorAccount = res
        this.setOperator(OperatorAccount)
      })
  },
  methods: {
    ...mapActions(useOperatorStore, ['setOperator'])
  }
}
</script>
<style lang="scss" scoped>
.manage-page {
  @apply bg-app-container dark:bg-dark-app-container h-screen mx-auto transition;
}

.manage-center {
  @apply h-full max-w-[1800px] mx-auto;
}
</style>
