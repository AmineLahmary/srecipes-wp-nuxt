<script setup>
import POSTS from "../queries/Posts.gql";

const { data } = useAsyncQuery(POSTS);

const posts = computed(() => data.value?.posts?.nodes);
</script>
<template>
  <div class="py-20">
    <section class="pb-10">
      <div class="container">
        <div class="max-w-xl">
          <h1 class="text-3xl font-bold underline">
            Simple & Tasty Recipes for Everyone
          </h1>
          <p class="text-stone-500 mt-5">
            Discover simple recipes from a seasoned chef with 30+ years of
            experience. Learn to cook delicious dishes with AI-powered blogs and
            practical cooking tips.
          </p>
        </div>
      </div>
    </section>
    <section>
      <div class="container">
        <h2 class="text-2xl font-bold mb-5">Latest Recipies</h2>
        <ul class="grid sm:grid-cols-2 md:grid-cols-3 gap-5">
          <li
            v-for="post in posts"
            :key="post.id"
            class="p-5 bg-white shadow rounded"
          >
            <NuxtImg
              :src="post.featuredImage.node.sourceUrl"
              class="h-[300px] object-cover"
            />
            <NuxtLink :to="`/recipe/${post.id}`" class="block mt-2">
              {{ post.title.slice(0, 50) }}...
            </NuxtLink>
            <UBadge
              v-for="category in post.categories.nodes"
              :key="category.id"
              :label="category.name"
              size="sm"
              class="mt-2"
            >
              {{ category.name }}
            </UBadge>
          </li>
        </ul>
      </div>
    </section>
  </div>
</template>
