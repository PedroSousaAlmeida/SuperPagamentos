# 💳 Suporte Pagamentos - Dashboard de Gestão

Sistema completo de gestão e suporte de pagamentos desenvolvido com Vue.js 3, apresentando um dashboard interativo com visualizações avançadas e design totalmente responsivo (Desktop + Mobile).

## 📋 Visão Geral

**Suporte Pagamentos** é uma aplicação web moderna para monitoramento e gestão de transações financeiras, oferecendo:

- 📊 Dashboard com gráficos interativos e métricas em tempo real
- 📱 Interface mobile dedicada com componentes otimizados
- 🎨 Sistema de ícones personalizado com 30+ ícones SVG
- 💳 Análise de bandeiras de cartão (Visa, Mastercard, Elo, etc.)
- 📈 Visualizações com ApexCharts (barras, radiais, progressos)
- 🔄 Troca automática entre versões Desktop/Mobile

## 🚀 Stack Tecnológica

### Core

- **Vue.js 3** (v3.5.24) - Framework JavaScript com Composition API
- **Vite** (v7.2.4) - Build tool e dev server ultrarrápido
- **Axios** (v1.13.2) - Cliente HTTP para API
- **json-server** (v1.0.0-beta.3) - API REST mockada

### UI & Estilização

- **TailwindCSS** (v3.4.18) - Framework CSS utility-first
- **PostCSS** + **Autoprefixer** - Processamento CSS
- **Plus Jakarta Sans** - Fonte customizada (Google Fonts)

### Gráficos & Visualizações

- **ApexCharts** (v5.3.6) - Biblioteca avançada de gráficos
- **vue3-apexcharts** (v1.10.0) - Integração Vue 3

### Ícones & Assets

- **Lucide Vue Next** (v0.554.0) - Biblioteca de ícones moderna
- **vite-svg-loader** (v5.1.0) - Importar SVGs como componentes Vue

### Dev Tools

- **concurrently** (v9.2.1) - Executar múltiplos comandos simultaneamente

## 📁 Estrutura do Projeto

```
suporte_pagamentos_test/
├── src/
│   ├── main.js                    # Entry point da aplicação
│   ├── App.vue                    # Componente raiz (responsive switcher)
│   ├── style.css                  # Estilos globais + Tailwind
│   │
│   ├── assets/
│   │   └── icons/                 # 30+ ícones SVG personalizados
│   │       ├── House.svg, Person.svg, Money.svg, Wallet.svg
│   │       ├── Logo.svg, IconMobileLogo.svg
│   │       ├── visa-color.svg, mastercard-color.svg
│   │       └── ... (bandeiras de cartão e UI icons)
│   │
│   ├── components/
│   │   ├── Dashboard.vue          # Layout Desktop
│   │   ├── DashboardMobile.vue    # Layout Mobile
│   │   │
│   │   ├── layout/                # Componentes de Layout
│   │   │   ├── Header.vue         # Header desktop
│   │   │   ├── HeaderMobile.vue   # Header mobile com gradiente
│   │   │   ├── Sidebar.vue        # Menu lateral (w-48, reduzido)
│   │   │   ├── SidebarMenuItem.vue # Item de menu reutilizável
│   │   │   └── FloatingHelp.vue   # Botão flutuante de ajuda
│   │   │
│   │   ├── dashboard/             # Componentes Desktop
│   │   │   ├── Filters.vue        # Filtros de período
│   │   │   ├── RevenueChart.vue   # Gráfico de faturamento (barras)
│   │   │   ├── StatsCard.vue      # Card de estatísticas
│   │   │   ├── PaymentMethodsChart.vue  # Conversão por modalidade (radial)
│   │   │   ├── CardBrandsChart.vue      # Bandeiras de cartão (barras)
│   │   │   └── TransferAlert.vue  # Alerta de transferência
│   │   │
│   │   ├── mobile/                # Componentes Mobile
│   │   │   ├── MobileStatsCard.vue      # Card de estatísticas
│   │   │   ├── MobileRevenueCards.vue   # Cards de faturamento
│   │   │   ├── MobileTransferAlert.vue  # Alerta mobile
│   │   │   ├── MobileMetricsGrid.vue    # Grid de métricas 2x2
│   │   │   ├── MobileConversionCircles.vue  # Círculos de progresso
│   │   │   ├── MobileCardBrands.vue     # Bandeiras mobile
│   │   │   └── BottomNavigation.vue     # Navegação inferior
│   │   │
│   │   └── icons/
│   │       └── index.js           # Exportação centralizada de ícones
│   │
│   ├── services/                  # Camada de Serviços API
│   │   ├── api.js                 # Configuração Axios
│   │   ├── ticketService.js       # CRUD de tickets
│   │   ├── pagamentoService.js    # Operações de pagamento
│   │   ├── usuarioService.js      # Gestão de usuários
│   │   └── comentarioService.js   # Comentários de tickets
│   │
│   └── composables/
│       └── useBreakpoint.js       # Hook responsivo (mobile detection)
│
├── db.json                        # Database mockada (json-server)
├── vite.config.js                 # Configuração Vite + SVG loader
├── tailwind.config.js             # Configuração Tailwind
├── postcss.config.js              # Plugins PostCSS
├── package.json                   # Dependências e scripts
└── index.html                     # HTML entry point
```

## ✨ Funcionalidades Principais

### 🖥️ Dashboard Desktop

**Layout & Navegação:**

- Sidebar compacta (192px) com menu hierárquico
- Header com título, ícones de ação e perfil
- Bottom navigation com 5 ações principais
- Botão flutuante de ajuda

**Métricas Financeiras:**

- Gráfico de barras com faturamento diário (31 dias)
- 5 cards de métricas:
  - Faturamento recebido
  - Faturamento Previsto (com badge D+2)
  - Vendas Pendentes
  - Ticket Médio
  - Número de Cobrança

**Cards de Estatísticas (Grid 2x2):**

- Reembolsos (com contador e %)
- Chargebacks (com alerta laranja)
- Cancelados
- Não autorizado

**Análises & Visualizações:**

- **Conversão por Modalidade** - 4 gráficos radiais:
  - Crédito (92%)
  - Débito (95%)
  - Boleto (42%)
  - Pix (98%)
- **Bandeiras de Cartão** - Gráfico de barras customizado:
  - 9 bandeiras: Visa, Mastercard, ELO, Amex, Hipercard, Hiper, Apple Pay, Google Pay, Samsung Pay

**Outras Funcionalidades:**

- Filtros de período e data
- Alerta de transferência pendente com botão de ação
- Botão "Nova Cobrança"

### 📱 Dashboard Mobile

**Design Responsivo:**

- Componentes dedicados para mobile (<768px)
- Layout otimizado para touch
- Troca automática desktop/mobile

**Componentes Mobile:**

- Header com gradiente azul e seletor de empresa
- Card de estatísticas com gráfico inline
- Grid 2 colunas de faturamento
- Alerta de transferência simplificado
- Grid 2x2 de métricas com mini gráficos
- 4 círculos de progresso (modalidades)
- Gráfico de bandeiras simplificado

**Bottom Navigation:**

- 5 itens: Simule, Cobranças, Novo (centro), Carteira, Menu
- Botão central destacado (floating action)
- Ícones customizados

### 🎨 Sistema de Ícones Personalizado

**Categorias de Ícones:**

1. **Navegação:** House, Person, Money, Wallet, Fire, Download, Bag, Code, Config, Perfil
2. **Branding:** Logo, IconMobileLogo, Super, Cards_bkg
3. **Pagamentos:** CreditCard, CreditCardWhite, Plus, BlueCalendar, Calc, WalletWhiteBold
4. **Mobile:** IconSino, WalletMobile, MenuMobile, DetailsCardsBall
5. **Bandeiras:** Visa, Mastercard, ELO, Amex, Hipercard, Hiper, ApplePay, GooglePay, SamsungPay (9 logos)

**Integração:**

- SVGs importados como componentes Vue via `vite-svg-loader`
- Exportação centralizada em `components/icons/index.js`
- Renderização dinâmica: `<component :is="IconName" />`

### 🔄 Sistema Responsivo

**Composable `useBreakpoint()`:**

```javascript
import { useBreakpoint } from "./composables/useBreakpoint";

const { isMobile } = useBreakpoint();
// isMobile = true se width < 768px
```

**App.vue - Troca Automática:**

```vue
<DashboardMobile v-if="isMobile" />
<Dashboard v-else />
```

**Breakpoint:** 768px (padrão `md:` do Tailwind)

- `< 768px` → DashboardMobile
- `≥ 768px` → Dashboard

## 🛠️ Scripts Disponíveis

```bash
# Instalar dependências
pnpm install

# Rodar projeto (Vite + json-server simultaneamente)
pnpm dev

# Rodar apenas o Vite dev server
pnpm dev:vite

# Rodar apenas o json-server
pnpm dev:api

# Build para produção
pnpm build

# Preview do build de produção
pnpm preview
```

## 🌐 API Mockada (db.json)

⚠️ **Nota Importante:** A API está configurada e funcional via json-server, mas o dashboard atualmente utiliza dados mockados/estáticos diretamente nos componentes. A integração completa com os services está planejada para implementação futura.

A API mockada com json-server possui os seguintes recursos:

### Endpoints Disponíveis

```bash
# Tickets de Suporte
GET    http://localhost:3000/tickets
GET    http://localhost:3000/tickets/:id
POST   http://localhost:3000/tickets
PUT    http://localhost:3000/tickets/:id
DELETE http://localhost:3000/tickets/:id

# Pagamentos
GET    http://localhost:3000/pagamentos
GET    http://localhost:3000/pagamentos/:id
POST   http://localhost:3000/pagamentos
PUT    http://localhost:3000/pagamentos/:id

# Usuários
GET    http://localhost:3000/usuarios
GET    http://localhost:3000/usuarios/:id
POST   http://localhost:3000/usuarios

# Comentários
GET    http://localhost:3000/comentarios
POST   http://localhost:3000/comentarios
DELETE http://localhost:3000/comentarios/:id

# Filtros
GET http://localhost:3000/tickets?status=aberto
GET http://localhost:3000/pagamentos?usuarioId=1
GET http://localhost:3000/comentarios?ticketId=1
```

## 💻 Desenvolvimento

### Setup Inicial

```bash
# 1. Clone o repositório
git clone <repo-url>

# 2. Entre na pasta
cd suporte_pagamentos_test

# 3. Instale as dependências
pnpm install

# 4. Rode o projeto
pnpm dev

# 5. Acesse no navegador
```

**URLs:**

- Frontend: http://localhost:5173
- Mock API: http://localhost:3000

### Usando os Services

```javascript
import { ticketService } from "./services/ticketService";
import { pagamentoService } from "./services/pagamentoService";

// Buscar todos os tickets
const tickets = await ticketService.getAll();

// Buscar ticket por ID
const ticket = await ticketService.getById(1);

// Criar novo ticket
const novoTicket = await ticketService.create({
  titulo: "Novo ticket",
  descricao: "Descrição do problema",
  status: "aberto",
  prioridade: "alta",
  categoria: "pagamento",
  usuarioId: 1,
});

// Buscar tickets por status
const ticketsAbertos = await ticketService.getByStatus("aberto");

// Buscar pagamentos por usuário
const pagamentosUsuario = await pagamentoService.getByUsuario(1);
```

## 📄 Licença

Este projeto foi desenvolvido como teste técnico e está disponível para uso educacional.

---
