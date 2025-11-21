<script setup>
import { ChevronDown } from "lucide-vue-next";
import { IconSino, IconMobileLogo } from "../icons";
</script>

<template>
  <div
    class="bg-gradient-to-br from-blue-600 to-blue-700 text-white p-6 rounded-b-3xl"
  >
    <!-- Top Bar -->
    <div class="flex items-center justify-between mb-6">
      <div
        class="flex items-center gap-2 bg-white text-gray-900 px-3 py-2 rounded-full text-sm"
      >
        <IconMobileLogo />
        <div>
          <div class="font-semibold text-xs">Empresarial</div>
          <div class="text-xs text-gray-500">Astra Pagamentos</div>
        </div>
        <ChevronDown :size="16" class="text-gray-400" />
      </div>
      <button class="p-2">
        <IconSino class="w-5 h-5" />
      </button>
    </div>

    <!-- Faturamento -->
    <div>
      <div class="text-sm mb-2 opacity-90">Faturamento</div>
      <div class="flex items-baseline gap-1 mb-4">
        <span class="text-xs">R$</span>
        <span class="text-3xl font-bold">1.249.651,14</span>
        <button class="ml-2 p-1">
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
          >
            <circle cx="12" cy="12" r="10" />
            <path d="M12 16v-4M12 8h.01" />
          </svg>
        </button>
      </div>
      <button class="flex items-center justify-between w-full text-sm">
        <span>Ir para Carteira</span>
        <svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
        >
          <polyline points="9 18 15 12 9 6" />
        </svg>
      </button>
    </div>
  </div>
</template>
