import { defineStore } from 'pinia'
import { nextTick } from '@vue/composition-api'

function defaultState () {
  return {
    active: false,
    type: '',
    info: {},
    confirmFunc: () => {}
  }
}

export const useDialogStore = defineStore('dialog', {
  state: () => defaultState(),
  actions: {
    openDialog (payload) {
      const { type, info, confirmFunc } = payload
      this.active = true
      this.type = type
      this.info = info
      this.confirmFunc = confirmFunc
    },
    closeDialog () {
      this.active = false
      nextTick(() => this.resetState())
    },
    confirmDialog () {
      this.confirmFunc()
      this.closeDialog()
    },
    resetState () {
      Object.assign(this, defaultState())
    }
  }
})
