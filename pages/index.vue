<script setup>
definePageMeta({
  middleware: 'auth'
});

const store = useStore();

const { invoices, createInvoice, getInvoices } = useInvoice();

onMounted( async () => {
  const invoices = await getInvoices();

  store.initInvoices(invoices);  

  // redirect to edit invoice page there you
  // edit the invoice details.
})

const handleCreateInvoice = async () => {
  const { data } = await createInvoice();
  store.addInvoices(data);  
}
</script>
<template>
  <!-- Sidebar with user and setting link -->
  <!-- List of invoices -->
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
  <div>
    <ul>
      <li v-for="invoice in invoices">{{ invoice.title }}</li>
    </ul>
  </div>
</template>