<script setup>
import Text from './ControlText.vue';
import Textarea from './ControlTextarea.vue';
import Date from './ControlDate.vue';
import Items from './ControlItems.vue';

const props = defineProps({
  controls: Object
})

const componentMap = {
  text: Text,
  textarea: Textarea,
  date: Date,
  items: Items
}

</script>
<template>
  <ClientOnly>
    <div v-for="setting in controls.settings" class="mt-4">
      <component :is="componentMap[setting.type]" :setting />
    </div>
  </ClientOnly>
</template>