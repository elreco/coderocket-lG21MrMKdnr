<template>
  <div>
    <!-- Hero Section -->
    <section class="bg-gradient-to-r from-gray-50 to-gray-100 py-20">
      <div class="container mx-auto px-4 text-center">
        <h1 class="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Contact Us</h1>
        <p class="text-xl text-gray-600 max-w-3xl mx-auto">
          Have a question or ready to start your project? Get in touch with our team.
        </p>
      </div>
    </section>

    <!-- Contact Information & Form -->
    <section class="py-20">
      <div class="container mx-auto px-4">
        <div class="flex flex-col lg:flex-row gap-12">
          <!-- Contact Information -->
          <div class="lg:w-1/3">
            <h2 class="text-2xl font-bold text-gray-900 mb-6">Get in Touch</h2>
            
            <div class="space-y-6">
              <div class="flex items-start">
                <MailIcon class="h-6 w-6 text-primary mr-4 mt-1" />
                <div>
                  <h3 class="text-lg font-medium text-gray-900 mb-1">Email</h3>
                  <p class="text-gray-600">info@xyzdefg.com</p>
                  <p class="text-gray-600">support@xyzdefg.com</p>
                </div>
              </div>
              
              <div class="flex items-start">
                <PhoneIcon class="h-6 w-6 text-primary mr-4 mt-1" />
                <div>
                  <h3 class="text-lg font-medium text-gray-900 mb-1">Phone</h3>
                  <p class="text-gray-600">+1 (555) 123-4567</p>
                  <p class="text-gray-600">+1 (555) 987-6543</p>
                </div>
              </div>
              
              <div class="flex items-start">
                <MapPinIcon class="h-6 w-6 text-primary mr-4 mt-1" />
                <div>
                  <h3 class="text-lg font-medium text-gray-900 mb-1">Location</h3>
                  <p class="text-gray-600">
                    123 Tech Avenue<br>
                    Innovation District<br>
                    San Francisco, CA 94103
                  </p>
                </div>
              </div>
              
              <div class="flex items-start">
                <ClockIcon class="h-6 w-6 text-primary mr-4 mt-1" />
                <div>
                  <h3 class="text-lg font-medium text-gray-900 mb-1">Business Hours</h3>
                  <p class="text-gray-600">
                    Monday - Friday: 9:00 AM - 6:00 PM<br>
                    Saturday - Sunday: Closed
                  </p>
                </div>
              </div>
            </div>
            
            <div class="mt-8">
              <h3 class="text-lg font-medium text-gray-900 mb-4">Follow Us</h3>
              <div class="flex space-x-4">
                <a href="#" class="text-gray-400 hover:text-primary transition-colors">
                  <LinkedinIcon class="h-6 w-6" />
                </a>
                <a href="#" class="text-gray-400 hover:text-primary transition-colors">
                  <TwitterIcon class="h-6 w-6" />
                </a>
                <a href="#" class="text-gray-400 hover:text-primary transition-colors">
                  <FacebookIcon class="h-6 w-6" />
                </a>
                <a href="#" class="text-gray-400 hover:text-primary transition-colors">
                  <InstagramIcon class="h-6 w-6" />
                </a>
              </div>
            </div>
          </div>
          
          <!-- Contact Form -->
          <div class="lg:w-2/3">
            <div class="bg-white rounded-lg shadow-lg p-8">
              <h2 class="text-2xl font-bold text-gray-900 mb-6">Send Us a Message</h2>
              
              <form @submit.prevent="submitForm">
                <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label for="firstName" class="block text-sm font-medium text-gray-700 mb-1">First Name</label>
                    <Input id="firstName" v-model="form.firstName" required />
                  </div>
                  <div>
                    <label for="lastName" class="block text-sm font-medium text-gray-700 mb-1">Last Name</label>
                    <Input id="lastName" v-model="form.lastName" required />
                  </div>
                  <div>
                    <label for="email" class="block text-sm font-medium text-gray-700 mb-1">Email</label>
                    <Input id="email" type="email" v-model="form.email" required />
                  </div>
                  <div>
                    <label for="phone" class="block text-sm font-medium text-gray-700 mb-1">Phone</label>
                    <Input id="phone" type="tel" v-model="form.phone" />
                  </div>
                  <div class="md:col-span-2">
                    <label for="company" class="block text-sm font-medium text-gray-700 mb-1">Company</label>
                    <Input id="company" v-model="form.company" />
                  </div>
                  <div class="md:col-span-2">
                    <label for="subject" class="block text-sm font-medium text-gray-700 mb-1">Subject</label>
                    <Input id="subject" v-model="form.subject" required />
                  </div>
                  <div class="md:col-span-2">
                    <label for="message" class="block text-sm font-medium text-gray-700 mb-1">Message</label>
                    <Textarea 
                      id="message" 
                      v-model="form.message" 
                      rows="5" 
                      required
                    />
                  </div>
                </div>
                
                <div class="flex items-center mb-6">
                  <Checkbox id="privacy" v-model:checked="form.privacyPolicy" />
                  <label for="privacy" class="ml-2 text-sm text-gray-600">
                    I agree to the <a href="#" class="text-primary hover:underline">Privacy Policy</a> and consent to being contacted regarding my inquiry.
                  </label>
                </div>
                
                <Button type="submit" size="lg" class="w-full md:w-auto">Send Message</Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Map Section -->
    <section class="py-10">
      <div class="container mx-auto px-4">
        <div class="bg-gray-200 rounded-lg overflow-hidden h-96">
          <!-- Placeholder for map -->
          <div class="w-full h-full flex items-center justify-center">
            <p class="text-gray-600">Interactive Map Would Be Displayed Here</p>
          </div>
        </div>
      </div>
    </section>

    <!-- FAQ Section -->
    <section class="py-20 bg-gray-50">
      <div class="container mx-auto px-4">
        <div class="text-center mb-12">
          <h2 class="text-3xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
          <p class="text-xl text-gray-600 max-w-3xl mx-auto">
            Find answers to common questions about our services and process.
          </p>
        </div>
        
        <div class="max-w-3xl mx-auto">
          <Accordion type="single" collapsible>
            <AccordionItem v-for="(faq, index) in faqs" :key="index" :value="`item-${index}`">
              <AccordionTrigger>{{ faq.question }}</AccordionTrigger>
              <AccordionContent>{{ faq.answer }}</AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Checkbox } from '@/components/ui/checkbox';
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from '@/components/ui/accordion';
import { 
  MailIcon, 
  PhoneIcon, 
  MapPinIcon, 
  ClockIcon,
  LinkedinIcon,
  TwitterIcon,
  FacebookIcon,
  InstagramIcon
} from 'lucide-vue-next';

const form = ref({
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  company: '',
  subject: '',
  message: '',
  privacyPolicy: false
});

const submitForm = () => {
  if (!form.value.privacyPolicy) {
    alert('Please agree to the Privacy Policy before submitting.');
    return;
  }
  
  console.log('Form submitted:', form.value);
  // Here you would typically send the form data to your backend
  
  // Reset form after submission
  form.value = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    company: '',
    subject: '',
    message: '',
    privacyPolicy: false
  };
  
  alert('Thank you for your message! We will get back to you soon.');
};

const faqs = [
  {
    question: 'What types of businesses do you work with?',
    answer: 'We work with businesses of all sizes across various industries, including healthcare, finance, retail, manufacturing, and more. Our solutions are tailored to meet the specific needs of each client, regardless of their size or sector.'
  },
  {
    question: 'How long does a typical project take to complete?',
    answer: 'Project timelines vary depending on the scope and complexity of the work. A simple application might take 2-3 months, while more complex enterprise solutions can take 6 months or longer. During our initial consultation, we\'ll provide you with a detailed timeline based on your specific requirements.'
  },
  {
    question: 'Do you offer ongoing support after project completion?',
    answer: 'Yes, we offer various support and maintenance packages to ensure your solution continues to perform optimally after launch. These can include regular updates, performance monitoring, security patches, and technical support.'
  },
  {
    question: 'How do you handle data security and privacy?',
    answer: 'We take data security and privacy very seriously. We implement industry best practices for secure development, use encryption for sensitive data, and ensure compliance with relevant regulations such as GDPR, HIPAA, or CCPA depending on your industry and location.'
  },
  {
    question: 'What is your pricing model?',
    answer: 'Our pricing depends on the scope and requirements of each project. We typically work on either a fixed-price model for well-defined projects or a time-and-materials model for more complex or evolving projects. We\'re happy to discuss pricing options during our initial consultation.'
  }
];
</script>