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
      items: [
        {
          title: 'Item Title',
          quantity: 1,
          price: 0
        }
      ],
      status: 'draft',
      issue_date: new Date(Date.now()).toISOString(),
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

  const saveInvoice = async () => {
    try {
      const response = await $fetch('/api/save-invoice', {
        method: 'POST',
        body: store.currentInvoice
      });

      return {
        success: true,
        message: 'Invoice saved',
        data: response.data
      }
    } catch (error) {
      console.error('Error:', error.data?.message)
      throw error
    }
  }

  const deleteInvoice = async (id) => {
    try {
      const response = await $fetch('/api/delete-invoice', {
        method: 'POST',
        body: {
          id
        }
      });

      return {
        success: true,
        message: 'Invoice deleted',
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

  const invoiceItems = computed( () => store?.currentInvoice?.items );

  const subTotal = computed( () => {
    let amount = 0;
    invoiceItems.value && invoiceItems.value.forEach( item => {
      amount += +item?.price * +item?.quantity;
    });   

    return amount;
  });

  const taxPercentage = computed( () => store?.currentInvoice?.tax_percentage ?? 0 );

  const taxAmount = computed( () => Math.round( subTotal.value * (taxPercentage.value/100) ) );

  const total = computed( () => +subTotal.value + +taxAmount.value );

  return {
    invoiceItems,
    subTotal,
    taxPercentage,
    taxAmount,
    total,
    getInvoices,
    createInvoice,
    saveInvoice,
    deleteInvoice
  };
}