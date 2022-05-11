<template>
  <div>
    <div class="title">
      <img src="~/assets/nuxt_logo.svg" alt="Nuxt logo" class="logo" />
      <p class="title_text">{{ `Nuxt 3` }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRuntimeConfig } from '#app'
import { useAsyncData } from '@nuxt/bridge/dist/runtime/asyncData'
import useEndpoints from '~/utils/endpoints.constants'

const { MICROCMS_DOMAIN_ENDPOINT } = useEndpoints()
const $config = useRuntimeConfig()

const { data: domains } = useAsyncData('domains', async () => {
  const res = await fetch(MICROCMS_DOMAIN_ENDPOINT, {
    headers: { 'X-MICROCMS-API-KEY': $config.microcmsApiKey },
  })
  return await res.json()
})
console.log(domains)
</script>
