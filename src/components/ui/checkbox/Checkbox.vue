<script setup lang="ts">
import { cn } from "@/lib/utils";
import { CheckIcon } from "lucide-vue-next";

const props = defineProps<{
  checked?: boolean;
  disabled?: boolean;
}>();

const emit = defineEmits<{
  (e: "update:checked", value: boolean): void;
}>();

const handleChange = (event: Event) => {
  const target = event.target as HTMLInputElement;
  emit("update:checked", target.checked);
};
</script>

<template>
  <div class="flex items-center space-x-2">
    <button
      type="button"
      role="checkbox"
      :aria-checked="checked"
      :data-state="checked ? 'checked' : 'unchecked'"
      :disabled="disabled"
      class="peer h-4 w-4 shrink-0 rounded-sm border border-primary shadow focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground"
      :class="cn($attrs.class ?? '')"
      @click="emit('update:checked', !checked)"
    >
      <CheckIcon
        v-if="checked"
        class="h-3 w-3 text-white"
      />
    </button>
    <input
      type="checkbox"
      :checked="checked"
      @change="handleChange"
      class="absolute opacity-0 pointer-events-none"
    />
  </div>
</template>