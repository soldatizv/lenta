import React from "react";
import mainImage from "./main-img.png";
import mainImageXl from "./main-image-xl.png";
import imageText from "./image-text.png";
import news1 from "./news1.png";
import news2 from "./news2.png";
import news3 from "./news3.png";
import news4 from "./news4.png";
import news5 from "./news5.png";
import news6 from "./news6.png";
import styles from "./RefugeesFromLDNR.module.css";
import Quote from "../../Quote";
import Button from "../../Button";
import Paragraph from "../../Paragraph/Paragraph";
import OtherNews from "../../OtherNews";

const content = {
  quote: {
    text:
      "Жители Подмосковья и Москвы обязаны предоставить жилье для беженцев. " +
      "Каждый москвич должен зарегистрироваться на сайте “Приют” и отметить на карте жилье, которое готов предоставить беженцам.",
    author: "Владимир Путин",
    authorPosition: "президент Российской Федерации",
  },
  otherNews: [
    {
      image: news1,
      text: "Путин на фоне санкций подписал указ о повышении коммунальных плтажей и других дополнительных экономических мерах",
    },
    {
      image: news2,
      text: "«Единая Россия»: Резкий скачок цен на повышение коммунальных услуг оправдан геополитической ситуацией",
    },
    {
      image: news3,
      text: 'Набиуллина "Реальные доходы граждан России сократятся на 50% весной 2022"',
    },
    {
      image: news4,
      text: "Социологи рассказали, что в среднем население не готово к всеобщей мобилизации",
    },
    {
      image: news5,
      text: "Всеобщая мобилизация: кого и в какую очередь будут призывать на территории Российской Федерации",
    },
    {
      image: news6,
      text: 'Росстат: "В марте-апреле цены на базовы продукты вырастут на 70-80%"',
    },
  ],
};

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
        <img
          src={mainImageXl}
          alt="main-image"
          className={styles.desktopImage}
        />
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
        <Quote
          text={content.quote.text}
          author={content.quote.author}
          position={content.quote.authorPosition}
        />
        <Paragraph className={styles.firstParagraph}>
          Также Путин отметил, что цены на проживание в Москве и областях должны
          оставаться такими, как были в довоенное время.
        </Paragraph>
        <Paragraph>
          “Арендодатель или отель, выставляющий завышенную цену за жилье —
          мародер. О таких случаях сообщайте на Горячую линию города: + 7 (495)
          777-77-77. Проверим и сделаем имена мародеров публичными, а также
          передадим данные в ФСБ.”. - Владимир Путин.'
        </Paragraph>
        <Button
          type="comment"
          wrapperClassName={styles.buttonWrapper}
          className={styles.commentButton}
        >
          Обсудить (57)
        </Button>
      </div>
      <OtherNews className={styles.otherNews} otherNews={content.otherNews} />
    </>
  );
};

export default RefugeesFromLDNR;
