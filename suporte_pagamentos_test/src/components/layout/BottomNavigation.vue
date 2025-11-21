<script setup>
import { Grid, FileText, Home, CreditCard, MoreHorizontal } from 'lucide-vue-next'
</script>

<template>
  <nav class="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 px-4 py-3 md:hidden">
    <div class="flex items-center justify-between max-w-md mx-auto">
      <button class="flex flex-col items-center gap-1 text-gray-400">
        <Grid :size="24" />
        <span class="text-xs">Início</span>
      </button>
      <button class="flex flex-col items-center gap-1 text-gray-400">
        <FileText :size="24" />
        <span class="text-xs">Cobranças</span>
      </button>
      <button class="flex flex-col items-center gap-1 text-blue-600 -mt-8">
        <div class="w-14 h-14 bg-blue-600 rounded-full flex items-center justify-center shadow-lg">
          <Home :size="28" class="text-white" />
        </div>
      </button>
      <button class="flex flex-col items-center gap-1 text-gray-400">
        <CreditCard :size="24" />
        <span class="text-xs">Carteira</span>
      </button>
      <button class="flex flex-col items-center gap-1 text-gray-400">
        <MoreHorizontal :size="24" />
        <span class="text-xs">Mais</span>
      </button>
    </div>
  </nav>
</template>
