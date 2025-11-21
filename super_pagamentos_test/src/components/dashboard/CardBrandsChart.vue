<script setup>
import { HelpCircle } from "lucide-vue-next";
import {
  IconAmex,
  IconApplePay,
  IconElo,
  IconGooglePay,
  IconHiper,
  IconHipercard,
  IconMastercard,
  IconSamsungPay,
  IconVisa,
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
  { name: "Hiper", value: 55, icon: IconHiper },
];
</script>

<template>
  <div class="bg-white rounded-xl p-6 shadow-sm">
    <div class="flex items-center gap-2 mb-4">
      <h3 class="font-bold">Bandeiras mais utilizadas</h3>
      <HelpCircle :size="16" class="text-gray-400" />
    </div>

    <div class="p-4 border border-gray-200 rounded-xl">
      <!-- Gráfico de barras customizado -->
      <div class="flex items-end justify-between gap-2 h-32 mb-4">
        <div
          v-for="brand in cardBrands"
          :key="brand.name"
          class="w-2 bg-[#0641FC] rounded-full transition-all hover:opacity-80"
          :style="{ height: brand.value + '%' }"
        ></div>
      </div>

      <!-- Legendas com ícones -->
      <div class="flex justify-between gap-1 pt-3 border-t border-gray-200">
        <div
          v-for="brand in cardBrands"
          :key="brand.name"
          class="flex-1 flex items-center justify-center"
        >
          <component :is="brand.icon" class="w-5 h-auto max-w-full" />
        </div>
      </div>
    </div>
  </div>
</template>
