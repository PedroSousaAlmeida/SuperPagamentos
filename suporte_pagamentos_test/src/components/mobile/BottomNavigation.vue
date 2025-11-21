<script setup>
import { Plus } from "lucide-vue-next";
import { IconCalc, IconMoney, IconWalletMobile, IconMenuMobile } from "../icons";

const navItems = [
  { icon: IconCalc, label: "Simule", active: false },
  { icon: IconMoney, label: "Cobranças", active: false },
  { icon: Plus, label: "Novo", active: true, center: true },
  { icon: IconWalletMobile, label: "Carteira", active: false },
  { icon: IconMenuMobile, label: "Menu", active: false },
];
</script>

<template>
  <div
    class="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 px-6 pt-3 pb-safe"
  >
    <div class="flex items-center justify-between">
      <button
        v-for="(item, index) in navItems"
        :key="index"
        class="flex flex-col items-center gap-1 transition-colors"
        :class="{
          'relative -mt-8': item.center,
        }"
      >
        <div
          v-if="item.center"
          class="w-14 h-14 bg-blue-600 rounded-full flex items-center justify-center text-white shadow-lg"
        >
          <component :is="item.icon" :size="24" />
        </div>
        <div
          v-else
          class="w-6 h-6 flex items-center justify-center"
          :class="item.active ? 'text-blue-600' : 'text-gray-400'"
        >
          <component :is="item.icon" :size="24" />
        </div>
        <span
          v-if="!item.center"
          class="text-[10px]"
          :class="item.active ? 'text-blue-600' : 'text-gray-500'"
        >
          {{ item.label }}
        </span>
      </button>
    </div>
  </div>
</template>
