<script setup>
import { Plus, Calendar, Download, ChevronDown } from "lucide-vue-next";
import { IconBlueCalendar, IconCreditCard, IconPlus } from "../icons";
</script>

<template>
  <div class="flex items-center gap-4 mb-6">
    <button
      class="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-3xl font-medium hover:bg-blue-700"
    >
      Nova cobrança
      <IconPlus></IconPlus>
    </button>

    <div class="w-px h-6 bg-gray-300"></div>

    <button
      class="flex items-center gap-2 border border-gray-300 bg-white px-4 py-2 rounded-3xl hover:bg-gray-50"
    >
      <IconBlueCalendar></IconBlueCalendar>
      <span>Período: Específico</span>
      <ChevronDown :size="16" class="text-gray-400" />
    </button>

    <div
      class="flex items-center border border-gray-300 bg-white rounded-3xl hover:bg-gray-50"
    >
      <button class="flex items-center gap-2 px-4 py-2">
        <Calendar :size="18" class="text-gray-600" />
        <span>10-06-2020</span>
        <ChevronDown :size="16" class="text-gray-400" />
      </button>
      <div class="w-px h-6 bg-gray-300"></div>
      <button class="flex items-center gap-2 px-4 py-2">
        <span>30-01-2025</span>
        <ChevronDown :size="16" class="text-gray-400" />
      </button>
    </div>

    <button
      class="flex items-center gap-2 border border-gray-300 bg-white px-4 py-2 rounded-3xl hover:bg-gray-50 ml-auto"
    >
      <IconCreditCard></IconCreditCard>
      <span>Tipo de cobrança</span>
      <ChevronDown :size="16" class="text-gray-400" />
    </button>

    <button
      class="p-2 border border-gray-300 bg-white rounded-3xl hover:bg-gray-50"
    >
      <Download :size="18" class="text-gray-600" />
    </button>
  </div>
</template>
