import { useState } from "react";
import { BiCategoryAlt as CategoryIcon } from "react-icons/bi";
import classNames from "classnames";
import { categoryTranslations } from "../../shared/helpers/categoryTranslations";
import styles from "./Categories.module.scss";

const items = [
  { id: "1", category: "targeting" },
  { id: "2", category: "copywriting" },
  { id: "3", category: "development" },
  { id: "4", category: "seo" },
  { id: "5", category: "it_services" },
  { id: "6", category: "marketing" },
  { id: "7", category: "advertising" },
  { id: "8", category: "smm" },
  { id: "9", category: "design photo" },
  { id: "10", category: "training" },
  { id: "11", category: "beauty_health" },
  { id: "12", category: "sales" },
  { id: "13", category: "tourism_recreation" },
  { id: "14", category: "sport" },
  { id: "15", category: "cleaning" },
  { id: "16", category: "tattoo" },
  { id: "17", category: "repair" },
  { id: "18", category: "construction" },
  { id: "19", category: "nanny" },
  { id: "20", category: "other" },
];
export const Categories = () => {
  const [selectedCategory, setSelectedCategory] = useState("");

  const handleCategoryClick = (category: string): void => {
    setSelectedCategory(category);
  };

  return (
    <nav className={styles.categories}>
      <div className={styles.container}>
        <div className={styles.title}>
          <span>Категории</span>
          <CategoryIcon
            className={classNames({ [styles.activeSvg]: !!selectedCategory })}
          />
        </div>

        <div className={styles.divider}></div>
        <ul className={styles.categoriesList}>
          {items?.map((item) => (
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
        </ul>
      </div>
    </nav>
  );
};
