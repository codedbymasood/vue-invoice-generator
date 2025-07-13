<script setup lang="ts">
const store = useStore();
const props = defineProps<{
  setting: Setting
}>();

const { value, updateVal } = useControls( props.setting );

const modelValue = ref(value);

const addItem = () => {
  modelValue.value.push({
    title: 'Item Title',
    quantity: 1,
    price: 0
  });

  updateVal( modelValue.value );  
}

const updateItemValue = ( key: string, index: number, $event ) => {
  modelValue.value[index][key] = ( 'price' === key ) ? +$event.target.value : $event.target.value;
}
</script>
<template>
  <div>
    <label>{{ setting.title }}</label>
    <div v-for="{title, quantity, price}, index in value" class="flex mb-1">
      <div><input type="text" :value="title" @change="updateItemValue( 'title', index, $event )"></div>
      <div class="ml-1"><input type="number" :value="quantity" @change="updateItemValue( 'quantity', index, $event )" class="w-[60px]!"></div>
      <div class="ml-1"><input type="number" :value="price" @change="updateItemValue( 'price', index, $event )" class="w-[80px]!"></div>
    </div>
    <button @click.prevent="addItem">Add Item</button>
  </div>
</template>