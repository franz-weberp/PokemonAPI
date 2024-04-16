import { defineStore } from 'pinia'

export const useMainStore = defineStore('main', {
  state: () => ({ page: 0 }),
  actions: {
    incrementPage() { this.page++ }
  }
})
