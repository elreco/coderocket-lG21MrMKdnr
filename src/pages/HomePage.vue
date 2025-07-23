<template>
  <div>
    <!-- Hero Section -->
    <section class="bg-gradient-to-r from-gray-50 to-gray-100 py-20">
      <div class="container mx-auto px-4">
        <div class="flex flex-col md:flex-row items-center">
          <div class="md:w-1/2 mb-10 md:mb-0">
            <h1 class="text-4xl md:text-5xl font-bold text-gray-900 mb-4 leading-tight">
              Empowering businesses with AI and advanced engineering
            </h1>
            <p class="text-xl text-gray-600 mb-8">
              We help enterprises leverage cutting-edge technology to transform their operations and drive innovation.
            </p>
            <div class="flex flex-col sm:flex-row gap-4">
              <Button size="lg" class="w-full sm:w-auto">Get Started</Button>
              <Button size="lg" variant="outline" class="w-full sm:w-auto">Learn More</Button>
            </div>
          </div>
          <div class="md:w-1/2 md:pl-10">
            <img 
              src="https://picsum.photos/id/3/800/600" 
              alt="AI Technology" 
              class="rounded-lg shadow-xl w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>

    <!-- Services Overview -->
    <section class="py-20">
      <div class="container mx-auto px-4">
        <div class="text-center mb-16">
          <h2 class="text-3xl font-bold text-gray-900 mb-4">Our Services</h2>
          <p class="text-xl text-gray-600 max-w-3xl mx-auto">
            We offer a comprehensive suite of AI and software development services to help your business thrive in the digital age.
          </p>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <ServiceCard 
            v-for="(service, index) in services" 
            :key="index"
            :title="service.title"
            :description="service.description"
            :icon="service.icon"
          />
        </div>
        
        <div class="text-center mt-12">
          <router-link to="/services">
            <Button variant="outline">View All Services</Button>
          </router-link>
        </div>
      </div>
    </section>

    <!-- About Us Preview -->
    <section class="bg-gray-50 py-20">
      <div class="container mx-auto px-4">
        <div class="flex flex-col md:flex-row items-center">
          <div class="md:w-1/2 mb-10 md:mb-0">
            <img 
              src="https://picsum.photos/id/20/800/600" 
              alt="Our Team" 
              class="rounded-lg shadow-xl w-full h-auto"
            />
          </div>
          <div class="md:w-1/2 md:pl-10">
            <h2 class="text-3xl font-bold text-gray-900 mb-4">About XYZDEFG</h2>
            <p class="text-lg text-gray-600 mb-6">
              We are a team of passionate technologists dedicated to transforming business processes with AI and advanced engineering.
            </p>
            <p class="text-lg text-gray-600 mb-8">
              Our mission is to empower organizations with cutting-edge technology solutions that drive efficiency, innovation, and growth.
            </p>
            <router-link to="/about">
              <Button variant="outline">Learn More About Us</Button>
            </router-link>
          </div>
        </div>
      </div>
    </section>

    <!-- Case Studies Preview -->
    <section class="py-20">
      <div class="container mx-auto px-4">
        <div class="text-center mb-16">
          <h2 class="text-3xl font-bold text-gray-900 mb-4">Case Studies</h2>
          <p class="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore how we've helped businesses across industries achieve their goals with our innovative solutions.
          </p>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <CaseStudyCard 
            v-for="(study, index) in caseStudies" 
            :key="index"
            :title="study.title"
            :description="study.description"
            :image="study.image"
            :category="study.category"
          />
        </div>
        
        <div class="text-center mt-12">
          <router-link to="/case-studies">
            <Button variant="outline">View All Case Studies</Button>
          </router-link>
        </div>
      </div>
    </section>

    <!-- Lead Generation Section -->
    <section class="bg-primary/5 py-20">
      <div class="container mx-auto px-4">
        <div class="max-w-3xl mx-auto text-center mb-12">
          <h2 class="text-3xl font-bold text-gray-900 mb-4">Ready to Transform Your Business?</h2>
          <p class="text-xl text-gray-600">
            Get in touch with our experts for a free consultation and discover how our AI solutions can help you achieve your business goals.
          </p>
        </div>
        
        <div class="max-w-2xl mx-auto bg-white rounded-lg shadow-lg p-8">
          <LeadGenerationForm />
          
          <div class="flex flex-wrap justify-center gap-4 mt-8">
            <div class="flex items-center space-x-2 bg-gray-50 px-4 py-2 rounded-full">
              <ShieldCheckIcon class="h-5 w-5 text-green-500" />
              <span class="text-sm font-medium">GDPR Compliant</span>
            </div>
            <div class="flex items-center space-x-2 bg-gray-50 px-4 py-2 rounded-full">
              <BadgeCheckIcon class="h-5 w-5 text-blue-500" />
              <span class="text-sm font-medium">Trusted by Industry Leaders</span>
            </div>
            <div class="flex items-center space-x-2 bg-gray-50 px-4 py-2 rounded-full">
              <LockIcon class="h-5 w-5 text-gray-500" />
              <span class="text-sm font-medium">Secure & Confidential</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { Button } from '@/components/ui/button';
import ServiceCard from '@/components/services/ServiceCard.vue';
import CaseStudyCard from '@/components/case-studies/CaseStudyCard.vue';
import LeadGenerationForm from '@/components/forms/LeadGenerationForm.vue';
import { ShieldCheckIcon, BadgeCheckIcon, LockIcon } from 'lucide-vue-next';

const services = [
  {
    title: 'Custom AI Solutions',
    description: 'Tailored AI solutions including intelligent document analysis and domain-specific language models.',
    icon: 'Brain'
  },
  {
    title: 'Enterprise & Mobile App Development',
    description: 'Scalable, high-performance applications built with cutting-edge technologies.',
    icon: 'Smartphone'
  },
  {
    title: 'AI-Powered Workflow Automation',
    description: 'Streamline your business processes with intelligent automation solutions.',
    icon: 'Workflow'
  },
  {
    title: 'AI Integration & Consulting',
    description: 'Strategic guidance for secure and effective AI adoption in your organization.',
    icon: 'Lightbulb'
  }
];

const caseStudies = [
  {
    title: 'AI-Driven Customer Service Transformation',
    description: 'How we helped a Fortune 500 company reduce response times by 75% with intelligent automation.',
    image: 'https://picsum.photos/id/60/600/400',
    category: 'AI Automation'
  },
  {
    title: 'Enterprise Mobile App for Field Operations',
    description: 'A custom solution that increased field technician efficiency by 40% for a utility provider.',
    image: 'https://picsum.photos/id/42/600/400',
    category: 'Mobile Development'
  },
  {
    title: 'Document Processing Automation',
    description: 'Implementing intelligent document analysis that saved 5,000+ manual hours annually.',
    image: 'https://picsum.photos/id/48/600/400',
    category: 'Custom AI'
  }
];
</script>