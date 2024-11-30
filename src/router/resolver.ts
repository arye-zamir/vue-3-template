import type { Router } from "vue-router";

export const isCurrent = (router: Router, routeName?: string): boolean => {
  return router.currentRoute.value.name === routeName;
};
