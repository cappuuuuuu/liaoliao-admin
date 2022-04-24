<template lang="pug">
.header
  .left-header
    HamburgerButton
    .brand-name {{ constants.BRAND_NAME }}
  .right-header
    ToggleThemeButton
    Dropdown
      template(#header)
        img.dropdown-icon(:src="require(`@/assets/user-light.svg`)")
        .operator-name {{ operator.account }}
      template(#content)
        DropdownContentItem(s
          v-for="item in dropdownList"
          :key="item.name"
        )
          img.dropdown-icon(:src="require(`@/assets/${item.icon}-${reverseTheme}.svg`)")
          .dropdown-name {{ item.name }}
</template>

<script>
import { mapState } from 'pinia'
import { useThemeStore } from '@/stores/theme'
import { useOperatorStore } from '@/stores/operator'
import COMMON_CONSTANTS from '@/constants/common'
import ToggleThemeButton from '@/components/ToggleThemeButton'
import HamburgerButton from '@/components/HamburgerButton'
import Dropdown from '@/components/Dropdown'
import DropdownContentItem from '@/components/DropdownContentItem'

export default {
  name: 'Header',
  components: {
    ToggleThemeButton,
    HamburgerButton,
    Dropdown,
    DropdownContentItem
  },
  data () {
    return {
      dropdownList: [
        {
          name: 'Signout',
          icon: 'signout'
        }
      ],
      constants: {
        BRAND_NAME: COMMON_CONSTANTS.brand.NAME,
        THEME_CONSTANT: COMMON_CONSTANTS.theme
      }
    }
  },
  computed: {
    ...mapState(useThemeStore, ['theme']),
    ...mapState(useOperatorStore, ['operator']),
    reverseTheme () {
      return this.theme === this.constants.THEME_CONSTANT.DARK
        ? this.constants.THEME_CONSTANT.LIGHT
        : this.constants.THEME_CONSTANT.DARK
    }
  }
}
</script>

<style lang="scss" scoped>
.header {
  @apply flex justify-between items-center py-[16px] px-[24px];
}

.left-header {
  @apply flex items-center;
}

.right-header {
  @apply flex items-center;
}

.brand-name {
  @apply font-bold text-main-color dark:text-dark-main-color mx-[32px];
}

.toggle-theme-btn {
  @apply mr-[18px] p-[6px] cursor-pointer;
}
.dropdown-icon {
  @apply h-[15px] mr-[14px];
}

</style>
