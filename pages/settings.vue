<script setup>
import globalControls from '../data/globalSettings';

const activeTab = ref(globalControls[0].title);

const tabs = computed(() => globalControls.map(control => control.title));

const { saveSettingsInDB } = useSettings();

const saveSettings = async () => {
  const { data } = await saveSettingsInDB();
}
</script>
<template>
  <div class="grow h-screen py-8">
    <!-- Tab Navigation -->
    <ul class="flex px-4">
      <li
        v-for="tab in tabs"
        :key="tab"
        @click="activeTab = tab"
        class="cursor-pointer px-3 py-2"
      >
        {{ tab }}
      </li>
    </ul>

    <!-- Active Tab Content -->
    <div v-for="controls in globalControls" :key="controls.title" class="px-4 mt-6">
      <Controls v-if="activeTab === controls.title" :controls="controls" />
    </div>
    <div class="mt-4 px-4">
      <button @click.prevent="saveSettings">Save</button>
    </div>
  </div>
</template>