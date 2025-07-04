<script setup>
definePageMeta({
  middleware: 'auth'
});

const store = useStore();

const { createInvoice } = useInvoice();

const invoices = ref([]);

onMounted( () => {
  invoices.value = store.invoices;
})

const handleCreateInvoice = async () => {
  const { data } = await createInvoice();
  store.addInvoices(data);  
}

const editInvoice = (id) => {
  navigateTo(`/invoice/${id}`)
}
</script>
<template>
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
      <div>
        <span>SNO</span>
        <span>Created At</span>
        <span>Title</span>
        <span>Client Name</span>
        <span>Amount</span>
        <span>Status</span>
      </div>
      <div>
        <div v-for="invoice in invoices" @click="editInvoice(invoice.id)">
          <span>{{ invoice.invoice_no }}</span>
          <span>{{ invoice.created_at }}</span>
          <span>{{ invoice.title }}</span>
          <span>{{ invoice.client_name }}</span>
          <span>{{ invoice.amount }}</span>
          <span>{{ invoice.status }}</span>
        </div>
      </div>
    </div>
  </div>
</template>