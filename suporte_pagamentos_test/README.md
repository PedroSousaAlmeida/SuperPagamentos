# Suporte de Pagamentos - Teste Técnico

Sistema de suporte para gerenciamento de pagamentos desenvolvido com Vue.js 3 + Vite.

## Stack Tecnológica

- **Vue.js 3** - Framework JavaScript progressivo
- **Vite** - Build tool e dev server
- **TailwindCSS** - Framework CSS utility-first
- **Axios** - Cliente HTTP
- **json-server** - API REST mockada

## Estrutura do Projeto

```
src/
├── components/      # Componentes Vue reutilizáveis
├── services/        # Services para consumir API
│   ├── api.js              # Configuração do Axios
│   ├── ticketService.js    # Serviço de tickets
│   ├── pagamentoService.js # Serviço de pagamentos
│   ├── usuarioService.js   # Serviço de usuários
│   └── comentarioService.js # Serviço de comentários
├── composables/     # Composables Vue (lógica reutilizável)
└── App.vue          # Componente raiz
```

## API Mockada (db.json)

A API mockada possui os seguintes recursos:

- **GET/POST/PUT/DELETE** `/tickets` - Tickets de suporte
- **GET/POST/PUT** `/pagamentos` - Pagamentos
- **GET/POST/PUT** `/usuarios` - Usuários
- **GET/POST/DELETE** `/comentarios` - Comentários dos tickets

### Endpoints disponíveis:

```bash
# Tickets
GET    http://localhost:3000/tickets
GET    http://localhost:3000/tickets/:id
POST   http://localhost:3000/tickets
PUT    http://localhost:3000/tickets/:id
DELETE http://localhost:3000/tickets/:id

# Filtros
GET http://localhost:3000/tickets?status=aberto
GET http://localhost:3000/pagamentos?usuarioId=1
GET http://localhost:3000/comentarios?ticketId=1
```

## Scripts Disponíveis

```bash
# Instalar dependências
pnpm install

# Rodar projeto (Vite + json-server simultaneamente)
pnpm dev

# Rodar apenas o Vite
pnpm dev:vite

# Rodar apenas o json-server
pnpm dev:api

# Build para produção
pnpm build

# Preview do build
pnpm preview
```

## Como usar os Services

```javascript
import { ticketService } from './services/ticketService'
import { pagamentoService } from './services/pagamentoService'

// Buscar todos os tickets
const tickets = await ticketService.getAll()

// Buscar ticket por ID
const ticket = await ticketService.getById(1)

// Criar novo ticket
const novoTicket = await ticketService.create({
  titulo: 'Novo ticket',
  descricao: 'Descrição do problema',
  status: 'aberto',
  prioridade: 'alta',
  categoria: 'pagamento',
  usuarioId: 1
})

// Buscar pagamentos por status
const pagamentosPendentes = await pagamentoService.getByStatus('pendente')
```

## Desenvolvimento

1. Clone o repositório
2. Entre na pasta: `cd suporte_pagamentos_test`
3. Instale as dependências: `pnpm install`
4. Rode o projeto: `pnpm dev`
5. Acesse: http://localhost:5173

A API mockada estará rodando em: http://localhost:3000

## Próximos Passos

- Criar componentes de UI conforme design do Figma
- Implementar páginas e navegação
- Adicionar validação de formulários
- Implementar feedback visual (toast/notifications)
- Adicionar loading states
- Criar testes
