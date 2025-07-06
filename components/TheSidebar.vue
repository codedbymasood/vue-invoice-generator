<script setup>
const { signOut } = useAuth();
</script>

<template>
  <div class="h-screen w-24">
    <ul>
      <li><NuxtLink to="/">Invoice</NuxtLink></li>
      <li><NuxtLink to="/settings">Settings</NuxtLink></li>
      <li @click="signOut" class="cursor-pointer">Log Out</li>
    </ul>
  </div>
</template>