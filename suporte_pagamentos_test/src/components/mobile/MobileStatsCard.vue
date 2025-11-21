<script setup>
import { ref } from "vue";
import { Filter } from "lucide-vue-next";
import VueApexCharts from "vue3-apexcharts";

// Dados do gráfico (30 dias para mobile)
const revenueData = Array.from({ length: 30 }, (_, i) => ({
  day: i + 1,
  value: Math.random() * 200000 + 50000,
}));

const chartOptions = ref({
  chart: {
    type: "bar",
    height: 140,
    toolbar: { show: false },
    zoom: { enabled: false },
  },
  plotOptions: {
    bar: {
      borderRadius: 4,
      columnWidth: "8px",
      distributed: true,
    },
  },
  dataLabels: { enabled: false },
  legend: { show: false },
  colors: revenueData.map((d) => (d.value > 50000 ? "#2FCD66" : "#E5E7EB")),
  fill: {
    type: revenueData.map((d) => (d.value > 50000 ? "gradient" : "solid")),
    gradient: {
      shade: "light",
      type: "vertical",
      shadeIntensity: 0.5,
      gradientToColors: revenueData.map((d) =>
        d.value > 50000 ? "#0641FC" : "#E5E7EB"
      ),
      inverseColors: false,
      opacityFrom: 1,
      opacityTo: 1,
      stops: [0, 100],
    },
  },
  xaxis: {
    categories: revenueData.map((d) => d.day),
    labels: { show: false },
    axisBorder: { show: false },
    axisTicks: { show: false },
  },
  yaxis: {
    show: false,
    max: 250000,
  },
  grid: { show: false },
});

const series = ref([
  {
    name: "Faturamento",
    data: revenueData.map((d) => d.value),
  },
]);
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

    <!-- Gráfico ApexCharts com gradiente -->
    <div style="height: 140px" class="mb-2">
      <VueApexCharts
        type="bar"
        height="140"
        :options="chartOptions"
        :series="series"
      />
    </div>

    <div class="text-xs text-gray-500 text-center">
      De 15 de Dez. de 2024 a 07 de Fev. de 2025
    </div>
  </div>
</template>
