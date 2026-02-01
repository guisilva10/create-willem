# 🚀 Create Willem - Next.js Starter Kit

<div align="center">

**[English](#-english) | [Português](#-português)**

</div>

---

# 🇺🇸 English

A high-performance, opinionated boilerplate for Full Stack applications, designed to accelerate development with the most modern tools in the JavaScript ecosystem.

---

## 🛠 Tech Stack

The core of this project uses the most robust technologies of 2025:

- **Framework:** [Next.js 15+](https://nextjs.org/) (App Router)
- **Styling:** [Tailwind CSS v4](https://tailwindcss.com/) & [Shadcn UI](https://ui.shadcn.com/)
- **ORM:** [Prisma](https://www.prisma.io/)
- **Authentication:** [Next-Auth.js v5](https://authjs.dev/)
- **Data Fetching:** [TanStack Query v5](https://tanstack.com/query/latest)
- **Animations:** [Lucide Icons](https://lucide.dev/) & [Framer Motion](https://www.framer.com/motion/)
- **Quality:** Prettier, ESLint & TypeScript

---

## 🏁 Getting Started

Follow the steps below to set up your local environment.

### 1. Clone and Install

```bash
# Install dependencies using pnpm
pnpm install
```

### 2. Configure Environment Variables

Create a `.env` file in the project root:

```bash
cp .env.example .env
```

> **Important:** Fill in the `DATABASE_URL` and `Next-Auth` secrets in the `.env` file.

### 3. Sync Database

```bash
# Generate Prisma Client and sync the schema
pnpm prisma generate
pnpm prisma db push
```

### 4. Run Development Server

```bash
pnpm dev
```

Access: [http://localhost:3000](http://localhost:3000)

---

## 📁 Folder Structure

```plaintext
src/
├── app/          # Routes, layouts and pages (App Router)
├── _components/  # Reusable React components (UI & Layout)
├── _hooks/       # Custom hooks 
├── features/     # Components and logic grouped by domain (Auth, etc)
├── providers/    # Context Providers (QueryClient, Theme, etc)
├── services/     # External service clients (Prisma, Auth)
├── types/        # Global TypeScript definitions
└── _lib/         # Utilities and configurations
prisma/           # Database schema and migrations
```

---

## 📜 Available Scripts

| Command              | Description                                  |
| :------------------- | :------------------------------------------- |
| `pnpm dev`           | Starts the development server.               |
| `pnpm build`         | Builds the application for production.       |
| `pnpm start`         | Starts the server in production mode.        |
| `pnpm lint`          | Runs ESLint verification.                    |
| `pnpm prisma:studio` | Visual panel to edit the database.           |

---

## 🔐 Essential Variables

| Variable              | Description                                             |
| :-------------------- | :------------------------------------------------------ |
| `DATABASE_URL`        | Connection string to your database (Postgres/MySQL/etc).|
| `AUTH_SECRET`         | Random string for token security (NextAuth).            |
| `NEXT_PUBLIC_APP_URL` | Base URL of the application for redirects.              |
| `SESSION_COOKIE_NAME` | User authentication token.                              |

---

# 🇧🇷 Português

Um boilerplate opinativo e de alta performance para aplicações Full Stack, projetado para acelerar o desenvolvimento com as ferramentas mais modernas do ecossistema JavaScript.

---

## 🛠 Tech Stack

O coração deste projeto utiliza as tecnologias mais robustas de 2025:

- **Framework:** [Next.js 15+](https://nextjs.org/) (App Router)
- **Estilização:** [Tailwind CSS v4](https://tailwindcss.com/) & [Shadcn UI](https://ui.shadcn.com/)
- **ORM:** [Prisma](https://www.prisma.io/)
- **Autenticação:** [Next-Auth.js v5](https://authjs.dev/)
- **Data Fetching:** [TanStack Query v5](https://tanstack.com/query/latest)
- **Animações:** [Lucide Icons](https://lucide.dev/) & [Framer Motion](https://www.framer.com/motion/)
- **Qualidade:** Prettier, ESLint & TypeScript

---

## 🏁 Começando

Siga os passos abaixo para configurar seu ambiente local.

### 1. Clonar e Instalar

```bash
# Instale as dependências usando pnpm
pnpm install
```

### 2. Configurar Variáveis de Ambiente

Crie um arquivo `.env` na raiz do projeto:

```bash
cp .env.example .env
```

> **Importante:** Preencha a `DATABASE_URL` e os segredos do `Next-Auth` no `.env`.

### 3. Sincronizar Banco de Dados

```bash
# Gera o Prisma Client e sincroniza o schema
pnpm prisma generate
pnpm prisma db push
```

### 4. Rodar o Desenvolvimento

```bash
pnpm dev
```

Acesse: [http://localhost:3000](http://localhost:3000)

---

## 📁 Estrutura de Pastas

```plaintext
src/
├── app/          # Rotas, layouts e páginas (App Router)
├── _components/  # Componentes React reutilizáveis (UI & Layout)
├── _hooks/       # Hooks personalizados 
├── features/     # Componentes e lógica agrupados por domínio (Auth, etc)
├── providers/    # Context Providers (QueryClient, Theme, etc)
├── services/     # Clientes de serviços externos (Prisma, Auth)
├── types/        # Definições globais de TypeScript
└── _lib/         # Utilitários e configurações
prisma/           # Schema do banco de dados e migrations
```

---

## 📜 Scripts Disponíveis

| Comando              | Descrição                                   |
| :------------------- | :------------------------------------------ |
| `pnpm dev`           | Inicia o servidor de desenvolvimento.       |
| `pnpm build`         | Compila a aplicação para produção.          |
| `pnpm start`         | Inicia o servidor em modo de produção.      |
| `pnpm lint`          | Executa a verificação do ESLint.            |
| `pnpm prisma:studio` | Painel visual para editar o banco de dados. |

---

## 🔐 Variáveis Essenciais

| Variável              | Descrição                                              |
| :-------------------- | :----------------------------------------------------- |
| `DATABASE_URL`        | String de conexão com seu banco (Postgres/MySQL/etc).  |
| `AUTH_SECRET`         | String aleatória para segurança dos tokens (NextAuth). |
| `NEXT_PUBLIC_APP_URL` | URL base da aplicação para redirecionamentos.          |
| `SESSION_COOKIE_NAME` | Token de autenticação do usuário.                      |

---

<div align="center">

Developed with ☕ and 💻 by **Willem** 🚀

</div>
