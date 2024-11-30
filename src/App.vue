<script setup lang="ts">
const router = useRouter();
const isLoading = ref(true);

onMounted(async () => {
  await router.isReady();
  isLoading.value = false;
});
</script>

<template>
  <div v-if="isLoading">Loading...</div>
  <router-view v-else />
</template>
