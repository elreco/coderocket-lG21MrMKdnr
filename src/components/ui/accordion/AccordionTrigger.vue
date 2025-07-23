<script setup lang="ts">
import { inject } from "vue";
import { ChevronDown } from "lucide-vue-next";
import { cn } from "@/lib/utils";

const accordionItem = inject("accordionItem") as {
  isExpanded: boolean;
  toggle: () => void;
};
</script>

<template>
  <h3 data-state="closed">
    <button
      type="button"
      @click="accordionItem.toggle"
      class="flex w-full items-center justify-between py-4 text-sm font-medium transition-all hover:underline [&[data-state=open]>svg]:rotate-180"
      :data-state="accordionItem.isExpanded ? 'open' : 'closed'"
      :aria-expanded="accordionItem.isExpanded"
    >
      <slot />
      <ChevronDown
        class="h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-200"
        :class="cn(accordionItem.isExpanded ? 'rotate-180' : '')"
      />
    </button>
  </h3>
</template>