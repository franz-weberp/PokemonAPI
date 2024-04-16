import { defineNuxtConfig } from 'nuxt/config'
import { fileURLToPath } from "url"

export default defineNuxtConfig({
  devtools: { enabled: true },
  alias: {
    "@": fileURLToPath(new URL("./", import.meta.url)),
    "@utils": fileURLToPath(new URL("./utils", import.meta.url)),
    "@interfaces": fileURLToPath(new URL("./utils/interfaces", import.meta.url)),
    "@pages": fileURLToPath(new URL("./pages", import.meta.url)),
    "@components": fileURLToPath(new URL("./components", import.meta.url)),
    "@layouts": fileURLToPath(new URL("./layouts", import.meta.url)),
    "@store": fileURLToPath(new URL("./store", import.meta.url)),
    "@composables": fileURLToPath(new URL("./composables", import.meta.url)),
  },
  app: {
    head: {
      htmlAttrs: {
        lang: 'pt-br',
      },
      title: 'Pokémon API',
      meta: [
        { charset: 'utf-8' },
        {
          name: 'viewport',
          content: 'width=device-width, initial-scale=1',
        },
        {
          name: 'author',
          content: 'Franz Weber Pimentel',
        },
        {
          name: 'description',
          content: 'Website for show Pokémons develop by Franz Weber Pimentel',
        }
      ],
      link: [
        { rel: 'dns-prefetch', href: 'https://fonts.googleapis.com' },
        { rel: 'dns-prefetch', href: 'https://fonts.gstatic.com' }
      ],
    }
  },
  css: ['~/assets/main.css'],
  modules: [
    '@nuxtjs/tailwindcss',
    '@pinia/nuxt',
    ['@nuxtjs/google-fonts', {
      preconnect: true, 
      prefetch: true,
      preload: true,
      families: {
        'Quicksand': [700],
        'Mulish': [400, 600, 700],
      },
      display: 'swap'
    }]
  ]
})