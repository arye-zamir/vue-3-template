<script lang="ts" setup>
const { class: _class } = defineProps<{
  class?: string;
}>();

const router = useRouter();
const isReady = ref(false);

const getClass = computed(() => _class ?? '');
const wrapperCls = computed(() =>
  [
    'min-h-screen',
    'bg-neutral-50',
    'text-slate-800',
    'transition-colors',
    'duration-300',
    'dark:bg-slate-800',
    'dark:text-neutral-50',
    getClass.value,
  ]
    .filter(Boolean)
    .join(' ')
);

onMounted(async () => {
  await router.isReady();
  isReady.value = true;
});
</script>

<template>
  <div :class="wrapperCls" v-bind="$attrs">
    <slot :is-ready="isReady" />
  </div>
</template>
