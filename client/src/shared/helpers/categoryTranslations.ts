import { categoryItems } from "../config/categoryItems";

export const categoryTranslations = (category: string): string => {
  return categoryItems[category] || "Прочие";
};
