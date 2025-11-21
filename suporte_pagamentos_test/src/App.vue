<script setup>
import { useBreakpoint } from './composables/useBreakpoint';
import Dashboard from './components/Dashboard.vue';
import DashboardMobile from './components/DashboardMobile.vue';

const { isMobile } = useBreakpoint();
</script>

<template>
  <DashboardMobile v-if="isMobile" />
  <Dashboard v-else />
</template>
