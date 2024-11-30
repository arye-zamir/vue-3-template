<script setup lang="ts">
const app = useApp();
</script>

<template>
  <div>
    <p>{{ app.name }} - v{{ app.version }}</p>
    <p>{{ app.description }}</p>
  </div>
</template>
