<template>
  <div>
    <!-- Hero Section -->
    <section class="bg-gradient-to-r from-gray-50 to-gray-100 py-20">
      <div class="container mx-auto px-4 text-center">
        <h1 class="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Case Studies</h1>
        <p class="text-xl text-gray-600 max-w-3xl mx-auto">
          Explore how we've helped businesses across industries achieve their goals with our innovative solutions.
        </p>
      </div>
    </section>

    <!-- Filters -->
    <section class="py-10 border-b border-gray-200">
      <div class="container mx-auto px-4">
        <div class="flex flex-wrap items-center justify-between gap-4">
          <div class="flex flex-wrap gap-2">
            <Button 
              v-for="category in categories" 
              :key="category"
              :variant="selectedCategory === category ? 'default' : 'outline'"
              size="sm"
              @click="selectedCategory = category"
            >
              {{ category }}
            </Button>
          </div>
          <div class="flex items-center">
            <label for="sort" class="mr-2 text-sm font-medium text-gray-700">Sort by:</label>
            <select 
              id="sort" 
              v-model="sortBy"
              class="bg-white border border-gray-300 rounded-md py-1 px-3 text-sm"
            >
              <option value="recent">Most Recent</option>
              <option value="name">Name</option>
              <option value="industry">Industry</option>
            </select>
          </div>
        </div>
      </div>
    </section>

    <!-- Case Studies Grid -->
    <section class="py-20">
      <div class="container mx-auto px-4">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <CaseStudyCard 
            v-for="study in filteredCaseStudies" 
            :key="study.id"
            :title="study.title"
            :description="study.description"
            :image="study.image"
            :category="study.category"
            :industry="study.industry"
            :link="`/case-studies/${study.id}`"
          />
        </div>
        
        <div v-if="filteredCaseStudies.length === 0" class="text-center py-20">
          <p class="text-xl text-gray-600">No case studies found matching your criteria.</p>
          <Button variant="outline" class="mt-4" @click="selectedCategory = 'All'">
            Reset Filters
          </Button>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="bg-primary/5 py-20">
      <div class="container mx-auto px-4">
        <div class="max-w-3xl mx-auto text-center">
          <h2 class="text-3xl font-bold text-gray-900 mb-4">Ready to Create Your Success Story?</h2>
          <p class="text-xl text-gray-600 mb-8">
            Contact us today to discuss how we can help you achieve similar results for your business.
          </p>
          <Button size="lg">Get in Touch</Button>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import { Button } from '@/components/ui/button';
import CaseStudyCard from '@/components/case-studies/CaseStudyCard.vue';

const selectedCategory = ref('All');
const sortBy = ref('recent');

const categories = ['All', 'AI Solutions', 'Mobile Development', 'Enterprise Apps', 'Workflow Automation', 'AI Consulting'];

const caseStudies = [
  {
    id: '1',
    title: 'AI-Driven Customer Service Transformation',
    description: 'How we helped a Fortune 500 company reduce response times by 75% with intelligent automation.',
    image: 'https://picsum.photos/id/60/800/600',
    category: 'AI Solutions',
    industry: 'Retail',
    date: '2023-05-15'
  },
  {
    id: '2',
    title: 'Enterprise Mobile App for Field Operations',
    description: 'A custom solution that increased field technician efficiency by 40% for a utility provider.',
    image: 'https://picsum.photos/id/42/800/600',
    category: 'Mobile Development',
    industry: 'Utilities',
    date: '2023-03-22'
  },
  {
    id: '3',
    title: 'Document Processing Automation',
    description: 'Implementing intelligent document analysis that saved 5,000+ manual hours annually.',
    image: 'https://picsum.photos/id/48/800/600',
    category: 'Workflow Automation',
    industry: 'Financial Services',
    date: '2023-01-10'
  },
  {
    id: '4',
    title: 'Healthcare Provider Mobile Platform',
    description: 'A secure, HIPAA-compliant mobile application for healthcare providers to manage patient care.',
    image: 'https://picsum.photos/id/96/800/600',
    category: 'Mobile Development',
    industry: 'Healthcare',
    date: '2022-11-05'
  },
  {
    id: '5',
    title: 'AI-Powered Predictive Maintenance System',
    description: 'Reduced equipment downtime by 35% with a machine learning solution for a manufacturing client.',
    image: 'https://picsum.photos/id/180/800/600',
    category: 'AI Solutions',
    industry: 'Manufacturing',
    date: '2022-09-18'
  },
  {
    id: '6',
    title: 'Enterprise Resource Planning System',
    description: 'A custom ERP solution that streamlined operations across 12 departments for a global organization.',
    image: 'https://picsum.photos/id/160/800/600',
    category: 'Enterprise Apps',
    industry: 'Logistics',
    date: '2022-07-30'
  },
  {
    id: '7',
    title: 'AI Strategy & Implementation Roadmap',
    description: 'Developed a comprehensive AI adoption strategy for a mid-sized insurance company.',
    image: 'https://picsum.photos/id/119/800/600',
    category: 'AI Consulting',
    industry: 'Insurance',
    date: '2022-05-12'
  },
  {
    id: '8',
    title: 'Automated Quality Control System',
    description: 'Computer vision solution that improved defect detection accuracy by 95% for a manufacturing client.',
    image: 'https://picsum.photos/id/20/800/600',
    category: 'AI Solutions',
    industry: 'Manufacturing',
    date: '2022-03-25'
  },
  {
    id: '9',
    title: 'Supply Chain Optimization Platform',
    description: 'AI-powered solution that reduced inventory costs by 22% while maintaining service levels.',
    image: 'https://picsum.photos/id/28/800/600',
    category: 'Enterprise Apps',
    industry: 'Retail',
    date: '2022-01-15'
  }
];

const filteredCaseStudies = computed(() => {
  let filtered = [...caseStudies];
  
  // Apply category filter
  if (selectedCategory.value !== 'All') {
    filtered = filtered.filter(study => study.category === selectedCategory.value);
  }
  
  // Apply sorting
  if (sortBy.value === 'recent') {
    filtered.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  } else if (sortBy.value === 'name') {
    filtered.sort((a, b) => a.title.localeCompare(b.title));
  } else if (sortBy.value === 'industry') {
    filtered.sort((a, b) => a.industry.localeCompare(b.industry));
  }
  
  return filtered;
});
</script>