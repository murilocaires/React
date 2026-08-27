# ![Banner](./banner.png)

# Sistema de Solicitações de Reembolso – Frontend + API

> **Nota:** A API foi fornecida pela Rocketseat.


---

## Índice

- [Sobre o Projeto](#sobre-o-projeto)
- [Principais Funcionalidades](#principais-funcionalidades)
- [Stack Técnica](#stack-técnica)
- [Como Rodar o Projeto](#como-rodar-o-projeto)
  - [Executando a API (Backend)](#executando-a-api-backend)
  - [Executando o Frontend](#executando-o-frontend)
- [Estrutura do Repositório](#estrutura-do-repositório)
- [Autenticação e Consumo da API](#autenticação-e-consumo-da-api)
- [Próximas Melhorias](#próximas-melhorias)
- [Contato / Licença](#contato--licença)

---

## Sobre o Projeto

Este repositório demonstra um **sistema web completo** para criação e consulta de solicitações de reembolso.

- **Frontend:** SPA em **React + Vite + TypeScript**.
- **Backend:** API **Node.js + TypeScript** pronta da Rocketseat.
- **Objetivo:** Ilustrar boas práticas de autenticação, upload de arquivos, validação e organização de código.

---

## Principais Funcionalidades

- Cadastro e login de usuários com JWT.
- Criação de solicitações de reembolso com:
  - Nome
  - Categoria
  - Valor
  - Upload de comprovante (PDF, JPG, PNG).
- Upload de arquivos via `FormData`.
- Listagem paginada e busca por nome.
- Visualização detalhada da solicitação e abertura do comprovante em nova aba.
- Validação de formulários no frontend e backend usando **Zod**.

---

## Stack Técnica

### Frontend
- **React 19**
- **TypeScript**
- **Vite**
- **Tailwind CSS**
- **Axios**
- **Zod**

### Backend (Rocketseat)
- **Node.js**
- **TypeScript**
- **Express**
- **Prisma** (ORM)
- **Zod** (validação)
- **JWT** (autenticação)

---

## Como Rodar o Projeto

### Pré‑requisitos
- Node.js (>= 18 recomendado)
- npm ou yarn
- Banco de dados suportado pelo Prisma (SQLite ou PostgreSQL)

### Executando a API (Backend)
```bash
# 1. Acesse a pasta da API
cd api

# 2. Instale as dependências
npm install

# 3. Configure o banco de dados (ex.: SQLite)
npx prisma migrate dev --name init

# 4. Inicie a API
npm run dev
```
A API ficará disponível em `http://localhost:3333`.

### Executando o Frontend
```bash
# 1. Acesse a pasta do frontend
cd web

# 2. Instale as dependências
npm install

# 3. Inicie o servidor de desenvolvimento
npm run dev
```
O frontend será servido em `http://localhost:5173`.

---

## Estrutura do Repositório
```
.
├─ api/                # Código da API (Rocketseat)
├─ web/                # Código do frontend React
├─ banner.png          # Banner do README
├─ README.md           # Este documento
└─ ...
```

---

## Autenticação e Consumo da API

O fluxo de autenticação utiliza **JWT**:
1. Usuário faz login enviando email e senha para `POST /sessions`.
2. A API responde com um token JWT.
3. O token deve ser armazenado (ex.: localStorage) e incluído no cabeçalho `Authorization: Bearer <token>` nas requisições protegidas.

No frontend, o **Axios** está configurado com um interceptor que anexa automaticamente o token a todas as chamadas.

---

## Próximas Melhorias

- Tests unitários e de integração (Jest + React Testing Library).
- Implementação de refresh token.
- Melhorias de UI/UX (dark mode, animações).
- Deploy automático com CI/CD (GitHub Actions).

---

## Contato / Licença

Projeto desenvolvido por [Seu Nome] – inspirado no conteúdo da **Rocketseat**.

MIT License – veja o arquivo `LICENSE` para mais detalhes.
