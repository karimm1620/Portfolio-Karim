import { lazy } from "react";
import { PROJECT_META_BY_SLUG } from "../data/projectMeta";

const PROJECT_DETAIL_COMPONENTS = {
  polaid: lazy(() => import("./Polaid-Detail")),
  asrimcell: lazy(() => import("./AsrimCell-Detail")),
  fizzyGutsy: lazy(() => import("./FizzyGutsy-Detail")),
  "awwwards-gsap": lazy(() => import("./Awwwards-Detail")),
  "todo-app": lazy(() => import("./TodoApps-Detail")),
  nodebase: lazy(() => import("./Nodebase-Detail")),
  macbook: lazy(() => import("./MacLandingPage-Detail")),
  productify: lazy(() => import("./Productify-Detail")),
};

export function getProjectRouteConfig(slug) {
  const metadata = PROJECT_META_BY_SLUG[slug];
  if (!metadata) return null;

  return {
    ...metadata,
    Component: PROJECT_DETAIL_COMPONENTS[slug],
  };
}
