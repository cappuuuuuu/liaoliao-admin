<template lang="pug">
.header
  .left-header
    HamburgerButton
    .brand-name {{ constants.BRAND_NAME }}
  .right-header
    ToggleThemeButton
</template>

<script>
import COMMON_CONSTANTS from '@/constants/common'
import ToggleThemeButton from '@/components/ToggleThemeButton'
import HamburgerButton from '@/components/HamburgerButton'

export default {
  name: 'Header',
  components: {
    ToggleThemeButton,
    HamburgerButton
  },
  data () {
    return {
      constants: {
        BRAND_NAME: COMMON_CONSTANTS.brand.NAME
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.header {
  @apply flex justify-between items-center px-[16px] py-[24px];
}

.left-header {
  @apply flex items-center;
}

.right-header {
  @apply flex items-center;
}

.brand-name {
  @apply text-main-color dark:text-dark-main-color mx-[32px];
}
</style>
