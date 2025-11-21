<script setup>
import { Plus } from "lucide-vue-next";
import HeaderMobile from "./layout/HeaderMobile.vue";
import MobileStatsCard from "./mobile/MobileStatsCard.vue";
import MobileRevenueCards from "./mobile/MobileRevenueCards.vue";
import MobileTransferAlert from "./mobile/MobileTransferAlert.vue";
import MobileMetricsGrid from "./mobile/MobileMetricsGrid.vue";
import MobileConversionCircles from "./mobile/MobileConversionCircles.vue";
import MobileCardBrands from "./mobile/MobileCardBrands.vue";
import BottomNavigation from "./mobile/BottomNavigation.vue";
</script>

<template>
  <div class="min-h-screen pb-24" style="background-color: #edeff4">
    <!-- Header Mobile -->
    <HeaderMobile />

    <!-- Content -->
    <div class="px-4 space-y-4 -mt-6">
      <!-- Botão Nova Cobrança -->
      <button
        class="w-full bg-gray-800 hover:bg-gray-900 text-white py-3 rounded-full font-medium text-sm flex items-center justify-center gap-2 shadow-md"
      >
        <span>Nova cobrança</span>
        <Plus :size="18" />
      </button>

      <!-- Estatísticas -->
      <MobileStatsCard />

      <!-- Cards de Faturamento -->
      <MobileRevenueCards />

      <!-- Alerta de Transferência -->
      <MobileTransferAlert />

      <!-- Grid de Métricas -->
      <MobileMetricsGrid />

      <!-- Círculos de Conversão -->
      <MobileConversionCircles />

      <!-- Bandeiras de Cartão -->
      <MobileCardBrands />
    </div>

    <!-- Bottom Navigation -->
    <BottomNavigation />
  </div>
</template>
