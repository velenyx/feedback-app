import { lazy } from "react";

export const AgremeentLazy = lazy(
  () =>
    new Promise((resolve) => {
      //@ts-ignore
      setTimeout(() => resolve(import("./Agremeent")), 0);
    })
);
