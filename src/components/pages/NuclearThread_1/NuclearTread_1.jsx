import React from "react";
import mainImage from "./mainImage.png";
import textImage from "./textImage.png";
import { ReactComponent as InfoIcon } from "../../../images/info.svg";
import Button from "../../Button";
import Paragraph from "../../Paragraph/Paragraph";
import OtherNews from "../../OtherNews";
import styles from "./NuclearTread_1.module.scss";
import Quote from "../../Quote";
import news1 from "../../../images/news/news1.png";
import news2 from "../../../images/news/news2.png";
import news3 from "../../../images/news/news3.png";
import news4 from "../../../images/news/news4.png";
import news5 from "../../../images/news/news5.png";
import news6 from "../../../images/news/news6.png";
import { Routes } from '../../routes';

const content = {
  quote: {
    quote: {
      text:
        "Ситуация на Украине беспрецедентна: впервые военный конфликт происходит на территории страны с крупными ядерными объектами. " +
        "Эскалация конфликта может привести к серьезным последствиям для всего мира.",
      author: "Рафаэл Мариано Гросси",
      authorPosition: "Генеральный директор МАГАТЭ",
    },
  },
  otherNews: [
    {
      image: news1,
      text: "Беженцев из Донбасса обязаны принять у себя жители Подмосковья, Москвы",
      route: Routes.refugees,
    },
    {
      image: news2,
      text: "Стало известно, что россияне должны предоставить жилье для беженцев",
      route: Routes.housingForUkrainians,
    },
    {
      image: news3,
      text: 'Социологи рассказали, что население не готово к всеобщей мобилизации',
      route: Routes.mobilizatcia,
    },
    {
      image: news4,
      text: "Всеобщая мобилизация: кого и в какую очередь будут призывать на территории Российской Федерации",
      route: Routes.mobilizatcia_1,
    },
    {
      image: news5,
      text: "В результате операции на Украине повреждены 4 блока Запорожской АЭС. Выбросы радиации могут накрыть всю Евразию",
      route: Routes.nuclearTread,
    },
    {
      image: news6,
      text: 'МАГАТЭ предупредило о угрозе всемирной радиоактивной катастрофы. Россия в зоне наибольшей опасности',
      route: Routes.nuclearTread_1,
    },
  ],
};

// const content = {
//   quote: {
//     text:
//       "Ситуация на Украине беспрецедентна: впервые военный конфликт происходит на территории страны с крупными ядерными объектами. " +
//       "Эскалация конфликта может привести к серьезным последствиям для всего мира.",
//     author: "Рафаэл Мариано Гросси",
//     authorPosition: "Генеральный директор МАГАТЭ",
//   },
//   otherNews: [
//     {
//       image: news1,
//       text: "Стало известно, что россияне должны предоставить жилье для беженцев",
//     },
//     {
//       image: news2,
//       text: "Всеобщая мобилизация: кого и в какую очередь будут призывать на территории Российской Федерации",
//     },
//     {
//       image: news3,
//       text: 'Путин: "10-20 млн россиян, кто потеряют работу в связи с операцией на Украине будут задействованы в оборонпроме"',
//     },
//     {
//       image: news4,
//       text: "Путин на фоне санкций подписал указ о повышении коммунальных платежей и других дополнительных экономических мерах",
//     },
//     {
//       image: news5,
//       text: "Пенсии сократятся на 30-40% в связи с необходимостью финансирования гос бюджета",
//     },
//     {
//       image: news6,
//       text: "Кремль подтвердил возможность введения военного налога.",
//     },
//   ],
// };

const NuclearTread_1 = () => {
  return (
    <>
      <div className={styles.mobileWrapper}>
        <img src={mainImage} className={styles.mainImage} alt="main-img" />
        <h1 className={styles.mobileTitle}>
          МАГАТЭ предупредило о угрозе всемирной радиоактивной катастрофы.
          Россия в зоне наибольшей опасности
        </h1>
      </div>
      <div className={styles.dateWrapper}>
        <p className={styles.date}>
          16:35, 5 марта 2022 <span className={styles.country}>Россия</span>
        </p>
        <InfoIcon />
      </div>
      <div className={styles.desktopWrapper}>
        <p className={styles.date}>
          16:35, 5 марта 2022 <span className={styles.country}>Мир</span>
        </p>
      </div>
      <div className={styles.wrapper}>
        <h1 className={styles.desktopTitle}>
          МАГАТЭ предупредило о угрозе всемирной радиоактивной катастрофы.
          Россия в зоне наибольшей опасности
        </h1>
        <p className={styles.subtitle}>
          4-го марта Россия информировала МАГАТЭ, что ее вооруженные силы взяли
          под контроль территорию вокруг Запорожской атомной электростанции
          Украины, крупнейшей АЭС, на которой находятся 6 из 15 действующих в
          Украине ядерных энергетических реакторов.
        </p>
        <img src={mainImage} alt="main-image" className={styles.desktopImage} />
        <Quote
          className={styles.quote}
          text={content.quote.text}
          author={content.quote.author}
          position={content.quote.authorPosition}
        />
        <p className={styles.text}>
          МАГАТЭ призвала все стороны на Украине воздерживаться от любых
          действий, которые могут поставить под угрозу безопасность ядерных
          материалов и эксплуатацию всех ядерных объектов. Изначально на
          площадке был зафиксирован повышенный уровень радиации, "вероятнее
          всего, из-за движения тяжелой военной техники". Агентство также
          полагает, что этот уровень может повысится из-за пожара 4-го марта.
        </p>
        <img className={styles.image} src={textImage} alt="biezenci" />
        <Paragraph className={styles.firstParagraph}>
          "Безопасность и сохранность ядерных объектов и материалов на Украине
          подвергается серьезной угрозе. В случае военного наступления или
          пожара все человечество может столкнуться с угрозой всемирной
          радиоактивной катастрофы", - говорится в распространенном
          пресс-службой МАГАТЭ заявлении Гросси. Сотрудник станции также
          сообщает, что «Одна ЗАЭС могла быть как шесть Чернобылей».
        </Paragraph>
        <Paragraph>
          Согласно данным метеорологических служб, юг России находится в зоне
          наибольшей опасности из-за преобладания западных ветров на территории
          Украины.
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

export default NuclearTread_1;
