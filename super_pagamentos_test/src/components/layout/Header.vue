<script setup>
import { ChevronDown } from "lucide-vue-next";
import { IconSuper, IconSino, IconConfig, IconCalc } from "../icons";
</script>

<template>
  <header class="bg-white border-b border-gray-200 px-8 py-4">
    <div class="flex items-center justify-between">
      <div class="flex items-center gap-2">
        <h1 class="text-xl font-bold">Super central de gestão</h1>
        <IconSuper class="w-5 h-5" />
      </div>
      <div class="flex items-center gap-4">
        <button class="p-2 hover:bg-gray-100 rounded-lg">
          <IconCalc />
        </button>
        <button class="p-2 hover:bg-gray-100 rounded-lg">
          <IconConfig />
        </button>
        <button class="p-2 hover:bg-gray-100 rounded-lg">
          <IconSino />
        </button>
        <div class="flex items-center gap-3 pl-4 border-l border-gray-200">
          <div class="text-right">
            <div class="text-sm font-medium">Empresarial</div>
            <div class="text-xs text-gray-500">Astra Pagamentos</div>
          </div>
          <div
            class="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold"
          >
            AP
          </div>
          <ChevronDown :size="16" class="text-gray-400" />
        </div>
      </div>
    </div>
  </header>
</template>
