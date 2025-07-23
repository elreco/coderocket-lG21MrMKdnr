<template>
  <div class="bg-white rounded-lg shadow-lg p-6 transition-all duration-300 hover:shadow-xl">
    <div class="flex items-center justify-center w-12 h-12 bg-primary/10 rounded-lg mb-4">
      <component :is="resolvedIcon" class="h-6 w-6 text-primary" />
    </div>
    <h3 class="text-xl font-bold text-gray-900 mb-2">{{ title }}</h3>
    <p class="text-gray-600">{{ description }}</p>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { 
  BrainIcon, 
  SmartphoneIcon, 
  LightbulbIcon,
  LayoutIcon,
  CodeIcon,
  ServerIcon,
  DatabaseIcon,
  ShieldIcon
} from 'lucide-vue-next';

const props = defineProps<{
  title: string;
  description: string;
  icon: string;
}>();

const resolvedIcon = computed(() => {
  const iconMap = {
    'Brain': BrainIcon,
    'Smartphone': SmartphoneIcon,
    'Lightbulb': LightbulbIcon,
    'Workflow': LayoutIcon,
    'Code': CodeIcon,
    'Server': ServerIcon,
    'Database': DatabaseIcon,
    'Shield': ShieldIcon
  };
  
  return iconMap[props.icon as keyof typeof iconMap] || LightbulbIcon;
});
</script>