export const useInvoice = () => {
  const store = useStore();

  const invoiceNumber = computed( () => `INV-${String(store.invoices.length + 1).padStart(3, '0')}` );

  const createInvoice = async () => {    
    const threeDaysInMs = 3 * 24 * 60 * 60 * 1000;
    const cutoffDate = new Date(Date.now() + threeDaysInMs);

    const invoiceData = {
      invoice_no: invoiceNumber.value,
      client_name: 'Client name',
      title: 'Invoice',
      amount: 0,
      items: JSON.stringify([]),
      status: 'draft',
      created_at: new Date(Date.now()).toISOString(),
      due_date: cutoffDate.toISOString()
    }
    
    try {
      const response = await $fetch('/api/create-invoice', {
        method: 'POST',
        body: invoiceData
      });

      return {
        success: true,
        message: 'Invoice created successfully',
        data: response.data
      }
    } catch (error) {
      console.error('Error:', error.data?.message)
      throw error
    }
  }

  const getInvoices = async () => {
    try {
      const response =  await $fetch('/api/get-invoices');
      return response.data
    } catch (error) {
      console.error('Error:', error.data?.message)
      throw error
    }    
  }

  const invoices = computed( () => {
    return store.invoices;
  });

  return {
    getInvoices,
    createInvoice,
    invoices
  };
}