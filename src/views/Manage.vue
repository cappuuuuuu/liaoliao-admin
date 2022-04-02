<template lang="pug">
.manage-page
  .manage-center
    Header
</template>

<script>
import Header from '@/components/Header'

export default {
  name: 'Manage',
  components: {
    Header
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
