<template lang="pug">
.header
  .hamberger-menu
  ToggleThemeButton
</template>

<script>
import ToggleThemeButton from '@/components/ToggleThemeButton'

export default {
  name: 'Header',
  components: {
    ToggleThemeButton
  },
  data () {
    return {
    }
  }
}
</script>

<style lang="scss" scoped>
.header {
  @apply flex justify-between items-center px-[16px] py-[24px];
}
</style>
