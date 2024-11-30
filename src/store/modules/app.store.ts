export const useAppStore = defineStore('app-store', () => {
  // region version
  const __version__ = ref('');

  const setVersion = (version: string) => {
    __version__.value = version;
    return __version__.value;
  };

  const version = computed(() => __version__.value);

  // endregion

  // region name

  const __name__ = ref('');

  const setAppName = (name: string) => {
    __name__.value = name;
    return __name__.value;
  };

  const name = computed(() => __name__.value);

  const __description__ = ref('');

  const setAppDescription = (description: string) => {
    __description__.value = description;
    return __description__.value;
  };

  const description = computed(() => __description__.value);

  return {
    version,
    setVersion,
    name,
    setAppName,
    description,
    setAppDescription,
  };
});
