<template>
  <div>
    <!-- Hero Section -->
    <section class="bg-gradient-to-r from-gray-50 to-gray-100 py-20">
      <div class="container mx-auto px-4 text-center">
        <h1 class="text-4xl md:text-5xl font-bold text-gray-900 mb-6">About XYZDEFG</h1>
        <p class="text-xl text-gray-600 max-w-3xl mx-auto">
          We're on a mission to transform business processes with AI and advanced engineering.
        </p>
      </div>
    </section>

    <!-- Our Story -->
    <section class="py-20">
      <div class="container mx-auto px-4">
        <div class="flex flex-col md:flex-row items-center">
          <div class="md:w-1/2 mb-10 md:mb-0">
            <h2 class="text-3xl font-bold text-gray-900 mb-4">Our Story</h2>
            <p class="text-lg text-gray-600 mb-6">
              Founded in 2015, XYZDEFG began with a simple vision: to make advanced AI technology accessible to businesses of all sizes. What started as a small team of passionate engineers has grown into a global technology partner trusted by enterprises worldwide.
            </p>
            <p class="text-lg text-gray-600 mb-6">
              Our journey has been defined by continuous innovation, deep technical expertise, and an unwavering commitment to our clients' success. We've evolved from a specialized AI consultancy to a full-service technology partner offering end-to-end solutions.
            </p>
            <p class="text-lg text-gray-600">
              Today, we're proud to be at the forefront of the AI revolution, helping organizations across industries harness the power of artificial intelligence and advanced engineering to solve complex challenges and create new opportunities.
            </p>
          </div>
          <div class="md:w-1/2 md:pl-10">
            <img 
              src="https://picsum.photos/id/28/800/600" 
              alt="Our Story" 
              class="rounded-lg shadow-xl w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>

    <!-- Mission & Values -->
    <section class="bg-gray-50 py-20">
      <div class="container mx-auto px-4">
        <div class="text-center mb-16">
          <h2 class="text-3xl font-bold text-gray-900 mb-4">Our Mission & Values</h2>
          <p class="text-xl text-gray-600 max-w-3xl mx-auto">
            We're guided by a clear mission and a set of core values that define who we are and how we work.
          </p>
        </div>
        
        <div class="max-w-4xl mx-auto">
          <div class="bg-white rounded-lg shadow-lg p-8 mb-8">
            <h3 class="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
            <p class="text-lg text-gray-600">
              To empower organizations with cutting-edge AI and software solutions that drive innovation, efficiency, and growth. We're committed to making advanced technology accessible and impactful for businesses of all sizes.
            </p>
          </div>
          
          <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div v-for="(value, index) in values" :key="index" class="bg-white rounded-lg shadow-lg p-8">
              <div class="flex items-center mb-4">
                <component :is="value.icon" class="h-8 w-8 text-primary mr-3" />
                <h3 class="text-xl font-bold text-gray-900">{{ value.title }}</h3>
              </div>
              <p class="text-gray-600">{{ value.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Team -->
    <section class="py-20">
      <div class="container mx-auto px-4">
        <div class="text-center mb-16">
          <h2 class="text-3xl font-bold text-gray-900 mb-4">Our Leadership Team</h2>
          <p class="text-xl text-gray-600 max-w-3xl mx-auto">
            Meet the experienced professionals leading our company's innovation and growth.
          </p>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div v-for="(member, index) in team" :key="index" class="bg-white rounded-lg shadow-lg overflow-hidden">
            <img :src="member.image" :alt="member.name" class="w-full h-64 object-cover" />
            <div class="p-6">
              <h3 class="text-xl font-bold text-gray-900 mb-1">{{ member.name }}</h3>
              <p class="text-primary font-medium mb-4">{{ member.position }}</p>
              <p class="text-gray-600 mb-4">{{ member.bio }}</p>
              <div class="flex space-x-4">
                <a href="#" class="text-gray-400 hover:text-primary transition-colors">
                  <LinkedinIcon class="h-5 w-5" />
                </a>
                <a href="#" class="text-gray-400 hover:text-primary transition-colors">
                  <TwitterIcon class="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="bg-primary/5 py-20">
      <div class="container mx-auto px-4 text-center">
        <h2 class="text-3xl font-bold text-gray-900 mb-4">Join Our Journey</h2>
        <p class="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
          We're always looking for talented individuals who share our passion for technology and innovation.
        </p>
        <div class="flex flex-col sm:flex-row justify-center gap-4">
          <Button size="lg">View Open Positions</Button>
          <Button size="lg" variant="outline">Learn About Our Culture</Button>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { Button } from '@/components/ui/button';
import { 
  LinkedinIcon, 
  TwitterIcon, 
  LightbulbIcon, 
  HeartIcon, 
  TrendingUpIcon, 
  UsersIcon 
} from 'lucide-vue-next';

const values = [
  {
    title: 'Innovation',
    description: 'We constantly push the boundaries of what\'s possible with technology, exploring new ideas and approaches to solve complex problems.',
    icon: LightbulbIcon
  },
  {
    title: 'Excellence',
    description: 'We\'re committed to delivering the highest quality in everything we do, from code to client communication.',
    icon: TrendingUpIcon
  },
  {
    title: 'Collaboration',
    description: 'We believe in the power of teamwork, both within our organization and in partnership with our clients.',
    icon: UsersIcon
  },
  {
    title: 'Integrity',
    description: 'We operate with transparency, honesty, and ethical responsibility in all our business practices.',
    icon: HeartIcon
  }
];

const team = [
  {
    name: 'Alex Johnson',
    position: 'Chief Executive Officer',
    bio: 'With over 20 years of experience in technology leadership, Alex has led multiple successful startups and enterprise initiatives.',
    image: 'https://picsum.photos/id/1005/600/800'
  },
  {
    name: 'Sarah Chen',
    position: 'Chief Technology Officer',
    bio: 'Sarah is an AI researcher and engineer with a Ph.D. in Machine Learning and numerous publications in top-tier conferences.',
    image: 'https://picsum.photos/id/1011/600/800'
  },
  {
    name: 'Michael Rodriguez',
    position: 'VP of Engineering',
    bio: 'Michael brings 15 years of software architecture experience, specializing in scalable enterprise applications.',
    image: 'https://picsum.photos/id/1012/600/800'
  }
];
</script>