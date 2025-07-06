<script setup lang="ts">
import VueDatePicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css'
import type { DatePickerInstance } from "@vuepic/vue-datepicker"

const datepicker = ref<DatePickerInstance>(null);

const props = defineProps<{
  setting: Setting
}>();

const { value, updateVal } = useControls( props.setting );

const date = ref(value);

const handleDate = (modelData) => {
  date.value = modelData;
  
  const fullDate = new Date(modelData)

  const day = String(fullDate.getDate()).padStart(2, '0');
  const month = String(fullDate.getMonth() + 1).padStart(2, '0');
  const year = fullDate.getFullYear();
  
  const value = `${month}/${day}/${year}`;  

  updateVal(value);
}
</script>
<template>
  <div>
    <label>{{ setting.title }}</label>
    <VueDatePicker :model-value="date" @update:model-value="handleDate" :enable-time-picker="false"></VueDatePicker>
  </div>
</template>