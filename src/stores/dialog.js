import { defineStore } from 'pinia'

export const useDialogStore = defineStore('dialog', {
  state: () => {
    return {
      active: false,
      type: '',
      info: {}
    }
  },
  actions: {
    openDialog (payload) {
      this.type = payload.type
      this.info = payload?.info ?? {}
      this.active = true
    },
    closeDialog () {
      this.active = false
    }
  }
})
