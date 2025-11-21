<script setup>
defineProps({
  title: String,
  value: String,
  count: String,
  percentage: String,
  hasAlert: Boolean,
});
</script>

<template>
  <div class="bg-white rounded-xl p-4 shadow-sm">
    <div class="flex items-center justify-between mb-4">
      <div class="flex items-center gap-2">
        <h3 class="font-bold">{{ title }}</h3>
        <div
          v-if="hasAlert"
          class="w-5 h-5 bg-orange-500 rounded-full flex items-center justify-center text-white text-xs font-bold"
        >
          !
        </div>
      </div>
      <span
        class="text-xl text-gray-500 border rounded-full border-gray-200 w-10 h-10 flex items-center justify-center"
        >%</span
      >
    </div>
    <div class="text-2xl font-bold mb-2">{{ value }}</div>
    <div
      class="flex items-center justify-between text-sm border-t border-gray-200 pt-2 -mx-4 px-4"
    >
      <span class="text-gray-500">{{ count }}</span>
      <span class="text-gray-700">{{ percentage }}</span>
    </div>
  </div>
</template>
