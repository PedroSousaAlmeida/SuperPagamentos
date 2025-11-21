<script setup>
const metrics = [
  {
    label: "Reembolsos",
    value: "R$ 8.260,10",
    percentage: "4,6%",
    trend: "up",
    color: "#3B82F6",
  },
  {
    label: "Chargebacks",
    value: "R$ 1.160,10",
    percentage: "0,5%",
    trend: "down",
    color: "#8B5CF6",
  },
  {
    label: "Cancelados",
    value: "R$ 3.120,60",
    percentage: "1,5%",
    trend: "up",
    color: "#3B82F6",
  },
  {
    label: "Não autorizado",
    value: "R$ 6.120,10",
    percentage: "0,5%",
    trend: "down",
    color: "#8B5CF6",
  },
];
</script>

<template>
  <div class="grid grid-cols-2 gap-3">
    <div
      v-for="(metric, index) in metrics"
      :key="index"
      class="bg-white rounded-2xl p-4 shadow-sm"
    >
      <div class="text-xs text-gray-500 mb-2">{{ metric.label }}</div>
      <div class="font-bold text-base mb-1">{{ metric.value }}</div>
      <div class="flex items-center justify-between">
        <span
          class="text-xs font-semibold"
          :class="
            metric.trend === 'down' ? 'text-red-500' : 'text-orange-500'
          "
        >
          {{ metric.percentage }}
        </span>
        <!-- Mini gráfico -->
        <svg width="40" height="16" viewBox="0 0 40 16" fill="none">
          <path
            d="M0 12 L10 8 L20 10 L30 6 L40 9"
            stroke-width="2"
            :stroke="metric.color"
            fill="none"
          />
        </svg>
      </div>
    </div>
  </div>
</template>
