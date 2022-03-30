<template lang="pug">
.app
  transition(name="view" appear)
    router-view
</template>
<script>
import { mapActions } from 'pinia'
import { useThemeStore } from '@/stores/theme'

export default {
  created () {
    this.initializeTheme()
  },
  methods: {
    ...mapActions(useThemeStore, ['initializeTheme'])
  }
}
</script>
<style>
@import './assets/style/all.scss'
</style>
