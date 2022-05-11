import { defineNuxtConfig } from '@nuxt/bridge'
import 'dotenv/config'

// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({
  srcDir: 'app/',
  css: ['~/assets/main.css'],
  serverMiddleware: [
    { path: '/api/hello', handler: '~/server/api/hello.ts'},
  ],
  buildModules: ['@nuxtjs/svg'],
  publicRuntimeConfig: {
    space: process.env.CTF_SPACE_ID,
    accessToken: process.env.CTF_CDA_ACCESS_TOKEN,
  }
})
