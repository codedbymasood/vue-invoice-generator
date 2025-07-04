<script setup>
import Text from './ControlText.vue';
import Textarea from './ControlTextarea.vue';
import Select from './ControlSelect.vue';
import Number from './ControlNumber.vue';
import Date from './ControlDate.vue';
import Items from './ControlItems.vue';

const props = defineProps({
  controls: Object
})

const componentMap = {
  text: Text,
  textarea: Textarea,
  select: Select,
  number: Number,
  date: Date,
  items: Items
}

</script>
<template>
  <div v-for="setting in controls.settings">
    <component :is="componentMap[setting.type]" :setting />
  </div>
</template>