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
    spaceUid: process.env.NEWT_SPACE_UID,
    appUid: process.env.NEWT_APP_UID,
    accessToken: process.env.NEWT_ACCESS_TOKEN,
    apiType: 'cdn',
    postModelUid: 'post',
    pageLimit: 10,
  }
})
