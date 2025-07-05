<script setup lang="ts">
const props = defineProps<{
  setting: Setting
}>();
</script>
<template>
  <div>
    <label>{{ setting.title }}</label>
    <input type="text">
  </div>
</template>