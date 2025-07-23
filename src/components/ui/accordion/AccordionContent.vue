<script setup lang="ts">
import { inject, ref, onMounted, onBeforeUnmount, watch } from "vue";

const accordionItem = inject("accordionItem") as {
  isExpanded: boolean;
  toggle: () => void;
};

const contentRef = ref<HTMLDivElement | null>(null);
const contentHeight = ref<number | undefined>(undefined);

const updateHeight = () => {
  if (contentRef.value) {
    contentHeight.value = contentRef.value.scrollHeight;
  }
};

onMounted(() => {
  updateHeight();
  window.addEventListener("resize", updateHeight);
});

onBeforeUnmount(() => {
  window.removeEventListener("resize", updateHeight);
});

watch(() => accordionItem.isExpanded, updateHeight);
</script>

<template>
  <div
    :data-state="accordionItem.isExpanded ? 'open' : 'closed'"
    class="overflow-hidden text-sm data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down"
    :style="accordionItem.isExpanded ? `height: ${contentHeight}px` : 'height: 0'"
  >
    <div ref="contentRef" class="pb-4 pt-0">
      <slot />
    </div>
  </div>
</template>