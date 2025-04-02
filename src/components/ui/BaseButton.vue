<!-- src/components/ui/BaseButton.vue -->
<template>
  <button class="btn-base" :class="customClass">
    <slot />
  </button>
</template>

<script setup lang="ts">
defineProps<{
  customClass?: string
}>()
</script>
