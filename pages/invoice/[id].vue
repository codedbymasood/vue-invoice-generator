<script setup>
const store = useStore();
const route = useRoute();
const invoiceId = route.params.id;
const invoice = store.getInvoice(invoiceId);

</script>

<template>
  <div class="flex">
    <!-- TODO: Invoice template select added here -->
    <Invoice :invoice />
    <InvoiceSettings />
  </div>
</template>