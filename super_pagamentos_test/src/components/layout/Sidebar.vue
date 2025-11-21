<script setup>
import {
  Grid,
  Settings,
  Users,
  Clock,
  Wallet,
  Briefcase,
  TrendingUp,
  Package,
  Target,
} from "lucide-vue-next";
import SidebarMenuItem from "./SidebarMenuItem.vue";
import {
  IconBag,
  IconCardsBkg,
  IconCode,
  IconConfig,
  IconDownload,
  IconFire,
  IconHouse,
  IconMoney,
  IconPerfil,
  IconPerson,
  IconWallet,
  IconSuper,
  Logo,
} from "../icons";
</script>

<template>
  <div class="w-48 bg-white border-r border-gray-200 flex flex-col text-sm">
    <!-- Logo -->
    <div class="p-3">
      <div class="flex items-center gap-2">
        <Logo />
      </div>
    </div>

    <!-- Menu -->
    <nav class="flex-1 px-2">
      <div class="text-[10px] font-semibold text-gray-400 mb-2 px-2">MENU</div>
      <div class="space-y-0.5">
        <SidebarMenuItem :icon="IconHouse" label="Dashboard" :active="true" />
        <SidebarMenuItem :icon="IconPerson" label="Clientes" />
        <SidebarMenuItem :icon="IconMoney" label="Cobranças" />
        <SidebarMenuItem :icon="IconWallet" label="Carteira" />
        <SidebarMenuItem :icon="IconFire" label="Vendedores" />
        <SidebarMenuItem
          :icon="IconDownload"
          label="Antecipações"
          :hasSubmenu="true"
        />
        <SidebarMenuItem :icon="IconBag" label="Gestão" :hasSubmenu="true" />
        <SidebarMenuItem :icon="IconCode" label="Integrações" />
      </div>

      <div class="text-[10px] font-semibold text-gray-400 mb-2 px-2 mt-4">
        GERAL
      </div>
      <div class="space-y-0.5">
        <SidebarMenuItem :icon="IconConfig" label="Configurações" />
        <SidebarMenuItem :icon="IconPerfil" label="Perfil" />
      </div>
    </nav>

    <!-- Card CTA -->
    <div class="m-2 rounded-xl text-white" style="background-color: #151920">
      <!-- Background Image -->
      <div class="w-full">
        <IconCardsBkg class="w-full h-auto" />
      </div>

      <!-- Content -->
      <div class="p-3">
        <p class="text-xs mb-3 leading-relaxed">
          Solicite agora o seu cartão físico e crie quantos cartões virtuais
          quiser.
        </p>
        <button
          class="w-full bg-blue-600 hover:bg-blue-700 text-white px-3 py-1.5 rounded-lg text-xs font-medium transition-colors"
        >
          Super Cartão Pré-Pago
        </button>
      </div>
    </div>

    <!-- Logout -->
    <div class="p-3 border-t">
      <button
        class="flex items-center gap-2 px-2.5 py-1.5 text-gray-600 hover:bg-gray-50 rounded-3xl w-full border-gray-200 border text-xs"
      >
        <span>Deslogar da conta</span>
        <svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
        >
          <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
          <polyline points="16 17 21 12 16 7" />
          <line x1="21" y1="12" x2="9" y2="12" />
        </svg>
      </button>
    </div>
  </div>
</template>
