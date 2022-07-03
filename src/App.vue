<template lang="pug">
.app
  transition(name="view" appear)
    router-view
</template>
<script>
import { mapActions } from 'pinia'
import { useThemeStore } from '@/stores/theme'
import { initialVueSax } from '@/library/vuesax'

export default {
  created () {
    initialVueSax(this.$vs)
    this.initializeTheme()
  },
  methods: {
    ...mapActions(useThemeStore, ['initializeTheme'])
  }
}
</script>
<style lang="scss" scoped>
@import './assets/style/all.scss';
</style>
