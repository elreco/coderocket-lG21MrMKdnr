<template>
  <div class="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
    <div class="max-w-md w-full space-y-8">
      <div class="text-center">
        <router-link to="/" class="inline-block">
          <span class="text-3xl font-bold text-primary">XYZDEFG</span>
        </router-link>
        <h2 class="mt-6 text-3xl font-bold text-gray-900">Sign in to your account</h2>
        <p class="mt-2 text-sm text-gray-600">
          Or
          <a href="#" class="font-medium text-primary hover:text-primary/80">
            start your 14-day free trial
          </a>
        </p>
      </div>
      
      <form class="mt-8 space-y-6" @submit.prevent="handleLogin">
        <div class="rounded-md shadow-sm space-y-4">
          <div>
            <label for="email-address" class="block text-sm font-medium text-gray-700 mb-1">
              Email address
            </label>
            <Input
              id="email-address"
              name="email"
              type="email"
              autocomplete="email"
              required
              v-model="email"
              placeholder="Enter your email"
            />
          </div>
          <div>
            <div class="flex items-center justify-between mb-1">
              <label for="password" class="block text-sm font-medium text-gray-700">
                Password
              </label>
              <a href="#" class="text-sm font-medium text-primary hover:text-primary/80">
                Forgot your password?
              </a>
            </div>
            <Input
              id="password"
              name="password"
              type="password"
              autocomplete="current-password"
              required
              v-model="password"
              placeholder="Enter your password"
            />
          </div>
        </div>

        <div class="flex items-center">
          <Checkbox id="remember-me" v-model:checked="rememberMe" />
          <label for="remember-me" class="ml-2 block text-sm text-gray-900">
            Remember me
          </label>
        </div>

        <div>
          <Button type="submit" class="w-full">
            Sign in
          </Button>
        </div>
      </form>
      
      <div class="mt-6">
        <div class="relative">
          <div class="absolute inset-0 flex items-center">
            <div class="w-full border-t border-gray-300"></div>
          </div>
          <div class="relative flex justify-center text-sm">
            <span class="px-2 bg-gray-50 text-gray-500">
              Or continue with
            </span>
          </div>
        </div>

        <div class="mt-6 grid grid-cols-3 gap-3">
          <Button variant="outline" class="w-full">
            <GithubIcon class="h-5 w-5" />
            <span class="sr-only">GitHub</span>
          </Button>
          <Button variant="outline" class="w-full">
            <TwitterIcon class="h-5 w-5 text-[#1DA1F2]" />
            <span class="sr-only">Twitter</span>
          </Button>
          <Button variant="outline" class="w-full">
            <LinkedinIcon class="h-5 w-5 text-[#0A66C2]" />
            <span class="sr-only">LinkedIn</span>
          </Button>
        </div>
      </div>
      
      <p class="mt-8 text-center text-sm text-gray-600">
        Not a member?
        <a href="#" class="font-medium text-primary hover:text-primary/80">
          Sign up now
        </a>
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Checkbox } from '@/components/ui/checkbox';
import { GithubIcon, TwitterIcon, LinkedinIcon } from 'lucide-vue-next';

const email = ref('');
const password = ref('');
const rememberMe = ref(false);

const handleLogin = () => {
  console.log('Login attempt with:', {
    email: email.value,
    password: password.value,
    rememberMe: rememberMe.value
  });
  
  // Here you would typically handle authentication
  // For demo purposes, we'll just log the values
  alert('Login functionality would be implemented here in a real application.');
};
</script>