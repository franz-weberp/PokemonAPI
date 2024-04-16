# PokemonAPI

O projeto “PokemonAPI” é uma aplicação web desenvolvida como um desafio pela Coodesh. Ele utiliza a PokeAPI (https://pokeapi.co/) para buscar e exibir informações sobre Pokémons e exibir informacoes.

> **Live Demo:** https://temp-link.netlify.app/

> This is a challenge by [Coodesh](https://coodesh.com/)

## As funcionalidades são:

- :white_check_mark: Busca por nome ou ID do Pokémon (por barra de pesquisa ou diretamente na URL: `pokemon/{id ou nome}`)
- :white_check_mark: Exibição dos Pokémons em cards, conforme documentação da API (https://pokeapi.co/)
- :white_check_mark: Paginação tipo scroll infinito para listar o resultado da pesquisa dos Pokémons.
- :white_check_mark: Adoção de boas práticas recomendadas de desenvolvimento Vue, como separação de componentes, reutilização de código e código limpo.
- :white_check_mark: Uso do framework de testes Cypress para testes automatizados de componentes e integração da aplicação.

## Tarefas:

**Obrigatorio**

- :white_check_mark: Tela de listagem de Pokémons, sendo 24 registros por página com paginação em Scroll (Infinita).
- :white_check_mark: Pesquisa de um Pokémon específico por ID ou Nome.
- :white_check_mark: Exibição do detalhe de um Pokémon ao clicar em um card, mostrando os seus efeitos. (Deve ser redirecionado para uma página nova, sendo possível também pesquisar um Pokémon específico via parâmetro na URL)
- :white_check_mark: Responsividade para visualização em dispositivos móveis.
- :white_check_mark: Aplicação de Clean Code no projeto.

**Diferenciais**

- :white_check_mark: Utilização de Nuxt 3 com diferentes estratégias de renderização (static, ssr etc)
- :white_check_mark: Utilização de Tailwindcss
- :white_check_mark: Em caso de uso do Vue 3, utilização de Typescript.
- :white_check_mark: Utilização do Pinia para gerenciamento de estado.
- :white_check_mark: Utilização do Tanstack Query.

## Como instalar

Após baixar ou clonar o projeto, basta digitar o seguinte comando no terminal:

```sh
npm install && npm run dev
```

Comandos adicionais:

```sh
npm run generate && npm run build
```

## Tech Stack

O que foi utilizado para desenvolver o projeto:

```sh
"@pinia/nuxt": "^0.5.1",
"@tanstack/vue-query": "^5.29.0",
"graphql-request": "^6.1.0",
"nuxt": "^3.11.2",
"pinia": "^2.1.7"
"@nuxtjs/google-fonts": "^3.2.0",
"@nuxtjs/tailwindcss": "^6.11.4",
"vue": "^3.4.21",
"vue-router": "^4.3.0"
```

## Preview

![preview](https://github.com/franz-weberp/coodesh-pokemon/blob/main/public/desktop.png)
