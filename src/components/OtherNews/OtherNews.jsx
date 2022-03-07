import React from "react";
import cn from "classnames";
import News from "./News";
import styles from "./OtherNews.module.scss";

const OtherNews = ({ otherNews, className }) => {
  return (
    <div className={cn(styles.container, className)}>
      <h5 className={styles.title}>Другие новости</h5>
      <div className={styles.containerWrapper}>
        {otherNews.map(({ image, text, route }) => (
          <News image={image} key={text} route={route}>{text}</News>
        ))}
      </div>
    </div>
  );
};

export default OtherNews;
