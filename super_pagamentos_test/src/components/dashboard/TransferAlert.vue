<script setup>
import { Upload } from "lucide-vue-next";
import { IconWalletWhiteBold } from "../icons";
</script>

<template>
  <div
    class="bg-white rounded-full p-6 shadow-sm mb-6 flex items-center justify-between"
  >
    <div class="flex items-center gap-4">
      <div
        class="w-12 h-12 bg-[#E6E3DC] rounded-full flex items-center justify-center relative"
      >
        <Upload :size="24" class="text-gray-600" />
        <div
          class="absolute -bottom-1 -right-1 w-5 h-5 bg-orange-500 rounded-full flex items-center justify-center text-white text-xs"
        >
          !
        </div>
      </div>
      <div>
        <div class="font-medium mb-1">
          Solicitação de transferência pendente
        </div>
        <div class="text-sm text-gray-500">
          A transação no valor de R$ 29.119,13 está aguardando a sua aprovação.
        </div>
      </div>
    </div>
    <button
      class="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-full font-medium flex items-center gap-2"
    >
      Autorizar transferência
      <IconWalletWhiteBold />
    </button>
  </div>
</template>
