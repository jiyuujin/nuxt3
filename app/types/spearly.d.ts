import { SpearlyApiClient } from '@unimal-jp/spearly-js-sdk'

declare module '@nuxt/schema' {
  interface ConfigSchema {
    publicRuntimeConfig?: {
      spearly?: SpearlyApiClient
    }
  }
  interface NuxtConfig {
    spearly?: SpearlyApiClient
  }
  interface NuxtOptions {
    spearly?: SpearlyApiClient
  }
}
