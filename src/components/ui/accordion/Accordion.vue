<script setup lang="ts">
import { provide, ref } from "vue";

const props = defineProps<{
  type?: "single" | "multiple";
  collapsible?: boolean;
  defaultValue?: string | string[];
}>();

const modelValue = ref<string | string[]>(props.defaultValue || (props.type === "multiple" ? [] : ""));

provide("accordion", {
  type: props.type || "single",
  collapsible: props.collapsible || false,
  modelValue,
  updateModelValue: (value: string | string[]) => {
    modelValue.value = value;
  }
});
</script>

<template>
  <div class="w-full">
    <slot />
  </div>
</template>