import { defineStore } from 'pinia'

export const useOperatorStore = defineStore('operator', {
  state: () => {
    return {
      operator: {}
    }
  },
  actions: {
    setOperator (payload) {
      this.operator = payload
    }
  }
})
