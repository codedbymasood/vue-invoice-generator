<script setup>


import invoiceControls from '../data/invoiceSettings';

const activeTab = ref(invoiceControls[0].title);

const { downloadPDF } = usePDF();
const { saveInvoice } = useInvoice();


const handleSaveInvoice = async () => {
  const { data } = await saveInvoice();  
}

const handleSavePDF = async () => {
  const response = await downloadPDF('invoice-content');
  console.log(response);  
}
</script>
<template>
  <div class="w-xs h-screen overflow-y-auto border-l py-8 relative">
    <div v-for="controls in invoiceControls" class="border-b-1 px-4 mt-4 pb-4">
      <p @click="activeTab = controls.title">{{ controls.title }}</p>
      <Controls v-if="activeTab == controls.title" :controls />
    </div>
    <div class="absolute bottom-0">
      <button @click="handleSaveInvoice">Save Invoice</button>
      <button @click="handleSavePDF">Save as PDF</button>
    </div>
  </div>
</template>