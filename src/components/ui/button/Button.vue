<script setup lang="ts">
import { computed } from "vue";
import { buttonVariants } from ".";
import { cn } from "@/lib/utils";
import { type VariantProps } from "class-variance-authority";

interface ButtonProps extends /* @vue-ignore */ VariantProps<typeof buttonVariants> {
  type?: "button" | "submit" | "reset";
}

const props = withDefaults(defineProps<ButtonProps>(), {
  type: "button",
  variant: "default",
  size: "default",
});
</script>

<template>
  <button
    :type="type"
    :class="cn(buttonVariants({ variant, size }), $attrs.class ?? '')"
  >
    <slot />
  </button>
</template>