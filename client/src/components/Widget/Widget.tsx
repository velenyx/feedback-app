import { Link } from 'react-router-dom';

import styles from './Widget.module.scss';

interface IWidgetProps {
  title: string;
  description: string;
  linkTitle: string;
  link: string;
  bgUrl: string;
  bgColor: string;
}
export const Widget = (props: IWidgetProps) => {
  const { bgColor, bgUrl, description, link, linkTitle, title } = props;

  const style = {
    backgroundColor: bgColor,
    backgroundImage: `url(${bgUrl})`,
  };

  return (
    <div className={styles.widget} style={style}>
      <div className={styles.container}>
        <div className={styles.title}>{title}</div>
        <div className={styles.content}>
          <div className={styles.description}>{description}</div>
          <div className={styles.link}>
            <Link to={link}>{linkTitle}</Link>
          </div>
        </div>
      </div>
    </div>
  );
};
