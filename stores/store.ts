export const useStore = defineStore('invoice', {
  state: () => ({
    user: {},
    invoices: []
  }),
  getters: {},
  actions: {
    initInvoices( invoices ) {
      this.invoices = invoices;
    },
    addInvoices( invoice ) {
      this.invoices.push(invoice);
    },
    getInvoice(id) {      
      return this.invoices.find( invoice => invoice.id == id );
    }
  },
})