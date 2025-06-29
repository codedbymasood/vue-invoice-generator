<script setup>
definePageMeta({
  middleware: 'auth'
})
</script>
<template>
  <!-- Sidebar with user and setting link -->
  <!-- List of invoices -->
  <div>
    <div>
      <p>My Invoices</p>
    </div>

    <div>
      <a href="#">Create Invoice</a>
    </div>
  </div>
</template>