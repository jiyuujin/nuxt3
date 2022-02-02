import { defineNuxtConfig } from 'nuxt3'

// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({
  srcDir: 'app/',
  serverMiddleware: [
    { path: '/api/hello', handler: '~/server/api/hello.ts'},
  ]
})
