import { useRuntimeConfig } from '#app'
import { createClient } from 'contentful'

const createContentfulClient = () => {
  const $config = useRuntimeConfig()
  return createClient({
    space: $config.space,
    accessToken: $config.accessToken,
  })
}

export default createContentfulClient
