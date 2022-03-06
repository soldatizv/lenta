import React from "react";
import styles from './News.module.scss';

const News = ({ image, children }) => {
  return (
    <div className={styles.wrapper}>
      <img src={image} alt="news" className={styles.image} />
      <p className={styles.news}>{children}</p>
    </div>
    );
};

export default News;
