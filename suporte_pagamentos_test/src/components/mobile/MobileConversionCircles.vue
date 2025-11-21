<script setup>
const conversions = [
  { name: "Crédito", value: 92, color: "#3B82F6" },
  { name: "Débito", value: 95, color: "#8B5CF6" },
  { name: "Boleto", value: 42, color: "#A855F7" },
  { name: "Pix", value: 98, color: "#60A5FA" },
];

const getCircleProgress = (percentage) => {
  const radius = 45;
  const circumference = 2 * Math.PI * radius;
  const progress = circumference - (percentage / 100) * circumference;
  return progress;
};
</script>

<template>
  <div class="bg-white rounded-2xl p-4 shadow-sm">
    <h3 class="font-bold text-sm mb-4">Conversão por modalidade</h3>
    <div class="grid grid-cols-2 gap-6">
      <div
        v-for="(item, index) in conversions"
        :key="index"
        class="flex flex-col items-center"
      >
        <!-- Círculo de progresso -->
        <div class="relative w-24 h-24 mb-2">
          <svg class="w-full h-full transform -rotate-90">
            <!-- Background circle -->
            <circle
              cx="48"
              cy="48"
              r="45"
              stroke="#E5E7EB"
              stroke-width="8"
              fill="none"
            />
            <!-- Progress circle -->
            <circle
              cx="48"
              cy="48"
              r="45"
              :stroke="item.color"
              stroke-width="8"
              fill="none"
              :stroke-dasharray="283"
              :stroke-dashoffset="getCircleProgress(item.value)"
              stroke-linecap="round"
            />
          </svg>
          <div
            class="absolute inset-0 flex items-center justify-center text-xl font-bold"
          >
            {{ item.value }}%
          </div>
        </div>
        <div class="text-sm text-gray-700">{{ item.name }}</div>
      </div>
    </div>
  </div>
</template>
