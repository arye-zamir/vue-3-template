import { createRouter, createWebHistory } from "vue-router";
import routes from "./routes";
import { isCurrent } from "./resolver";

declare module "vue-router" {
  interface RouteMeta {
    isAdmin?: boolean;
    requiresAuth?: boolean;
    errorCode?: number;
    errorMessages?: string[];
  }
}

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;

export { isCurrent };
