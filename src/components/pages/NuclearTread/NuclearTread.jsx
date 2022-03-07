import React from "react";
import mainImage from "./mainImage.png";
import textImage from "./textImage.png";
import { ReactComponent as InfoIcon } from "../../../images/info.svg";
import news1 from "./news1.png";
import news2 from "./news2.png";
import news3 from "./news3.png";
import news4 from "./news4.png";
import news5 from "./news5.png";
import news6 from "./news6.png";
import video from "../../../video/military.mp4";
import Button from "../../Button";
import Paragraph from "../../Paragraph/Paragraph";
import OtherNews from "../../OtherNews";
import styles from "./NuclearTread.module.scss";
import Quote from "../../Quote";

const content = {
  quote: {
    text: "В России весьма совершенная система мониторинга, и каких-либо чрезвычайных ситуаций не фиксировалось - только лишь определенные колебания. " +
    "Были соответствующие заявления МАГАТЭ, но по нашему мнению уровень радиации не представляет слишком серьезную угрозу для жизни населения",
    author: "Дмитрий Песков",
    authorPosition: "пресс-секретарь президента Российской Федерации",
  },
  otherNews: [
    {
      image: news1,
      text: "Шойгу объявил, что 40% русских зарплат пойдут на нужды армии",
    },
    {
      image: news2,
      text: "Лавров заявил о возможном введении налога на армию. Зарплаты станут еще меньше",
    },
    {
      image: news3,
      text: "Жителей России обяжут перевести часть зарплаты на нужды вооруженных сил",
    },
    {
      image: news4,
      text: "У президента заявили об огромных затратах на армию. Возможны урезания зарплат для пополнения бюджета.",
    },
    {
      image: news5,
      text: "Военный налог: часть доходов россиян пойдет на финансирование армии",
    },
    {
      image: news6,
      text: "Кремль подтвердил возможность введения военного налога.",
    },
  ],
};

const NuclearTread = () => {
  return (
    <>
      <div className={styles.mobileWrapper}>
        <img src={mainImage} className={styles.mainImage} alt="main-img" />
        <h1 className={styles.mobileTitle}>
          В результате операции на Украине повреждены 4 блока Запорожской АЭС.
          Выбросы радиации могут накрыть всю Евразию
        </h1>
      </div>
      <div className={styles.dateWrapper}>
        <p className={styles.date}>
          08:45, 5 марта 2022 <span className={styles.country}>Россия</span>
        </p>
        <InfoIcon />
      </div>
      <div className={styles.desktopWrapper}>
        <p className={styles.date}>
          08:45, 5 марта 2022 <span className={styles.country}>Мир</span>
        </p>
      </div>
      <div className={styles.wrapper}>
        <h1 className={styles.desktopTitle}>
          В результате операции на Украине повреждены 4 блока Запорожской АЭС.
          Выбросы радиации могут накрыть всю Евразию
        </h1>
        <p className={styles.subtitle}>
          В ночь с 3 на 4 марта в рамках спецоперации на Украине войска России
          осуществили военное наступление на Запорожскую АЭС в городе Энергодар.
        </p>
        <img src={mainImage} alt="main-image" className={styles.desktopImage} />
        <p className={styles.text}>
          Это крупнейшая атомная электростанция Европы и девятая по мощности в
          мире. Помимо энергоблоков на ЗАЭС хранится 5000 тонн отработанного
          ядерного топлива. Он находится в герметичных контейнерах американского
          производства на территории станции. До 2004 года топливо отправляли на
          переработку в российский Красноярск.
          <br />
          <br />
          Во время штурма объекта на территории велись бои, а российский снаряд
          попал в здание административного корпуса, нанеся существенные
          повреждения по 4 центральным энергоблокам станции. Повреждение первого
          блока вызвало пожар – загорелась дизель-генераторная установка.
        </p>
        <img className={styles.image} src={textImage} alt="biezenci" />
        <Paragraph className={styles.firstParagraph}>
          Согласно метеоданным, в ближайшие дни в этом районе преобладают
          западные и северо-западные ветры. Это значит, что в случае ядерного
          взрыва, радиоактивную пыль отнесет в сторону России. Под угрозой в
          первую очередь находятся Краснодарский и Ставропольский край, а также
          Ростовская область.
        </Paragraph>
        <Paragraph>
          Согласно данным украинской стороны - утечки радиоактивных элементов
          пока что не наблюдается.
        </Paragraph>
        <Quote
          text={content.quote.text}
          author={content.quote.author}
          position={content.quote.authorPosition}
        />
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

export default NuclearTread;
