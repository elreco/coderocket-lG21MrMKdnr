<template>
  <div>
    <!-- Hero Section -->
    <section class="bg-gradient-to-r from-gray-50 to-gray-100 py-20">
      <div class="container mx-auto px-4 text-center">
        <h1 class="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Insights</h1>
        <p class="text-xl text-gray-600 max-w-3xl mx-auto">
          Stay updated with the latest trends, insights, and best practices in AI and software development.
        </p>
      </div>
    </section>

    <!-- Featured Article -->
    <section class="py-20">
      <div class="container mx-auto px-4">
        <div class="bg-white rounded-lg shadow-lg overflow-hidden">
          <div class="flex flex-col md:flex-row">
            <div class="md:w-1/2">
              <img 
                src="https://picsum.photos/id/180/1200/800" 
                alt="Featured Article" 
                class="w-full h-full object-cover"
              />
            </div>
            <div class="md:w-1/2 p-8 md:p-12 flex flex-col justify-center">
              <div class="mb-4">
                <span class="inline-block bg-primary/10 text-primary text-sm font-medium px-3 py-1 rounded-full">
                  Featured
                </span>
                <span class="ml-2 text-sm text-gray-500">May 15, 2023</span>
              </div>
              <h2 class="text-3xl font-bold text-gray-900 mb-4">
                The Future of AI in Enterprise: Trends to Watch in 2023
              </h2>
              <p class="text-gray-600 mb-6">
                Explore the emerging AI technologies and trends that are reshaping how enterprises operate and compete in today's rapidly evolving business landscape.
              </p>
              <div>
                <Button>Read Article</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Articles Grid -->
    <section class="py-10">
      <div class="container mx-auto px-4">
        <div class="flex flex-wrap items-center justify-between gap-4 mb-12">
          <h2 class="text-3xl font-bold text-gray-900">Latest Articles</h2>
          <div class="flex items-center">
            <label for="category" class="mr-2 text-sm font-medium text-gray-700">Filter by:</label>
            <select 
              id="category" 
              v-model="selectedCategory"
              class="bg-white border border-gray-300 rounded-md py-1 px-3 text-sm"
            >
              <option value="all">All Categories</option>
              <option v-for="category in categories" :key="category" :value="category">
                {{ category }}
              </option>
            </select>
          </div>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <ArticleCard 
            v-for="article in filteredArticles" 
            :key="article.id"
            :title="article.title"
            :excerpt="article.excerpt"
            :image="article.image"
            :category="article.category"
            :date="article.date"
            :author="article.author"
            :link="`/insights/${article.id}`"
          />
        </div>
        
        <div class="text-center mt-12">
          <Button variant="outline">Load More Articles</Button>
        </div>
      </div>
    </section>

    <!-- Newsletter -->
    <section class="bg-primary/5 py-20 mt-20">
      <div class="container mx-auto px-4">
        <div class="max-w-3xl mx-auto text-center">
          <h2 class="text-3xl font-bold text-gray-900 mb-4">Subscribe to Our Newsletter</h2>
          <p class="text-xl text-gray-600 mb-8">
            Get the latest insights, articles, and updates delivered directly to your inbox.
          </p>
          
          <div class="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
            <Input type="email" placeholder="Enter your email" class="flex-grow" />
            <Button>Subscribe</Button>
          </div>
          
          <p class="text-sm text-gray-500 mt-4">
            We respect your privacy. Unsubscribe at any time.
          </p>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import ArticleCard from '@/components/insights/ArticleCard.vue';

const selectedCategory = ref('all');

const categories = [
  'AI Technology',
  'Software Development',
  'Mobile Development',
  'Industry Insights',
  'Case Studies',
  'Company News'
];

const articles = [
  {
    id: '1',
    title: 'How AI is Transforming Document Processing in Financial Services',
    excerpt: 'Discover how intelligent document processing is revolutionizing workflows in the financial sector.',
    image: 'https://picsum.photos/id/60/800/600',
    category: 'AI Technology',
    date: 'April 28, 2023',
    author: {
      name: 'Sarah Chen',
      avatar: 'https://picsum.photos/id/1011/100/100'
    }
  },
  {
    id: '2',
    title: 'Building Scalable Enterprise Applications: Best Practices',
    excerpt: 'Learn the key architectural principles and practices for developing enterprise-grade applications.',
    image: 'https://picsum.photos/id/48/800/600',
    category: 'Software Development',
    date: 'April 15, 2023',
    author: {
      name: 'Michael Rodriguez',
      avatar: 'https://picsum.photos/id/1012/100/100'
    }
  },
  {
    id: '3',
    title: 'The Rise of Cross-Platform Mobile Development',
    excerpt: 'Exploring the benefits and challenges of modern cross-platform mobile development frameworks.',
    image: 'https://picsum.photos/id/42/800/600',
    category: 'Mobile Development',
    date: 'March 30, 2023',
    author: {
      name: 'Jessica Wong',
      avatar: 'https://picsum.photos/id/1027/100/100'
    }
  },
  {
    id: '4',
    title: 'AI Ethics: Ensuring Responsible AI Implementation',
    excerpt: 'Important considerations for implementing AI solutions in an ethical and responsible manner.',
    image: 'https://picsum.photos/id/96/800/600',
    category: 'Industry Insights',
    date: 'March 22, 2023',
    author: {
      name: 'Alex Johnson',
      avatar: 'https://picsum.photos/id/1005/100/100'
    }
  },
  {
    id: '5',
    title: 'How We Reduced Processing Time by 85% for a Financial Client',
    excerpt: 'A detailed look at our approach to automating complex financial processes with AI.',
    image: 'https://picsum.photos/id/119/800/600',
    category: 'Case Studies',
    date: 'March 10, 2023',
    author: {
      name: 'Sarah Chen',
      avatar: 'https://picsum.photos/id/1011/100/100'
    }
  },
  {
    id: '6',
    title: 'XYZDEFG Named Top AI Solutions Provider for 2023',
    excerpt: 'We're proud to announce our recognition as a leading AI solutions provider in the industry.',
    image: 'https://picsum.photos/id/160/800/600',
    category: 'Company News',
    date: 'February 28, 2023',
    author: {
      name: 'Alex Johnson',
      avatar: 'https://picsum.photos/id/1005/100/100'
    }
  }
];

const filteredArticles = computed(() => {
  if (selectedCategory.value === 'all') {
    return articles;
  }
  return articles.filter(article => article.category === selectedCategory.value);
});
</script>