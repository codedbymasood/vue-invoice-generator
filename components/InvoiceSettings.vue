<script setup>
import invoiceControls from '../utils/invoiceSettings';

const activeTab = ref(invoiceControls[0].title);
</script>
<template>
  <div class="w-xs h-screen overflow-y-auto border-l py-8">
    <div v-for="controls in invoiceControls" class="border-b-1 px-4 mt-4 pb-4">
      <p @click="activeTab = controls.title">{{ controls.title }}</p>
      <Controls v-if="activeTab == controls.title" :controls />
    </div>
  </div>
</template>