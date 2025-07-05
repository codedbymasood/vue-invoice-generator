<script setup>
const store = useStore();
const route = useRoute();
const invoiceId = route.params.id;
const invoice = store.getInvoice(invoiceId);

const company = {};

</script>

<template>
  <div class="flex">
    <!-- TODO: Invoice template select added here -->
    <Invoice :invoice :company />
    <InvoiceSettings />
  </div>
</template>