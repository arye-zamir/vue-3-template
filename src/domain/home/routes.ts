import { ROUTE_NAME } from "@/constants/route-name";

export default [
  {
    name: ROUTE_NAME.HomePage,
    path: "/",
    component: () => import("@/domain/home/ui/pages/HomePage.vue"),
  },
];
