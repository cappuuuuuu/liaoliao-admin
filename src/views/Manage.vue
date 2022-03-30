<template lang="pug">
.manage-page
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
  @apply bg-app-container dark:bg-dark-app-container w-screen h-screen transition;
}
</style>
