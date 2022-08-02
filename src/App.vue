<template lang="pug">
.app
  transition(name="view" appear)
    router-view
  Dialog
</template>
<script>
import { mapActions } from 'pinia'
import { useThemeStore } from '@/stores/theme'
import { useTailwindStyleStore } from '@/stores/tailwind'
import { initialVueSax } from '@/library/vuesax'
import resolveConfig from 'tailwindcss/resolveConfig'
import tailwindConfig from '../tailwind.config.js'
import Dialog from '@/components/Dialog'

export default {
  components: {
    Dialog
  },
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
