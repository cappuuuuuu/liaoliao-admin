<template lang="pug">
  .toggle-theme-btn
    img.theme-icon(
      @click="toggleTheme"
      :src="require(`@/assets/${theme}-mode.svg`)"
    )
</template>

<script>
import { mapState, mapActions } from 'pinia'
import { useThemeStore } from '@/stores/theme'

export default {
  name: 'ToggleThemeButton',
  computed: {
    ...mapState(useThemeStore, ['theme'])
  },
  methods: {
    ...mapActions(useThemeStore, ['toggleTheme'])
  }
}
</script>
<style lang="scss" scoped>
.theme-icon {
  @apply w-[24px] h-[24px];
}
</style>
