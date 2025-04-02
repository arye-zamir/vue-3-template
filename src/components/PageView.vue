<script lang="ts" setup>
defineProps<{ pageId: string }>();
</script>

<template>
  <div :id="`page-view-${pageId}`" class="p-4">
    <slot />
  </div>
</template>
