<script lang="ts" setup>
const { theme } = useApp();

const { label = 'Toggle Theme' } = defineProps<{ label?: string }>();

const btnCls = [
  'font-poppins',
  'cursor-pointer',
  'place-items-center',
  'rounded-md',
  'border-1',
  'border-slate-500',
  'bg-neutral-200',
  'px-2',
  'py-1',
  'dark:bg-slate-500/50',
];
</script>

<template>
  <button :class="btnCls" @click="theme.toggleDarkMode">{{ label }}</button>
</template>
