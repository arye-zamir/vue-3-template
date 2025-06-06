import type { App } from 'vue';

const store = createPinia();

export const setupStore = (app: App) => {
  app.use(store);
};

export { store };
