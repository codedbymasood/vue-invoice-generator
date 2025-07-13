<script setup>
import invoiceControls from '../data/invoiceSettings';

const activeTab = ref(invoiceControls[0].title);

const { saveInvoiceInDB } = useInvoice();
const saveInvoice = async () => {
  const { data } = await saveInvoiceInDB();

  console.log(data);
  
}
</script>
<template>
  <div class="w-xs h-screen overflow-y-auto border-l py-8 relative">
    <div v-for="controls in invoiceControls" class="border-b-1 px-4 mt-4 pb-4">
      <p @click="activeTab = controls.title">{{ controls.title }}</p>
      <Controls v-if="activeTab == controls.title" :controls />
    </div>
    <div class="absolute bottom-0">
      <button @click="saveInvoice">Save Invoice</button>
      <button>Save as PDF</button>
    </div>
  </div>
</template>