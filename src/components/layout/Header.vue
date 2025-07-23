<template>
  <header class="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100 shadow-sm">
    <div class="container mx-auto px-4 py-4 flex justify-between items-center">
      <router-link to="/" class="flex items-center space-x-2">
        <span class="text-2xl font-bold text-primary">XYZDEFG</span>
      </router-link>
      
      <!-- Desktop Navigation -->
      <div class="hidden md:flex items-center">
        <nav class="flex space-x-8 mr-6">
          <router-link 
            v-for="item in navItems" 
            :key="item.path" 
            :to="item.path"
            class="text-gray-600 hover:text-primary font-medium transition-colors"
            :class="{ 'text-primary': isActive(item.path) }"
          >
            {{ item.name }}
          </router-link>
        </nav>
        
        <Button variant="outline" size="sm" class="mr-2">
          <UserIcon class="h-4 w-4 mr-2" />
          Login
        </Button>
      </div>
      
      <!-- Mobile Navigation Toggle -->
      <Button 
        variant="ghost" 
        size="icon" 
        class="md:hidden"
        @click="isMenuOpen = !isMenuOpen"
      >
        <Menu v-if="!isMenuOpen" class="h-6 w-6" />
        <X v-else class="h-6 w-6" />
      </Button>
    </div>
    
    <!-- Mobile Navigation Menu -->
    <div 
      v-if="isMenuOpen" 
      class="md:hidden absolute top-full left-0 right-0 bg-white border-b border-gray-100 shadow-md"
    >
      <div class="container mx-auto px-4 py-4">
        <div class="flex flex-col space-y-4">
          <router-link 
            v-for="item in navItems" 
            :key="item.path" 
            :to="item.path"
            class="text-gray-600 hover:text-primary font-medium py-2 transition-colors"
            :class="{ 'text-primary': isActive(item.path) }"
            @click="isMenuOpen = false"
          >
            {{ item.name }}
          </router-link>
          
          <Button variant="outline" class="w-full mt-4">
            <UserIcon class="h-4 w-4 mr-2" />
            Login
          </Button>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import { useRoute } from 'vue-router';
import { Button } from '@/components/ui/button';
import { Menu, X, UserIcon } from 'lucide-vue-next';

const route = useRoute();
const isMenuOpen = ref(false);

const navItems = [
  { name: 'Home', path: '/' },
  { name: 'About Us', path: '/about' },
  { name: 'Services', path: '/services' },
  { name: 'Case Studies', path: '/case-studies' },
  { name: 'Insights', path: '/insights' },
  { name: 'Contact', path: '/contact' }
];

const isActive = (path: string) => {
  if (path === '/') {
    return route.path === '/';
  }
  return route.path.startsWith(path);
};
</script>