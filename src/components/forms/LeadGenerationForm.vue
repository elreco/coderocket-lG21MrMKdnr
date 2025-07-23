<template>
  <form @submit.prevent="submitForm" class="space-y-6">
    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div>
        <label for="fullName" class="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
        <Input id="fullName" v-model="form.fullName" required />
      </div>
      <div>
        <label for="companyName" class="block text-sm font-medium text-gray-700 mb-1">Company Name</label>
        <Input id="companyName" v-model="form.companyName" required />
      </div>
      <div>
        <label for="email" class="block text-sm font-medium text-gray-700 mb-1">Email</label>
        <Input id="email" type="email" v-model="form.email" required />
      </div>
      <div>
        <label for="phone" class="block text-sm font-medium text-gray-700 mb-1">Phone</label>
        <Input id="phone" type="tel" v-model="form.phone" required />
      </div>
    </div>
    
    <div>
      <label for="message" class="block text-sm font-medium text-gray-700 mb-1">Message</label>
      <Textarea 
        id="message" 
        v-model="form.message" 
        placeholder="Tell us about your project or requirements"
        rows="4" 
        required
      />
    </div>
    
    <div class="flex items-center">
      <Checkbox id="consent" v-model:checked="form.consent" required />
      <label for="consent" class="ml-2 text-sm text-gray-600">
        I consent to XYZDEFG processing my data to contact me about my request.
      </label>
    </div>
    
    <Button type="submit" class="w-full">Request a Free Consultation</Button>
  </form>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Checkbox } from '@/components/ui/checkbox';

const form = ref({
  fullName: '',
  companyName: '',
  email: '',
  phone: '',
  message: '',
  consent: false
});

const submitForm = () => {
  console.log('Lead generation form submitted:', form.value);
  // Here you would typically send the form data to your backend
  
  // Reset form after submission
  form.value = {
    fullName: '',
    companyName: '',
    email: '',
    phone: '',
    message: '',
    consent: false
  };
  
  alert('Thank you for your interest! Our team will contact you shortly.');
};
</script>