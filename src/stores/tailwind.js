import { defineStore } from 'pinia'

export const useTailwindStyleStore = defineStore('tailwindStyle', {
  state: () => {
    return {
      config: {}
    }
  },
  getters: {
    themeColor () {
      return this.config.theme.colors
    }
  },
  actions: {
    setConfig (payload) {
      this.config = payload
    }
  }
})
