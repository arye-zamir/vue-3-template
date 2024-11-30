import { ROUTE_NAME } from "@/constants/route-name";
import HomeRoutes from "@/domain/home/routes";

export default [
  ...HomeRoutes,
  {
    path: "/:pathMatch(.*)*",
    name: ROUTE_NAME.NotFound,
    component: () => import("../components/ErrorPage.vue"),
  },
];
