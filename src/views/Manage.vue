<template lang="pug">
.manage-page
  .manage-center
    Header
    .manage-content
      Sidebar
      transition(name="view" appear)
        router-view
</template>

<script>
import { mapActions } from 'pinia'
import { getOperatorAccount } from '@/services/authServices'
import { useOperatorStore } from '@/stores/operator'
import Header from '@/layouts/Header'
import Sidebar from '@/layouts/Sidebar'

export default {
  name: 'Manage',
  components: {
    Header,
    Sidebar
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

.manage-content {
  @apply flex pr-[24px] pt-[16px] pb-[24px];
}
</style>
