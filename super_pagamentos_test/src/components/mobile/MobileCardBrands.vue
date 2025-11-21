<script setup>
import {
  IconVisa,
  IconMastercard,
  IconElo,
  IconAmex,
  IconHipercard,
  IconGooglePay,
  IconApplePay,
  IconSamsungPay,
} from "../icons";

const cardBrands = [
  { name: "VISA", value: 80, icon: IconVisa },
  { name: "Mastercard", value: 95, icon: IconMastercard },
  { name: "ELO", value: 60, icon: IconElo },
  { name: "Amex", value: 45, icon: IconAmex },
  { name: "Hipercard", value: 35, icon: IconHipercard },
  { name: "Google Pay", value: 70, icon: IconGooglePay },
  { name: "Samsung Pay", value: 50, icon: IconSamsungPay },
  { name: "Apple Pay", value: 90, icon: IconApplePay },
];
</script>

<template>
  <div class="bg-white rounded-2xl p-4 shadow-sm">
    <h3 class="font-bold text-sm mb-4">Conversão por modalidade</h3>

    <!-- Gráfico de barras customizado -->
    <div class="flex items-end justify-between gap-1 h-24 mb-3">
      <div
        v-for="brand in cardBrands"
        :key="brand.name"
        class="w-1.5 bg-[#0641FC] rounded-full transition-all hover:opacity-80"
        :style="{ height: brand.value + '%' }"
      ></div>
    </div>

    <!-- Legendas com ícones -->
    <div class="flex justify-between gap-1 pt-2 border-t border-gray-200">
      <div
        v-for="brand in cardBrands"
        :key="brand.name"
        class="flex-1 flex items-center justify-center"
      >
        <component :is="brand.icon" class="w-4 h-auto max-w-full" />
      </div>
    </div>
  </div>
</template>
