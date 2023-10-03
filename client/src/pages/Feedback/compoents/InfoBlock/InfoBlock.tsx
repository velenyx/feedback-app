import { LuCalendarCheck2 as DateIcon } from "react-icons/lu";
import { BiCategoryAlt as CategoryIcon } from "react-icons/bi";
import { BsStar as RatingIcon } from "react-icons/bs";
import { AiOutlineFundView as ViewsIcon } from "react-icons/ai";
import { GoCommentDiscussion as CommentsIcon } from "react-icons/go";
import { FaRegUser as UserIcon } from "react-icons/fa";
import { IoPhonePortraitOutline as PhoneIcon } from "react-icons/io5";
import { HiOutlineMail as EmailIcon } from "react-icons/hi";
import { AiOutlineLink as LinksIcon } from "react-icons/ai";
import { ImEarth as CountryIcon } from "react-icons/im";
import type { FeedbackType } from "../../../../@types/global_types";
import { formatDate } from "../../../../shared/helpers/formatDate";
import { categoryTranslations } from "../../../../shared/helpers/categoryTranslations";
import styles from "./InfoBlock.module.scss";

interface IInfoProps {
  feedback: FeedbackType;
}

export const InfoBlock = ({ feedback }: IInfoProps) => {
  return (
    <div className={styles.infoWrapper}>
      <section className={styles.block}>
        <ul className={styles.data}>
          <li>
            <DateIcon />
            <span>Дата отзыва:</span>
            <time>{formatDate(feedback.created_date)}</time>
          </li>
          <li>
            <CategoryIcon />
            <span>Категория:</span>
            {categoryTranslations(feedback.category)}
          </li>
          <li>
            <RatingIcon />
            <span>Рейтинг:</span>
            {feedback.rating}
          </li>
          <li>
            <ViewsIcon />
            <span>Просмотры:</span>
            {feedback.views}
          </li>
          <li>
            <CommentsIcon />
            <span>Комментарии:</span>
            {feedback.commentsCount}
          </li>
        </ul>
      </section>

      <section className={styles.block}>
        <ul className={styles.data}>
          <li>
            <UserIcon />
            <span>ФИО:</span>
            {feedback.client.name}
          </li>
          <li>
            <PhoneIcon />
            <span>Телефон:</span>
            {<a href={`tel:${feedback.client.phone}`}>{feedback.client.phone}</a> ||
              "Нет данных"}
          </li>
          <li>
            <EmailIcon />
            <span>Почта:</span>
            {feedback.client.email || "Нет данных"}
          </li>
          <li>
            <LinksIcon />
            <span>Соц. сети:</span>
            {feedback.client.social_links?.map((link, index) => (
              <a key={index} href={link} target="_black">
                Ссылка {index + 1},
              </a>
            ))}
          </li>
          <li>
            <CountryIcon />
            <span>Страна:</span>
            {feedback.client.country}
          </li>
        </ul>
      </section>
    </div>
  );
};
