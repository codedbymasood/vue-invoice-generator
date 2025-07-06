<script setup>
const store = useStore();
const route = useRoute();
const invoiceId = route.params.id;
const invoice = computed( () => store.getInvoice(invoiceId) );

onMounted( () => {
  store.setCurrentInvoice(invoiceId);
})

const company = {};

</script>

<template>  
  <div class="w-full">
    <div class="flex">
      <!-- TODO: Invoice template select added here -->
      <Invoice :invoice :company />
      <InvoiceSettings />
    </div>
  </div>
</template>