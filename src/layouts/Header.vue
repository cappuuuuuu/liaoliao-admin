<template lang="pug">
.header
  .left-header
    HamburgerButton
    .brand-name {{ constants.BRAND_NAME }}
  .right-header
    ToggleThemeButton
    .vertical-divide-line
    Dropdown
      template(#header)
        img.dropdown-icon(:src="require(`@/assets/user-light.svg`)")
        .operator-name {{ operator.account }}
      template(#content)
        DropdownContentItem(
          v-for="item in dropdownList"
          :key="item.name"
          @click.native="dropdownItemClickHandler(item)"
        )
          img.dropdown-icon(:src="require(`@/assets/${item.icon}-${reverseTheme}.svg`)")
          .dropdown-name {{ item.name }}
</template>

<script>
import { mapState } from 'pinia'
import { useThemeStore } from '@/stores/theme'
import { useOperatorStore } from '@/stores/operator'
import COMMON_CONSTANTS from '@/constants/common'
import { operatorLogout } from '@/services/authServices'
import ToggleThemeButton from '@/components/Button/toggleTheme'
import HamburgerButton from '@/components/Button/hamburger'
import Dropdown from '@/components/Dropdown'
import DropdownContentItem from '@/components/Dropdown/contentItem'

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
          icon: 'signout',
          action: 'logout'
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
  },
  methods: {
    dropdownItemClickHandler (item) {
      switch (item.action) {
        case 'logout':
          this.logoutHandler()
          break
      }
    },
    logoutHandler () {
      const body = {
        _id: this.operator._id
      }

      operatorLogout({ body })
        .then(_ => {
          this.$router.push('/')
        })
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
  @apply cursor-pointer;
}
.dropdown-icon {
  @apply h-[18px] mr-[14px];
}
.vertical-divide-line {
  @apply
    w-[2px]
    ml-[20px]
    mr-[22px]
    h-[30px]
    bg-[#ddd];
}

</style>
