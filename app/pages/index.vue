<template>
  <div>
    <div class="title">
      <img src="~/assets/nuxt_logo.svg" alt="Nuxt logo" class="logo" />
      <p class="title_text">{{ `Nuxt 3` }}</p>
    </div>
  </div>
</template>

<script lang="ts">
import { fetchPosts } from '~/api/blog'

export default {
  setup() {
    const posts = ref()
    onMounted(async () => {
      posts.value = await fetchPosts()
      console.log(posts.value)
    })
  }
}
</script>
