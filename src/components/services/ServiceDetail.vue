<template>
  <div class="flex flex-col" :class="{ 'md:flex-row-reverse': reverse, 'md:flex-row': !reverse }">
    <div class="md:w-1/2 mb-8 md:mb-0" :class="reverse ? 'md:pl-12' : 'md:pr-12'">
      <img :src="image" :alt="title" class="rounded-lg shadow-xl w-full h-auto" />
    </div>
    <div class="md:w-1/2 flex flex-col justify-center">
      <div class="flex items-center mb-4">
        <div class="flex items-center justify-center w-12 h-12 bg-primary/10 rounded-lg mr-4">
          <component :is="resolvedIcon" class="h-6 w-6 text-primary" />
        </div>
        <h2 class="text-3xl font-bold text-gray-900">{{ title }}</h2>
      </div>
      
      <p class="text-lg text-gray-600 mb-6">{{ description }}</p>
      
      <ul class="space-y-3">
        <li v-for="(feature, index) in features" :key="index" class="flex items-start">
          <CheckIcon class="h-5 w-5 text-green-500 mr-3 mt-0.5" />
          <span class="text-gray-700">{{ feature }}</span>
        </li>
      </ul>
      
      <div class="mt-8">
        <Button>Learn More</Button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { Button } from '@/components/ui/button';
import { 
  BrainIcon, 
  SmartphoneIcon, 
  LightbulbIcon,
  LayoutIcon,
  CheckIcon
} from 'lucide-vue-next';

const props = defineProps<{
  title: string;
  description: string;
  features: string[];
  image: string;
  icon: string;
  reverse?: boolean;
}>();

const resolvedIcon = computed(() => {
  const iconMap = {
    'Brain': BrainIcon,
    'Smartphone': SmartphoneIcon,
    'Lightbulb': LightbulbIcon,
    'Workflow': LayoutIcon
  };
  
  return iconMap[props.icon as keyof typeof iconMap] || LightbulbIcon;
});
</script>