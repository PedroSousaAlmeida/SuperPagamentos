<script setup>
import { ArrowUp, ChevronRight } from "lucide-vue-next";
</script>

<template>
  <div class="bg-white rounded-2xl p-4 shadow-sm">
    <div class="flex items-start gap-3 mb-3">
      <div class="relative">
        <div
          class="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center"
        >
          <ArrowUp :size="20" class="text-gray-600" />
        </div>
        <div
          class="absolute -bottom-1 -right-1 w-5 h-5 bg-orange-500 rounded-full flex items-center justify-center text-white text-xs font-bold"
        >
          !
        </div>
      </div>
      <div class="flex-1">
        <div class="font-semibold text-sm mb-1">
          Solicitação de transferência pendente
        </div>
        <div class="text-xs text-gray-500">
          A transação no valor de R$ 29.119,13 está aguardando a sua aprovação.
        </div>
      </div>
    </div>
    <button
      class="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-xl font-medium text-sm flex items-center justify-center gap-2"
    >
      <span>Autorizar transferência</span>
      <ChevronRight :size="18" />
    </button>
  </div>
</template>
