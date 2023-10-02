type Categories = Record<string, string>;

export const categoryItems: Categories = {
  advertising: 'Реклама',
  beauty_health: 'Красота и здоровье',
  cleaning: 'Клининг',
  construction: 'Строительство',
  copywriting: 'Копирайтинг',
  design_photo: 'Дизайн и фото',
  development: 'Разработка',
  it_services: 'IT-услуги',
  marketing: 'Маркетинг',
  nanny: 'Няня',
  other: 'Прочие',
  repair: 'Ремонт',
  sales: 'Продажи',
  seo: 'SEO',
  smm: 'SMM',
  sport: 'Спорт',
  targeting: 'Таргетинг',
  tattoo: 'Татуировки',
  tourism_recreation: 'Туризм и отдых',
  training: 'Обучение',
} as const;

export const skeletonItem = Array.from({ length: 20 });
