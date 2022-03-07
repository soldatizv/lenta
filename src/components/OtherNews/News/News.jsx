import React from "react";
import { useHistory } from "react-router-dom";
import styles from './News.module.scss';

const News = ({ image, route, children }) => {
  const history = useHistory();

  const redirectAndScrollToThePageTop = () => {
    history.push(route);
    window.scroll(0, 0);
  }

  return (
    <div className={styles.wrapper} onClick={redirectAndScrollToThePageTop}>
      <img src={image} alt="news" className={styles.image} />
      <p className={styles.news}>{children}</p>
    </div>
    );
};

export default News;
