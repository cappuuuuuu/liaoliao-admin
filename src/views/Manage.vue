<template lang="pug">
.manage-page
  .manage-center
    Header
    .manage-content
      Sidebar
      transition(name="view" appear)
        .manage-section
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
        this.setOperator(res.data)
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
  @apply flex flex-col h-full max-w-[1800px] mx-auto;
}

.manage-content {
  @apply flex h-full pr-[24px] pt-[16px] pb-[24px];
}

.manage-section {
  @apply relative w-full p-[32px] rounded-[32px] bg-projects-section dark:bg-dark-projects-section ;
}
</style>
