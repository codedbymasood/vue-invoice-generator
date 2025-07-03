<script setup>
const { signOut } = useAuth();
</script>

<template>
  <div class="h-screen w-24">
    <ul>
      <li>Invoices</li>
      <li>Settings</li>
      <li @click="signOut">Log Out</li>
    </ul>
  </div>
</template>