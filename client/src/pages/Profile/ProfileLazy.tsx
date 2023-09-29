import { lazy } from "react";

export const ProfileLazy = lazy(
  () =>
    new Promise((resolve) => {
      //@ts-ignore
      setTimeout(() => resolve(import("./Profile")), 0);
    })
);
