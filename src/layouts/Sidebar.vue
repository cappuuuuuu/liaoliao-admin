<template lang="pug">
.sidebar
  router-link.sidebar-link(
    v-for="item in linkList"
    :key="item.icon"
    :to="{ name : item.routeName }"
    :class="{ 'active': $route.name === item.routeName }"
  )
    img.sidebar-link-icon(:src="require(`@/assets/${item.icon}.svg`)")
</template>

<script>
import { mapState } from 'pinia'
import { useThemeStore } from '@/stores/theme'

export default {
  name: 'Sidebar',
  data () {
    return {
      linkList: [
        { icon: 'home', routeName: 'manage' },
        { icon: 'message-edit', routeName: 'messageManage' },
        { icon: 'sticker', routeName: 'stickerManage' }
      ]
    }
  },
  computed: {
    ...mapState(useThemeStore, ['theme', 'reverseTheme'])
  }
}
</script>

<style lang="scss" scoped>
.sidebar {
  @apply
    flex
    flex-col
    items-center
    px-[16px]
    py-[40px];
}

.sidebar-link {
  @apply
    flex
    items-center
    justify-center
    w-[48px]
    h-[48px]
    my-[16px]
    rounded-[10px]
    transition
    hover:bg-link-color-active-bg
    dark:hover:bg-dark-link-color-hover;

  &:hover,
  &.active {
    .sidebar-link-icon {
      filter: invert(1);
    }
  }

  &.active {
    @apply
      bg-link-color-active-bg
      dark:bg-dark-link-color-hover;
  }
}
.sidebar-link-icon {
  @apply
    w-[24px]
    h-[24px]
    transition;

  .dark & {
    filter: invert(1);
  }
}
</style>
