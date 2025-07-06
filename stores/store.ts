interface InvoiceState {
  user: User
  company: Company
  invoices: Invoice[]
  currentInvoice: Invoice
}

export const useStore = defineStore('invoice', {
  state: (): InvoiceState => ({
    user: {
      id: '',
      email: ''
    },
    company: {},
    invoices: [],
    currentInvoice: null
  }),
  getters: {},
  actions: {
    initUser( id: string, email: string) {
      this.user['id'] = id;
      this.user['email'] = email;
    },
    initCompany( company: Company) {
      this.company = company;      
    },
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
    updateInvoice( id: string, value: string ) {
      this.currentInvoice[id] = value;
    },
    updateCompany( id: string, value: string ) {
      this.company = this.company || {};
      
      this.company[id] = value;      
    }
  },
})