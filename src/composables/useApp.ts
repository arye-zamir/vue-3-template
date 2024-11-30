import { useAppStore } from '@/store/modules';
import {
  version as packageVersion,
  name as packageName,
  description as packageDescription,
} from '../../package.json';

export const useApp = () => {
  const appStore = useAppStore();

  const version = computed(() => appStore.version);
  const name = computed(() => appStore.name);
  const description = computed(() => appStore.description);
  const setAppVersion = appStore.setVersion;

  // region hooks

  onMounted(() => {
    setAppVersion(packageVersion);
    appStore.setAppName(packageName);
    appStore.setAppDescription(packageDescription);
  });

  // endregion

  return {
    version,
    name,
    description,
  };
};
