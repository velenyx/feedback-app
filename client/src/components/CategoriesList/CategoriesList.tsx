import { memo } from "react";
import classNames from "classnames";
import { Skeleton } from "@mui/material";
import type { CategoriesType } from "../../app/store/slice/categories/categoriesTypes";
import { StatusEnum } from "../../@types/global_types";
import { categoryTranslations } from "../../shared/helpers/categoryTranslations";
import { skeletonItem } from "../../shared/config/categoryItems";
import styles from "./CategoriesList.module.scss";

interface ICategorieListProps {
  status: StatusEnum;
  categories: CategoriesType[] | null;
  handleCategoryClick: (category: string) => void;
  selectedCategory: string;
  isOpenCategories: boolean;
}

export const CategoriesList = memo(
  ({
    status,
    categories,
    handleCategoryClick,
    selectedCategory,
    isOpenCategories,
  }: ICategorieListProps) => {
    return (
      <ul
        className={classNames(styles.categoriesList, {
          [styles.isOpen]: isOpenCategories,
        })}
      >
        {status === StatusEnum.loading &&
          skeletonItem.map((_, index) => (
            <div key={index} className={styles.skeleton}>
              <Skeleton variant="rounded" height={16} />
            </div>
          ))}
        {status === StatusEnum.success &&
          categories?.map((item) => (
            <li
              key={item.id}
              onClick={() => handleCategoryClick(item.category)}
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
    );
  }
);
