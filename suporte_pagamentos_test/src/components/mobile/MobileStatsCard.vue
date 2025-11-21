<script setup>
import { Filter } from "lucide-vue-next";

// Dados simulados do gráfico
const chartData = Array.from({ length: 30 }, (_, i) => ({
  day: i + 1,
  value: Math.random() * 100,
  highlighted: Math.random() > 0.7,
}));
</script>

<template>
  <div class="bg-white rounded-2xl p-4 shadow-sm">
    <div class="flex items-center justify-between mb-3">
      <h3 class="font-bold text-sm">Estatísticas do período</h3>
      <button class="p-2">
        <Filter :size="18" class="text-gray-600" />
      </button>
    </div>

    <div class="mb-2">
      <div class="text-2xl font-bold mb-1">R$ 760.102,06</div>
      <div class="text-green-600 text-sm font-semibold">+ 123,9%</div>
    </div>

    <!-- Gráfico de barras -->
    <div class="flex items-end justify-between h-24 gap-0.5 mb-2">
      <div
        v-for="(item, index) in chartData"
        :key="index"
        class="flex-1 rounded-t transition-all"
        :class="item.highlighted ? 'bg-green-500' : 'bg-blue-500'"
        :style="{ height: item.value + '%' }"
      ></div>
    </div>

    <div class="text-xs text-gray-500 text-center">
      De 15 de Dez. de 2024 a 07 de Fev. de 2025
    </div>
  </div>
</template>
