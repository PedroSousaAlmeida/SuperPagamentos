<script setup>
import { ref } from "vue";
import VueApexCharts from "vue3-apexcharts";

const revenueData = Array.from({ length: 31 }, (_, i) => ({
  day: i + 1,
  value: Math.random() * 200000 + 50000,
  highlighted: [5, 6, 15, 16, 27].includes(i + 1),
}));

const chartOptions = ref({
  chart: {
    type: "bar",
    height: 200,
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
    labels: { style: { colors: "#9CA3AF", fontSize: "12px" } },
    axisBorder: { show: false },
    axisTicks: { show: false },
  },
  yaxis: {
    max: 250000,
    labels: {
      style: { colors: "#9CA3AF", fontSize: "12px" },
      formatter: (value) => `${(value / 1000).toFixed(0)}K`,
    },
  },
  grid: { strokeDashArray: 3, borderColor: "#F3F4F6" },
});

const series = ref([
  {
    name: "Faturamento",
    data: revenueData.map((d) => d.value),
  },
]);
</script>

<template>
  <div class="bg-white rounded-xl p-4 md:p-6 shadow-sm mb-6">
    <div class="flex items-center justify-between mb-4 md:mb-6">
      <div>
        <div class="flex items-center gap-2 mb-2">
          <h2 class="text-base md:text-lg font-bold">
            Estatísticas do período
          </h2>
          <span
            class="w-5 h-5 bg-gray-200 rounded-full flex items-center justify-center text-xs text-gray-600"
          >
            <svg
              width="12"
              height="12"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
            >
              <path d="M3 3h18v18H3z" />
              <line x1="9" y1="3" x2="9" y2="21" />
            </svg>
          </span>
        </div>
        <div class="flex items-start gap-3">
          <div class="flex items-baseline gap-1">
            <span class="text-gray-400 text-xs md:text-sm">R$</span>
            <span class="text-2xl md:text-4xl font-bold" style="color: #0641fc"
              >1.060.551,14</span
            >
          </div>
          <div class="flex flex-col items-start">
            <div
              class="text-green-600 text-sm font-semibold flex items-center gap-0.5"
            >
              <svg
                width="12"
                height="12"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
              >
                <polyline points="18 15 12 9 6 15" />
              </svg>
              123,9%
            </div>
            <span class="text-xs text-gray-500 font-semibold"
              >Em Crescimento</span
            >
          </div>
        </div>
      </div>
    </div>

    <div style="height: 200px" class="mb-4 md:mb-6">
      <VueApexCharts
        type="bar"
        height="200"
        :options="chartOptions"
        :series="series"
      />
    </div>

    <div class="grid grid-cols-2 md:grid-cols-5 gap-3 md:gap-6">
      <div
        class="bg-white border border-gray-200 rounded-lg p-3 relative overflow-hidden"
      >
        <div class="flex items-center gap-1 mb-1">
          <div class="w-2 h-2 bg-blue-600 rounded-full"></div>
          <span class="text-xs text-gray-500">Faturamento recebido</span>
        </div>
        <div
          class="text-sm md:text-lg font-bold relative inline-flex items-center gap-1"
        >
          <svg
            width="16"
            height="12"
            viewBox="0 0 16 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="4.5" cy="5.5" r="4.5" fill="#3B82F6" />
            <circle cx="10" cy="6" r="6" fill="#3B82F6" fill-opacity="0.45" />
          </svg>
          <span class="relative z-10">R$ 245.340,90</span>
        </div>
      </div>
      <div
        class="bg-white border border-gray-200 rounded-lg p-3 relative overflow-hidden"
      >
        <div class="flex items-center justify-between gap-1 mb-1">
          <div class="flex items-center gap-1">
            <div class="w-2 h-2 bg-purple-600 rounded-full"></div>
            <span class="text-xs text-gray-500">Faturamento Previsto</span>
          </div>
          <span
            class="px-2 py-0.5 bg-gray-100 text-gray-700 text-[10px] font-medium rounded-full"
            >D+2</span
          >
        </div>
        <div
          class="text-sm md:text-lg font-bold relative inline-flex items-center gap-1"
        >
          <svg
            width="16"
            height="12"
            viewBox="0 0 16 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="4.5" cy="5.5" r="4.5" fill="#B882FE" />
            <circle cx="10" cy="6" r="6" fill="#B882FE" fill-opacity="0.45" />
          </svg>
          <span class="relative z-10">R$ 815.210,24</span>
        </div>
      </div>
      <div
        class="bg-white border border-gray-200 rounded-lg p-3 relative overflow-hidden"
      >
        <div class="flex items-center gap-1 mb-1">
          <div class="w-2 h-2 bg-orange-500 rounded-full"></div>
          <span class="text-xs text-gray-500">Vendas Pendentes</span>
        </div>
        <div
          class="text-sm md:text-lg font-bold relative inline-flex items-center gap-1"
        >
          <svg
            width="16"
            height="12"
            viewBox="0 0 16 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="4.5" cy="5.5" r="4.5" fill="#F97316" />
            <circle cx="10" cy="6" r="6" fill="#F97316" fill-opacity="0.45" />
          </svg>
          <span class="relative z-10">R$ 15.332,18</span>
        </div>
      </div>
      <div
        class="bg-white border border-gray-200 rounded-lg p-3 relative overflow-hidden"
      >
        <div class="flex items-center gap-1 mb-1">
          <div class="w-2 h-2 bg-purple-400 rounded-full"></div>
          <span class="text-xs text-gray-500">Ticket Médio</span>
        </div>
        <div
          class="text-sm md:text-lg font-bold relative inline-flex items-center gap-1"
        >
          <svg
            width="16"
            height="12"
            viewBox="0 0 16 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="4.5" cy="5.5" r="4.5" fill="#C084FC" />
            <circle cx="10" cy="6" r="6" fill="#C084FC" fill-opacity="0.45" />
          </svg>
          <span class="relative z-10">R$ 192,30</span>
        </div>
      </div>
      <div
        class="bg-white border border-gray-200 rounded-lg p-3 relative overflow-hidden"
      >
        <div class="flex items-center gap-1 mb-1">
          <div class="w-2 h-2 bg-gray-700 rounded-full"></div>
          <span class="text-xs text-gray-500">Número de cobrança</span>
        </div>
        <div
          class="text-sm md:text-lg font-bold relative inline-flex items-center gap-1"
        >
          <svg
            width="16"
            height="12"
            viewBox="0 0 16 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="4.5" cy="5.5" r="4.5" fill="#374151" />
            <circle cx="10" cy="6" r="6" fill="#374151" fill-opacity="0.45" />
          </svg>
          <span class="relative z-10">12.349</span>
        </div>
      </div>
    </div>
  </div>
</template>
