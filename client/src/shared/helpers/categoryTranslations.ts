import { categoryItems } from '../config/categoryItems';

export const categoryTranslations = (category: string): string =>
  categoryItems[category] || 'Прочие';
