import { lazy } from "react";

export const HomeLazy = lazy(
  () =>
    new Promise((resolve) => {
      //@ts-ignore
      setTimeout(() => resolve(import("./Home")), 0);
    })
);
