import { memo } from 'react';
import { Skeleton } from '@mui/material';
import classNames from 'classnames';

import type { CategoriesType } from '../../app/store/slice/categories/categoriesTypes';
import { StatusEnum } from '../../app/store/slice/categories/categoriesTypes';

import { skeletonItem } from '../../shared/config/categoryItems';
import { categoryTranslations } from '../../shared/helpers/categoryTranslations';

import styles from './CategoriesList.module.scss';

interface ICategorieListProps {
  status: StatusEnum;
  categories: CategoriesType[] | null;
  handleCategoryClick: (category: string) => void;
  selectedCategory: string;
  isOpenCategories: boolean;
}

export const CategoriesList = memo(
  ({
    categories,
    handleCategoryClick,
    isOpenCategories,
    selectedCategory,
    status,
  }: ICategorieListProps) => (
    <ul
      className={classNames(styles.categoriesList, {
        [styles.isOpen]: isOpenCategories,
      })}
    >
      {status === StatusEnum.loading &&
        skeletonItem.map((_, index) => (
          <div key={index} className={styles.skeleton}>
            <Skeleton variant='rounded' height={16} />
          </div>
        ))}
      {status === StatusEnum.success &&
        categories?.map(item => (
          <li
            key={item.id}
            onKeyDown={event => {
              if (event.key === 'Enter') {
                handleCategoryClick(item.category);
              }
            }}
            onClick={() => handleCategoryClick(item.category)}
            // eslint-disable-next-line
            role='button'
            tabIndex={0}
            className={classNames(styles.categoryItem, {
              [styles.active]: selectedCategory === item.category,
            })}
          >
            {categoryTranslations(item.category)}
          </li>
        ))}
      {status === StatusEnum.rejected && (
        <li className={styles.error}>Ошибка. Обновите старницу!</li>
      )}
    </ul>
  )
);
