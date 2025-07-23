<template>
  <div class="bg-white rounded-lg shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl">
    <div class="relative">
      <img :src="image" :alt="title" class="w-full h-48 object-cover" />
      <div class="absolute top-4 left-4">
        <span class="inline-block bg-white/90 backdrop-blur-sm text-primary text-xs font-medium px-3 py-1 rounded-full">
          {{ category }}
        </span>
      </div>
    </div>
    <div class="p-6">
      <h3 class="text-xl font-bold text-gray-900 mb-2">{{ title }}</h3>
      <p class="text-gray-600 mb-4">{{ excerpt }}</p>
      
      <div class="flex items-center justify-between">
        <div class="flex items-center">
          <img :src="author.avatar" :alt="author.name" class="w-8 h-8 rounded-full mr-2" />
          <span class="text-sm text-gray-500">{{ author.name }}</span>
        </div>
        <span class="text-sm text-gray-500">{{ date }}</span>
      </div>
      
      <router-link :to="link || '#'" class="mt-4 inline-flex items-center text-primary font-medium">
        Read More
        <ArrowRightIcon class="ml-2 h-4 w-4" />
      </router-link>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ArrowRightIcon } from 'lucide-vue-next';

defineProps<{
  title: string;
  excerpt: string;
  image: string;
  category: string;
  date: string;
  author: {
    name: string;
    avatar: string;
  };
  link?: string;
}>();
</script>