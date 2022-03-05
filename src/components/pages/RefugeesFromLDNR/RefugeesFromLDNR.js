import React from "react";
import mainImage from "./main-img.png";
import mainImageXl from "./main-image-xl.png";
import imageText from "./image-text.png";
import styles from "./RefugeesFromLDNR.module.css";

const RefugeesFromLDNR = () => {
  return (
    <>
      <div className={styles.mobileWrapper}>
        <img src={mainImage} className={styles.mainImage} alt="main-img" />
        <h1 className={styles.mobileTitle}>
          Беженцев из Донбасса обязаны принять у себя жители Подмосковья,
          Москвы.
        </h1>
        <p className={styles.date}>
          15:23, 3 марта 2022 <span className={styles.country}>Россия</span>
        </p>
      </div>
      <div className={styles.desktopWrapper}>
        <p className={styles.date}>
          23:44, 3 марта 2022 <span className={styles.country}>Мир</span>
        </p>
      </div>
      <div className={styles.wrapper}>
        <h1 className={styles.desktopTitle}>
          Беженцев из Донбасса обязаны принять у себя жители Подмосковья,
          Москвы.
        </h1>
        <p className={styles.subtitle}>
          Вот уже несколько дней в Россию с территорий ДНР и ЛНР прибывают
          беженцы. Люди бросили свои дома, все, что было нажито годами. Сейчас
          на кону жизнь и они вынуждены искать убежища на территории РФ.
        </p>
        <img src={mainImageXl} alt="main-image" className={styles.desktopImage} />
        <p className={styles.text}>
          Большинство беженцев из Донбасса прибывают в Подмосковье и Москву.
          Власти объявили о готовности принять людей. Их расселяют в санаториях
          и детских оздоровительных лагерях, обеспечивают всем необходимым.
          <br />
          <br />
          Владимир Путин обратил внимание, — “Жители Подмосковья и Москвы
          обязаны предоставить жилье для беженцев. Каждый москвич должен
          зарегистрироваться на сайте “Приют” и отметить на карте жилье, которое
          готов предоставить беженцам.
        </p>
        <img className={styles.image} src={imageText} alt="girl" />
        <p className={styles.text}>
          Случай с украинскими беженцами – особый. Они нам не чужие. Люди
          старшего поколения хорошо помнят наше общее государство, когда
          иностранцами для нас были исключительно заокеанские и
          западноевропейские граждане.”
        </p>
      </div>
    </>
  );
};

export default RefugeesFromLDNR;
