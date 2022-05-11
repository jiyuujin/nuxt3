import { useRuntimeConfig } from '#app'

export default () => {
  const $config = useRuntimeConfig()
  return {
    MICROCMS_BASIC_ENDPOINT: $config.microcmsApiEndpoint,
    MICROCMS_DOMAIN_ENDPOINT: `${$config.microcmsApiEndpoint}domains`
  }
}
