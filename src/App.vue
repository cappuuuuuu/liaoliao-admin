<template lang="pug">
.app
  transition(name="view" appear)
    router-view
</template>
<script>
import { mapActions } from 'pinia'
import { useThemeStore } from '@/stores/theme'
import { useTailwindStyleStore } from '@/stores/tailwind'
import { initialVueSax } from '@/library/vuesax'
import resolveConfig from 'tailwindcss/resolveConfig'
import tailwindConfig from '../tailwind.config.js'

export default {
  created () {
    initialVueSax(this.$vs)
    this.initializeTheme()
    this.setTailwindConfig(resolveConfig(tailwindConfig))
  },
  methods: {
    ...mapActions(useThemeStore, ['initializeTheme']),
    ...mapActions(useTailwindStyleStore, { setTailwindConfig: 'setConfig' })
  }
}
</script>
<style lang="scss" scoped>
@import './assets/style/all.scss';
</style>
