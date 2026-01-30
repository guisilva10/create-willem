# 🚀 Create Willem - Next.js Starter Kit

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

> **Importante:** Preencha a `DATABASE_URL` e as segredos do `Next-Auth` no `.env`.

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
├── components/   # Componentes React reutilizáveis (UI & Layout)
├── features/     # Componentes e lógica agrupados por domínio (Auth, etc)
├── providers/    # Context Providers (QueryClient, Theme, etc)
├── services/     # Clientes de serviços externos (Prisma, Auth)
├── types/        # Definições globais de TypeScript
└── lib/          # Utilitários e configurações
prisma/           # Schema do banco de dados e migrations
```

---

## � Scripts Disponíveis

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
| `SESSION_COOKIE_NAME` | Token de autenticação do usúario.                      |   

---

Desenvolvido com ☕ e 💻 por **Willem** 🚀
