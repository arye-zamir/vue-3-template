import { version as packageVersion, name as packageName, description as packageDescription } from '../../package.json';
import { useAppStore } from '@/store/modules';

export const useApp = () => {
  const appStore = useAppStore();

  onMounted(() => {
    appStore.setAppVersion(packageVersion);
    appStore.setAppName(packageName);
    appStore.setAppDescription(packageDescription);
  });

  return {
    meta: {
      version: computed(() => appStore.version),
      name: computed(() => appStore.name),
      description: computed(() => appStore.description),
    },
    theme: {
      toggleDarkMode: () => document.querySelector('html')?.classList.toggle('dark'),
      isDarkMode: computed(() => document.querySelector('html')?.classList.contains('dark')),
    },
  };
};
