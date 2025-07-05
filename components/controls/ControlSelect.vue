<script setup lang="ts">
const props = defineProps<{
  setting: Setting
}>();
</script>
<template>
  <div>
    <label>{{ setting.title }}</label>
    <select>
      <option v-for="option in setting.options">{{ option }}</option>
    </select>
  </div>
</template>