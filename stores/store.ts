export const useStore = defineStore('invoice', {
  state: () => ({
    invoices: [
      {
        name: 'Invoice 1'
      },
      {
        name: 'Invoice 2'
      }
    ]
  }),
  getters: {},
  actions: {},
})