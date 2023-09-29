import { lazy } from "react";

export const FeedbackLazy = lazy(
  () =>
    new Promise((resolve) => {
      //@ts-ignore
      setTimeout(() => resolve(import("./Feedback")), 0);
    })
);
