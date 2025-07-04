<script setup>
import invoiceControls from '../utils/invoiceSettings';
</script>
<template>
  <div class="w-xs h-screen overflow-y-scroll border-l">
    <div v-for="controls in invoiceControls">
      <p>{{ controls.title }}</p>
      <Controls :controls />
    </div>
  </div>
</template>