export const ROUTE_NAME = {
  NotFound: "not-found",
  HomePage: "home-page",
} as const;

export type RouteName = (typeof ROUTE_NAME)[keyof typeof ROUTE_NAME];
