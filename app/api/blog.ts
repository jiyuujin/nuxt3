export const fetchPosts = () => {
  const $config = useRuntimeConfig()
  return fetch(`https://www.spearly.com/api/v1/content_types/${$config.spearlyContentId}/contents`, {
    headers: {
      Authorization:
        `Authorization: Bearer ${$config.spearlyApiKey}`
    }
  })
}
