# IRC Store

Este projeto é um e-commerce de periféricos games, desenvolvido utilizando React, Next.js, NextAuth.js com login via Google, TypeScript, Prisma, PostgreSQL e Tailwind CSS. A aplicação oferece funcionalidades completas de uma loja online, incluindo login, visualização de produtos, criação de carrinho de compras, e cálculos detalhados de valores. A aplicação é totalmente responsiva, proporcionando uma experiência de usuário otimizada em dispositivos móveis e desktops.

## Descrição

IRC Store é um e-commerce de periféricos para jogos, projetado para oferecer uma experiência de compra completa e intuitiva. Os usuários podem se autenticar via Google, visualizar todos os periféricos disponíveis, conferir promoções, criar e gerenciar carrinhos de compras, e filtrar produtos por categoria. A aplicação é totalmente responsiva, garantindo uma navegação fluida em qualquer dispositivo.

## Tecnologias Utilizadas

- [React](https://reactjs.org/)
- [Next.js](https://nextjs.org/)
- [NextAuth.js](https://next-auth.js.org/) (com login via Google)
- [TypeScript](https://www.typescriptlang.org/)
- [Prisma](https://www.prisma.io/)
- [PostgreSQL](https://www.postgresql.org/)
- [Tailwind CSS](https://tailwindcss.com/)

## Funcionalidades

- Login via Google
- Visualização de todos os periféricos
- Visualização de periféricos em promoção
- Criação e gerenciamento de carrinho de compras
- Filtro de produtos por categoria
- Cálculo detalhado de valores, incluindo:
  - Valor total dos itens no carrinho
  - Subtotais com e sem descontos aplicados
  - Quantidade total de itens
- Responsividade para dispositivos móveis e desktops

## Deploy

A aplicação está disponível em: [IRC Store](https://irc-store.vercel.app/)

## Instalação e Uso

1. Clone o repositório:
    ```bash
    git clone https://github.com/isaquerchaves/IRC-Store.git
    cd IRC-Store
    ```

2. Instale as dependências:
    ```bash
    npm install
    ```

3. Configure as variáveis de ambiente no arquivo `.env`:
    ```env
    DATABASE_URL=your_database_url
    NEXTAUTH_URL=your_nextauth_url
    GOOGLE_CLIENT_ID=your_google_client_id
    GOOGLE_CLIENT_SECRET=your_google_client_secret
    ```

4. Execute as migrações do Prisma:
    ```bash
    npx prisma migrate dev
    ```

5. Inicie o servidor de desenvolvimento:
    ```bash
    npm run dev
    ```

6. Abra [http://localhost:3000](http://localhost:3000) no seu navegador para ver a aplicação em execução.
