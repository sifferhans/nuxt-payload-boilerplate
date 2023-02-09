<script setup lang="ts">
import { Posts } from '@/types'
const config = useRuntimeConfig()

const posts = await useFetchWithCache<Posts>(
  `${config.public.cmsUrl}/api/posts`
)
</script>

<template>
  <h1>Nuxt + Payload</h1>
  <ul>
    <li v-for="post in posts?.docs" :key="post.id">
      <strong>{{ post.title }}</strong>
    </li>
  </ul>
</template>
