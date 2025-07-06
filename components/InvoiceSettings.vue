<script setup>
import invoiceControls from '../utils/invoiceSettings';
</script>
<template>
  <div class="w-xs h-screen overflow-y-scroll border-l px-4 py-8">
    <div v-for="controls in invoiceControls">
      <p>{{ controls.title }}</p>
      <Controls :controls />
    </div>
  </div>
</template>