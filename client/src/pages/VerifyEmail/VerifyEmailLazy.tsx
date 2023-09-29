import { lazy } from "react";

export const VerifyEmailLazy = lazy(
  () =>
    new Promise((resolve) => {
      //@ts-ignore
      setTimeout(() => resolve(import("./VerifyEmail")), 0);
    })
);
