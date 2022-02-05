import { defineNuxtConfig } from '@nuxt/bridge'
import 'dotenv/config'

// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({
  srcDir: 'app/',
  css: ['~/assets/main.css'],
  serverMiddleware: [
    { path: '/api/hello', handler: '~/server/api/hello.ts'},
  ],
  buildModules: ['@spearly/nuxt-module', '@nuxtjs/svg'],
  spearly: {
    options: {
      apiKey: process.env.SPEARLY_API_KEY
    },
    mode: 'all'
  },
  publicRuntimeConfig: {
    spearlyApiKey: process.env.SPEARLY_API_KEY,
    spearlyContentId: process.env.SPEARLY_CONTENT_ID
  }
})
