<script setup lang="ts">
import { inject, computed, provide } from "vue";

const props = defineProps<{
  value: string;
}>();

const accordion = inject("accordion") as {
  type: "single" | "multiple";
  collapsible: boolean;
  modelValue: string | string[];
  updateModelValue: (value: string | string[]) => void;
};

const isExpanded = computed(() => {
  if (accordion.type === "single") {
    return accordion.modelValue === props.value;
  }
  return Array.isArray(accordion.modelValue) && accordion.modelValue.includes(props.value);
});

const toggle = () => {
  if (accordion.type === "single") {
    if (accordion.modelValue === props.value) {
      if (accordion.collapsible) {
        accordion.updateModelValue("");
      }
    } else {
      accordion.updateModelValue(props.value);
    }
  } else {
    const values = [...(Array.isArray(accordion.modelValue) ? accordion.modelValue : [])];
    const index = values.indexOf(props.value);
    if (index > -1) {
      values.splice(index, 1);
    } else {
      values.push(props.value);
    }
    accordion.updateModelValue(values);
  }
};

provide("accordionItem", {
  isExpanded,
  toggle
});
</script>

<template>
  <div class="border-b">
    <slot />
  </div>
</template>