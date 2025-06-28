<script setup>
const store = useStore();

const invoices = computed( () => store.invoices );
</script>
<template>
  <!-- Sidebar with user and setting link -->
  <!-- List of invoices -->
  Number of Invoices: {{ invoices.length }}
</template>