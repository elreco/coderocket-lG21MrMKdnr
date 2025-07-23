<template>
  <footer class="bg-gray-50 border-t border-gray-100">
    <div class="container mx-auto px-4 py-12">
      <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
        <div class="md:col-span-1">
          <div class="flex items-center space-x-2 mb-4">
            <span class="text-xl font-bold text-primary">XYZDEFG</span>
          </div>
          <p class="text-gray-600 mb-4">
            Empowering businesses with AI and advanced engineering solutions that drive innovation and growth.
          </p>
          <div class="flex space-x-4">
            <a href="#" class="text-gray-400 hover:text-primary transition-colors">
              <LinkedinIcon class="h-5 w-5" />
            </a>
            <a href="#" class="text-gray-400 hover:text-primary transition-colors">
              <TwitterIcon class="h-5 w-5" />
            </a>
            <a href="#" class="text-gray-400 hover:text-primary transition-colors">
              <GithubIcon class="h-5 w-5" />
            </a>
          </div>
        </div>
        
        <div>
          <h3 class="text-sm font-semibold text-gray-900 uppercase mb-4">Quick Links</h3>
          <ul class="space-y-2">
            <li v-for="item in navItems" :key="item.path">
              <router-link :to="item.path" class="text-gray-600 hover:text-primary transition-colors">
                {{ item.name }}
              </router-link>
            </li>
          </ul>
        </div>
        
        <div>
          <h3 class="text-sm font-semibold text-gray-900 uppercase mb-4">Services</h3>
          <ul class="space-y-2">
            <li v-for="service in services" :key="service">
              <router-link to="/services" class="text-gray-600 hover:text-primary transition-colors">
                {{ service }}
              </router-link>
            </li>
          </ul>
        </div>
        
        <div>
          <h3 class="text-sm font-semibold text-gray-900 uppercase mb-4">Contact</h3>
          <ul class="space-y-2">
            <li class="flex items-start">
              <MailIcon class="h-5 w-5 text-gray-400 mr-2 mt-0.5" />
              <span class="text-gray-600">info@xyzdefg.com</span>
            </li>
            <li class="flex items-start">
              <MapPinIcon class="h-5 w-5 text-gray-400 mr-2 mt-0.5" />
              <span class="text-gray-600">123 Tech Avenue, Innovation District, CA 94103</span>
            </li>
            <li class="flex items-start">
              <PhoneIcon class="h-5 w-5 text-gray-400 mr-2 mt-0.5" />
              <span class="text-gray-600">+1 (555) 123-4567</span>
            </li>
          </ul>
        </div>
      </div>
      
      <div class="border-t border-gray-200 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
        <p class="text-gray-500 text-sm">
          &copy; {{ new Date().getFullYear() }} XYZDEFG. All rights reserved.
        </p>
        <div class="flex space-x-6 mt-4 md:mt-0">
          <a href="#" class="text-gray-500 hover:text-primary text-sm transition-colors">Privacy Policy</a>
          <a href="#" class="text-gray-500 hover:text-primary text-sm transition-colors">Terms of Service</a>
          <a href="#" class="text-gray-500 hover:text-primary text-sm transition-colors">Cookie Policy</a>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { LinkedinIcon, TwitterIcon, GithubIcon, MailIcon, MapPinIcon, PhoneIcon } from 'lucide-vue-next';

const navItems = [
  { name: 'Home', path: '/' },
  { name: 'About Us', path: '/about' },
  { name: 'Services', path: '/services' },
  { name: 'Case Studies', path: '/case-studies' },
  { name: 'Insights', path: '/insights' },
  { name: 'Contact', path: '/contact' }
];

const services = [
  'Custom AI Solutions',
  'Enterprise & Mobile App Development',
  'AI-Powered Workflow Automation',
  'AI Integration & Consulting'
];
</script>