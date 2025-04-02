<template>
  <AppContainer v-slot="{ isReady }">
    <div v-if="!isReady">Loading...</div>
    <RouterView v-else />
  </AppContainer>
</template>
