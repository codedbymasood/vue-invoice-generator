<script setup>
definePageMeta({
  middleware: 'auth'
});

const store = useStore();

const { createInvoice, deleteInvoice, getTotalByID } = useInvoice();

const invoices = ref([]);

onMounted( () => {
  invoices.value = store.invoices;
})

const handleCreateInvoice = async () => {
  const { data } = await createInvoice();
  store.addInvoices(data);  
}

const handleDeleteInvoice = async (id) => {
  const { data, success } = await deleteInvoice(id);

  if ( success ) {
    store.deleteInvoice(id);  
  }
  
}

const editInvoice = (id) => {
  navigateTo(`/invoice/${id}`)
}
</script>
<template>
  <div class="w-full max-w-3/4">
    <div>
      <div class="flex justify-between">
        <div>
          <p>My Invoices</p>
        </div>

        <div>
          <button type="submit" @click.prevent="handleCreateInvoice()">Create Invoice</button>
        </div>
      </div>
    </div>
    <div v-if="invoices.length > 0">
      <div>
        <div class="flex justify-between border-1">
          <span class="w-[20%] border-r-1 text-center">Invoice No.</span>
          <span class="w-[20%] border-r-1 text-center">Issue Date</span>
          <span class="w-[20%] border-r-1 text-center">Client Name</span>
          <span class="w-[20%] border-r-1 text-center">Amount</span>
          <span class="w-[20%] text-center">Status</span>
          <span class="w-[20%] text-center">Action</span>
        </div>
        <div>
          <div v-for="invoice in invoices" @click="editInvoice(invoice.id)" class="flex justify-between border-1 border-t-0">
            <span class="w-[20%] border-r-1 text-center">{{ invoice.invoice_no }}</span>
            <span class="w-[20%] border-r-1 text-center">{{ invoice.issue_date }}</span>
            <span class="w-[20%] border-r-1 text-center">{{ invoice.client_name }}</span>
            <span class="w-[20%] border-r-1 text-center">{{ getTotalByID(invoice.id) }}</span>
            <span class="w-[20%] border-r-1 text-center">{{ invoice.status }}</span>
            <span @click.stop="handleDeleteInvoice(invoice.id)" class="w-[20%] text-center">Delete</span>
          </div>
        </div>
      </div>
    </div>
      
  </div>
</template>