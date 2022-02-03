<template>
  <div>
    <div class="title">
      <img src="~/assets/nuxt_logo.svg" alt="Nuxt logo" class="logo" />
      <p class="title_text">{{ `Nuxt 3` }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useAsyncData } from '#app'
import { fetchPosts } from '~/api/blog'

const { data: posts } = await useAsyncData('posts', () => {
  return fetchPosts()
})
console.log(posts)
</script>
