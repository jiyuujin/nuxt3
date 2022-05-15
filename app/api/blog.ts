import { useRuntimeConfig } from '#app'
import createClient from '~/services/newt'

export const PAGE = 1
export const LIMIT = 10
export const SKIP = (PAGE - 1) * LIMIT

export const fetchPosts = () => {
  const $config = useRuntimeConfig()
  const client = createClient()
  return client.getContents({
    appUid: $config.appUid,
    modelUid: $config.postModelUid,
    query: { depth: 2, limit: 10, skip: SKIP }
  })
}
