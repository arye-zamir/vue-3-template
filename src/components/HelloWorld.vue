<script setup lang="ts">
const app = useApp();
</script>

<template>
  <div class="text-base">
    <p>{{ app.name }} - v{{ app.version }}</p>
    <p>{{ app.description }}</p>
  </div>
</template>
