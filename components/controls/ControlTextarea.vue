<script setup lang="ts">
const props = defineProps<{
  setting: Setting
}>();

const { value, updateVal } = useControls( props.setting );
</script>
<template>
  <div>
    <label>{{ setting.title }}</label>
    <textarea @change="updateVal">{{ value }}</textarea>
  </div>
</template>