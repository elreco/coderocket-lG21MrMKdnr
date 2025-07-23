<template>
  <div class="bg-white rounded-lg shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl">
    <div class="relative">
      <img :src="image" :alt="title" class="w-full h-48 object-cover" />
      <div class="absolute top-4 left-4">
        <span class="inline-block bg-white/90 backdrop-blur-sm text-primary text-xs font-medium px-3 py-1 rounded-full">
          {{ category }}
        </span>
      </div>
      <div v-if="industry" class="absolute top-4 right-4">
        <span class="inline-block bg-primary/90 backdrop-blur-sm text-white text-xs font-medium px-3 py-1 rounded-full">
          {{ industry }}
        </span>
      </div>
    </div>
    <div class="p-6">
      <h3 class="text-xl font-bold text-gray-900 mb-2">{{ title }}</h3>
      <p class="text-gray-600 mb-4">{{ description }}</p>
      <router-link :to="link || '#'" class="inline-flex items-center text-primary font-medium">
        Read Case Study
        <ArrowRightIcon class="ml-2 h-4 w-4" />
      </router-link>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ArrowRightIcon } from 'lucide-vue-next';

defineProps<{
  title: string;
  description: string;
  image: string;
  category: string;
  industry?: string;
  link?: string;
}>();
</script>