<script setup lang="ts">
const props = defineProps<{
  setting: Setting
}>();

const { value, updateVal } = useControls( props.setting );

const type = ( props.setting.mod ) ? props.setting.mod : 'text';
</script>
<template>
  <div>
    <label>{{ setting.title }}</label>
    <input :type :value @change="updateVal( $event )">
  </div>
</template>