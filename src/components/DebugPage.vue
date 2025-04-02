<script setup lang="ts">
const { meta } = useApp();
</script>

<template>
  <div class="text-base">
    <p>{{ meta.name }} - v{{ meta.version }}</p>
    <p>{{ meta.description }}</p>
  </div>
</template>
