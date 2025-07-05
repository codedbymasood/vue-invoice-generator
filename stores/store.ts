interface InvoiceState {
  company: Company
  invoices: Invoice[]
}

export const useStore = defineStore('invoice', {
  state: (): InvoiceState => ({
    company: {},
    invoices: []
  }),
  getters: {},
  actions: {
    initInvoices( invoices: Invoice[] ) {
      this.invoices = invoices;
    },
    addInvoices( invoice: Invoice ) {
      this.invoices.push(invoice);
    },
    getInvoice(id: Invoice['id'] ) : Invoice | undefined {      
      return this.invoices.find( ( invoice: Invoice ) => invoice.id == id );
    }
  },
})