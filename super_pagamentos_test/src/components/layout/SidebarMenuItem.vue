<script setup>
import { ChevronDown } from "lucide-vue-next";

defineProps({
  icon: String,
  label: String,
  active: {
    type: Boolean,
    default: false,
  },
  hasSubmenu: {
    type: Boolean,
    default: false,
  },
});
</script>

<template>
  <a
    href="#"
    class="flex items-center gap-1.5 px-2 py-1 text-gray-700 rounded-lg hover:bg-gray-50 text-sm"
    :class="{ 'justify-between': hasSubmenu }"
  >
    <div class="flex items-center gap-1.5">
      <div
        class="p-2 rounded-full transition-colors"
        :class="active ? 'bg-blue-100' : 'bg-gray-200'"
      >
        <component
          v-if="icon"
          :is="icon"
          :size="16"
          :class="active ? 'text-blue-600' : 'text-gray-700'"
        />
        <slot v-else name="icon" :active="active" />
      </div>
      <span class="font-medium">{{ label }}</span>
    </div>
    <ChevronDown v-if="hasSubmenu" :size="14" class="text-gray-400" />
  </a>
</template>
