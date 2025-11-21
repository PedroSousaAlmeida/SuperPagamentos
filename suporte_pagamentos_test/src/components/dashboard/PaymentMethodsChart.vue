<script setup>
import { ref } from "vue";
import VueApexCharts from "vue3-apexcharts";

const paymentMethods = [
  { name: "Crédito", value: 92, color: "#3B82F6" },
  { name: "Débito", value: 95, color: "#8B5CF6" },
  { name: "Boleto", value: 42, color: "#A855F7" },
  { name: "Pix", value: 98, color: "#60A5FA" },
];

const getChartOptions = (color) => ({
  chart: {
    type: "radialBar",
    sparkline: { enabled: true },
  },
  plotOptions: {
    radialBar: {
      startAngle: 0,
      endAngle: 360,
      hollow: { size: "55%" },
      track: { background: "#E5E7EB" },
      dataLabels: {
        show: true,
        name: { show: false },
        value: {
          fontSize: "16px",
          fontWeight: "500",
          color: "#9CA3AF",
          offsetY: 5,
          formatter: (val) => `${val}%`,
        },
      },
    },
  },
  colors: [color],
});
</script>

<template>
  <div class="bg-white rounded-xl p-6 shadow-sm">
    <h3 class="font-bold mb-6 pb-4 border-b border-gray-200 -mx-6 px-6">
      Conversão por modalidade
    </h3>
    <div class="grid grid-cols-4 gap-4">
      <div
        v-for="method in paymentMethods"
        :key="method.name"
        class="text-center"
      >
        <div class="w-24 h-24 mx-auto mb-2">
          <VueApexCharts
            type="radialBar"
            :options="getChartOptions(method.color)"
            :series="[method.value]"
            height="96"
          />
        </div>
        <div class="text-sm text-gray-600">{{ method.name }}</div>
      </div>
    </div>
  </div>
</template>
