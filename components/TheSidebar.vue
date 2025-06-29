<script setup>
const { signOut } = useAuth();
</script>

<template>
  <ul>
    <li>Invoices</li>
    <li>Settings</li>
    <li @click="signOut">Log Out</li>
  </ul>
</template>