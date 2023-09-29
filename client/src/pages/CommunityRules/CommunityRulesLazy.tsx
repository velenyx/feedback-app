import { lazy } from "react";

export const CommunityRulesLazy = lazy(
  () =>
    new Promise((resolve) => {
      //@ts-ignore
      setTimeout(() => resolve(import("./CommunityRules")), 0);
    })
);
