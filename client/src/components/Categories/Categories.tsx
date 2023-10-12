import { useCallback, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import classNames from "classnames";
import { BiCategoryAlt as CategoryIcon } from "react-icons/bi";
import { CategoriesList } from "../CategoriesList/CategoriesList";
import { useAppDispatch } from "../../app/store";
import {
  selectCategories,
  setCategory,
} from "../../app/store/slice/categories/categoriesSlice";
import { fetchCategories } from "../../app/store/slice/categories/categoriesThunk";
import styles from "./Categories.module.scss";

export const Categories = () => {
  const dispatch = useAppDispatch();
  const { categories, status } = useSelector(selectCategories);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [isOpenCategories, setIsOpenCategories] = useState(false);

  const handleIsOpen = () => {
    setIsOpenCategories((prev) => !prev);
  };
  const handleCategoryClick = useCallback((category: string): void => {
    setSelectedCategory(category);
    setIsOpenCategories(false);
    dispatch(setCategory(category));
  }, []);

  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);

  return (
    <aside className={styles.categories}>
      <nav className={styles.container}>
        <div className={styles.title}>
          <span>Категории</span>

          <CategoryIcon
            onClick={handleIsOpen}
            className={classNames({ [styles.activeSvg]: isOpenCategories })}
          />
        </div>
        <div className={styles.divider}></div>

        <CategoriesList
          status={status}
          categories={categories}
          handleCategoryClick={handleCategoryClick}
          selectedCategory={selectedCategory}
          isOpenCategories={isOpenCategories}
        />
      </nav>
    </aside>
  );
};
