<script setup>
const cards = [
  { label: "Faturamento recebido", value: "R$ 245.340,90", color: "#3B82F6" },
  { label: "Faturamento previsto", value: "R$ 815.210,24", color: "#8B5CF6" },
];
</script>

<template>
  <div class="grid grid-cols-2 gap-3">
    <div
      v-for="(card, index) in cards"
      :key="index"
      class="bg-white rounded-2xl p-4 shadow-sm"
    >
      <div class="flex items-center gap-2 mb-3">
        <div
          class="w-2 h-2 rounded-full"
          :style="{ backgroundColor: card.color }"
        ></div>
        <span class="text-xs text-gray-600">{{ card.label }}</span>
      </div>
      <div class="font-bold text-base">{{ card.value }}</div>
    </div>
  </div>
</template>
