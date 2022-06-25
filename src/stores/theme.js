import { defineStore } from 'pinia'
import COMMON_CONSTANTS from '@/constants/common'

export const useThemeStore = defineStore('theme', {
  state: () => {
    return {
      theme: COMMON_CONSTANTS.theme.LIGHT
    }
  },
  getters: {
    isDarkTheme () {
      return this.theme === COMMON_CONSTANTS.theme.DARK
    },
    reverseTheme () {
      return this.theme === COMMON_CONSTANTS.theme.DARK
        ? COMMON_CONSTANTS.theme.LIGHT
        : COMMON_CONSTANTS.theme.DARK
    }
  },
  actions: {
    // handle localStorage theme value
    initializeTheme () {
      const localStorageTheme = localStorage.getItem('theme')
      if (localStorageTheme) this.theme = localStorageTheme

      this.setTheme()
    },
    toggleTheme () {
      this.theme = this.isDarkTheme ? COMMON_CONSTANTS.theme.LIGHT : COMMON_CONSTANTS.theme.DARK
      this.setTheme()
    },
    setTheme () {
      // Set LocalStorage
      localStorage.setItem('theme', this.theme)

      // toggle HTML tag dark className
      if (this.isDarkTheme) document.documentElement.classList.add(COMMON_CONSTANTS.theme.DARK)
      else document.documentElement.classList.remove(COMMON_CONSTANTS.theme.DARK)
    }
  }
})
