<template>
  <div>
    <!-- Hero Section -->
    <section class="bg-gradient-to-r from-gray-50 to-gray-100 py-20">
      <div class="container mx-auto px-4 text-center">
        <h1 class="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Our Services</h1>
        <p class="text-xl text-gray-600 max-w-3xl mx-auto">
          Comprehensive AI and software development solutions tailored to your business needs.
        </p>
      </div>
    </section>

    <!-- Services Overview -->
    <section class="py-20">
      <div class="container mx-auto px-4">
        <div class="grid grid-cols-1 gap-16">
          <ServiceDetail 
            v-for="(service, index) in services" 
            :key="index"
            :title="service.title"
            :description="service.description"
            :features="service.features"
            :image="service.image"
            :icon="service.icon"
            :reverse="index % 2 !== 0"
          />
        </div>
      </div>
    </section>

    <!-- Approach -->
    <section class="bg-gray-50 py-20">
      <div class="container mx-auto px-4">
        <div class="text-center mb-16">
          <h2 class="text-3xl font-bold text-gray-900 mb-4">Our Approach</h2>
          <p class="text-xl text-gray-600 max-w-3xl mx-auto">
            We follow a proven methodology to ensure successful outcomes for every project.
          </p>
        </div>
        
        <div class="max-w-4xl mx-auto">
          <div class="relative">
            <!-- Timeline Line -->
            <div class="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gray-200"></div>
            
            <!-- Timeline Items -->
            <div v-for="(step, index) in approach" :key="index" class="relative z-10 mb-12">
              <div class="flex items-center justify-center mb-4">
                <div class="bg-primary text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl">
                  {{ index + 1 }}
                </div>
              </div>
              <div class="bg-white rounded-lg shadow-lg p-8 max-w-lg mx-auto">
                <h3 class="text-xl font-bold text-gray-900 mb-2">{{ step.title }}</h3>
                <p class="text-gray-600">{{ step.description }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Technologies -->
    <section class="py-20">
      <div class="container mx-auto px-4">
        <div class="text-center mb-16">
          <h2 class="text-3xl font-bold text-gray-900 mb-4">Technologies We Use</h2>
          <p class="text-xl text-gray-600 max-w-3xl mx-auto">
            We leverage cutting-edge technologies to deliver powerful, scalable solutions.
          </p>
        </div>
        
        <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          <div v-for="(tech, index) in technologies" :key="index" class="flex flex-col items-center">
            <div class="bg-gray-50 rounded-full p-4 mb-4">
              <img :src="tech.icon" :alt="tech.name" class="w-12 h-12 object-contain" />
            </div>
            <span class="text-gray-900 font-medium text-center">{{ tech.name }}</span>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="bg-primary/5 py-20">
      <div class="container mx-auto px-4">
        <div class="max-w-3xl mx-auto text-center">
          <h2 class="text-3xl font-bold text-gray-900 mb-4">Ready to Get Started?</h2>
          <p class="text-xl text-gray-600 mb-8">
            Contact us today to discuss your project requirements and discover how our services can help you achieve your business goals.
          </p>
          <div class="flex flex-col sm:flex-row justify-center gap-4">
            <Button size="lg">Request a Consultation</Button>
            <Button size="lg" variant="outline">View Case Studies</Button>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { Button } from '@/components/ui/button';
import ServiceDetail from '@/components/services/ServiceDetail.vue';

const services = [
  {
    title: 'Custom AI Solutions',
    description: 'We develop tailored artificial intelligence solutions that address your specific business challenges and opportunities.',
    features: [
      'Intelligent document analysis and processing',
      'Domain-specific language models and chatbots',
      'Computer vision and image recognition systems',
      'Predictive analytics and forecasting models',
      'Natural language processing applications'
    ],
    image: 'https://picsum.photos/id/180/800/600',
    icon: 'Brain'
  },
  {
    title: 'Enterprise & Mobile App Development',
    description: 'We build scalable, high-performance applications that deliver exceptional user experiences across platforms.',
    features: [
      'Enterprise-grade web applications',
      'Native and cross-platform mobile apps',
      'Progressive web applications (PWAs)',
      'Cloud-native application architecture',
      'API development and integration'
    ],
    image: 'https://picsum.photos/id/160/800/600',
    icon: 'Smartphone'
  },
  {
    title: 'AI-Powered Workflow Automation',
    description: 'We streamline your business processes with intelligent automation solutions that boost efficiency and reduce costs.',
    features: [
      'Business process analysis and optimization',
      'Intelligent document workflow automation',
      'RPA (Robotic Process Automation) implementation',
      'Custom workflow automation platforms',
      'Integration with existing enterprise systems'
    ],
    image: 'https://picsum.photos/id/119/800/600',
    icon: 'Workflow'
  },
  {
    title: 'AI Integration & Consulting',
    description: 'We provide strategic guidance and implementation support for effective AI adoption in your organization.',
    features: [
      'AI readiness assessment and roadmap development',
      'Technology selection and architecture planning',
      'Data strategy and governance consulting',
      'AI implementation and integration services',
      'Training and knowledge transfer'
    ],
    image: 'https://picsum.photos/id/96/800/600',
    icon: 'Lightbulb'
  }
];

const approach = [
  {
    title: 'Discovery & Analysis',
    description: 'We begin by thoroughly understanding your business objectives, challenges, and requirements through in-depth consultations and research.'
  },
  {
    title: 'Strategy & Planning',
    description: 'Based on our findings, we develop a comprehensive strategy and project plan, outlining the approach, technologies, and timeline.'
  },
  {
    title: 'Design & Architecture',
    description: 'Our team creates detailed designs and technical architecture that serve as the blueprint for development, ensuring scalability and performance.'
  },
  {
    title: 'Development & Implementation',
    description: 'We follow agile methodologies to build your solution, with regular demos and feedback cycles to ensure alignment with your vision.'
  },
  {
    title: 'Testing & Quality Assurance',
    description: 'Rigorous testing ensures your solution meets the highest standards of quality, security, and performance.'
  },
  {
    title: 'Deployment & Support',
    description: 'We handle the deployment process and provide ongoing support and maintenance to ensure your solution continues to deliver value.'
  }
];

const technologies = [
  { name: 'TensorFlow', icon: 'https://picsum.photos/id/1/100/100' },
  { name: 'PyTorch', icon: 'https://picsum.photos/id/2/100/100' },
  { name: 'React', icon: 'https://picsum.photos/id/3/100/100' },
  { name: 'Vue.js', icon: 'https://picsum.photos/id/4/100/100' },
  { name: 'Node.js', icon: 'https://picsum.photos/id/5/100/100' },
  { name: 'AWS', icon: 'https://picsum.photos/id/6/100/100' },
  { name: 'Google Cloud', icon: 'https://picsum.photos/id/7/100/100' },
  { name: 'Azure', icon: 'https://picsum.photos/id/8/100/100' },
  { name: 'Kubernetes', icon: 'https://picsum.photos/id/9/100/100' },
  { name: 'Docker', icon: 'https://picsum.photos/id/10/100/100' },
  { name: 'Flutter', icon: 'https://picsum.photos/id/11/100/100' },
  { name: 'Swift', icon: 'https://picsum.photos/id/12/100/100' }
];
</script>