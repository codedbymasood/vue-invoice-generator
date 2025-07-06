interface InvoiceState {
  company: Company
  invoices: Invoice[]
  currentInvoice: Invoice
}

export const useStore = defineStore('invoice', {
  state: (): InvoiceState => ({
    company: {},
    invoices: [],
    currentInvoice: null
  }),
  getters: {},
  actions: {
    initInvoices( invoices: Invoice[] ) {
      this.invoices = invoices;
    },
    addInvoices( invoice: Invoice ) {
      this.invoices.push(invoice);
    },
    getInvoice( id: Invoice['id'] ) : Invoice | undefined {      
      return this.invoices.find( ( invoice: Invoice ) => invoice.id == id );
    },
    setCurrentInvoice( id: Invoice['id'] ) {
      this.currentInvoice = this.invoices.find( (invoice : Invoice ) => invoice.id === +id );
    },
    updateInvoice( id: string, value: string) {
      this.currentInvoice[id] = value;
    }
  },
})