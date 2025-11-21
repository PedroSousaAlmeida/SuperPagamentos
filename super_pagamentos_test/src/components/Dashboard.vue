<script setup>
import Sidebar from "./layout/Sidebar.vue";
import Header from "./layout/Header.vue";
import HeaderMobile from "./layout/HeaderMobile.vue";
import BottomNavigation from "./layout/BottomNavigation.vue";
import FloatingHelp from "./layout/FloatingHelp.vue";
import Filters from "./dashboard/Filters.vue";
import RevenueChart from "./dashboard/RevenueChart.vue";
import TransferAlert from "./dashboard/TransferAlert.vue";
import StatsCard from "./dashboard/StatsCard.vue";
import PaymentMethodsChart from "./dashboard/PaymentMethodsChart.vue";
import CardBrandsChart from "./dashboard/CardBrandsChart.vue";
</script>

<template>
  <div class="flex h-screen" style="background-color: #edeff4">
    <!-- Sidebar - Hidden on mobile -->
    <Sidebar class="hidden md:flex" />

    <!-- Main Content -->
    <div class="flex-1 overflow-auto pb-20 md:pb-0">
      <!-- Header Desktop - Hidden on mobile -->
      <Header class="hidden md:block" />

      <!-- Header Mobile - Hidden on desktop -->
      <div class="md:hidden">
        <HeaderMobile />
      </div>

      <!-- Content -->
      <div class="px-8 md:px-28 py-4 md:py-8">
        <!-- Filters - Hidden on mobile -->
        <div class="hidden md:block">
          <Filters />
        </div>

        <!-- Nova Cobrança Button - Mobile only -->
        <button
          class="md:hidden w-full flex items-center justify-center gap-2 bg-gray-800 text-white px-4 py-3 rounded-xl font-medium mb-6"
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
          >
            <line x1="12" y1="5" x2="12" y2="19" />
            <line x1="5" y1="12" x2="19" y2="12" />
          </svg>
          Nova cobrança
        </button>

        <!-- Revenue Chart -->
        <RevenueChart />

        <!-- Transfer Alert -->
        <TransferAlert />

        <!-- Stats Grid - Responsive -->
        <div class="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-6">
          <StatsCard
            title="Reembolsos"
            value="R$ 8.260,10"
            count="233 cobranças"
            percentage="4,5%"
          />
          <StatsCard
            title="Chargebacks"
            value="R$ 1.260,10"
            count="5 cobranças"
            percentage="0,3%"
            :hasAlert="true"
          />
          <StatsCard
            title="Cancelados"
            value="R$ 3.120,60"
            count="32 cobranças"
            percentage="1,5%"
          />
          <StatsCard
            title="Não autorizado"
            value="R$ 6.120,60"
            count="122 cobranças"
            percentage="3,1%"
          />
        </div>

        <!-- Bottom Charts - Responsive -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <PaymentMethodsChart />
          <CardBrandsChart />
        </div>
      </div>
    </div>

    <!-- Floating Help Button - Desktop only -->
    <FloatingHelp class="hidden md:flex" />

    <!-- Bottom Navigation - Mobile only -->
    <BottomNavigation />
  </div>
</template>
