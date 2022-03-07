import React from "react";
import mainImage from "./mainImage.png";
import imageText from "./textImage.png";
import { ReactComponent as InfoIcon } from "../../../images/info.svg";
import styles from "./HousingForUkrainians.module.scss";
import Button from "../../Button";
import Paragraph from "../../Paragraph/Paragraph";
import OtherNews from "../../OtherNews";
import BoldSubtitle from "../../BoldSubtitle";
import news1 from "../../../images/news/news1.png";
import news2 from "../../../images/news/news2.png";
import news3 from "../../../images/news/news3.png";
import news4 from "../../../images/news/news4.png";
import news5 from "../../../images/news/news5.png";
import news6 from "../../../images/news/news6.png";
import { Routes } from '../../routes';

const content = {
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
//   otherNews: [
//     {
//       image: news1,
//       text: '"С полок магазинов Екатеринбурга, Новоссибирска, Казани и Челябинска скоро исчезнут привычные жителям продукты"',
//     },
//     {
//       image: news2,
//       text: "Депутат Единой России внес законопроект о всероссийской трудовой военной обязанности",
//     },
//     {
//       image: news3,
//       text: "До 50% рабочих мест исчезнет в России уже весной в связи с новыми санкциями Запада",
//     },
//     {
//       image: news4,
//       text: 'Путин: "Военное положение обязывает граждан платить за хлеб и масло вдвое больше обычного"',
//     },
//     {
//       image: news5,
//       text: 'Путин: "10-20 млн россиян, кто потеряют работу в связи с операцией на Украине будут задействованы в оборонпроме"',
//     },
//     {
//       image: news6,
//       text: "«Единая Россия»: Резкий скачок цен на повышение коммунальных услуг оправдан геополитической ситуацией",
//     },
//   ],
// };

const HousingForUkrainians = () => {
  return (
    <>
      <div className={styles.mobileWrapper}>
        <img src={mainImage} className={styles.mainImage} alt="main-img" />
        <h1 className={styles.mobileTitle}>
          Стало известно, что россияне должны предоставить жилье для беженцев.
        </h1>
      </div>
      <div className={styles.dateWrapper}>
        <p className={styles.date}>
          16:27, 4 марта 2022 <span className={styles.country}>Россия</span>
        </p>
        <InfoIcon />
      </div>
      <div className={styles.desktopWrapper}>
        <p className={styles.date}>
          16:27, 4 марта 2022 <span className={styles.country}>Мир</span>
        </p>
      </div>
      <div className={styles.wrapper}>
        <h1 className={styles.desktopTitle}>
          Стало известно, что россияне должны предоставить жилье для беженцев.
        </h1>
        <p className={styles.subtitle}>
          В России заработал сайт «Приют» для украинских граждан, которые были
          вынуждены покинуть свои дома из-за войны и выехать в более безопасные
          места.
        </p>
        <img src={mainImage} alt="main-image" className={styles.desktopImage} />
        <p className={styles.text}>
          «Жители России обязаны помочь своим соотечественникам. Россияне должны
          разделить жилье со своими братьями.», — объясняет Сергей Шойгу.
          <br />
          <br />
          Все жители России обязаны зарегистрироваться в проекте и отметить на
          карте жилье, которое готовы предоставить беженцам.
        </p>
        <img className={styles.image} src={imageText} alt="biezenci" />
        <BoldSubtitle className={styles.paragraphTitle}>
          Ситуация критическая
        </BoldSubtitle>
        <p className={styles.text}>
          Россияне, еще год назад искренне предлагавшие бескорыстную помощь
          братскому народу, сегодня столкнулись с серьезными затруднениями. Все
          дело в том, что людям, бегущим от войны, нужна помощь не «для
          галочки». Увы, реальную помощь готовы оказать далеко не все.
        </p>
        <Paragraph>
          Многие жители регионов, где украинцев, прибывших с Донбасса,
          достаточно много, обращаются к органам правопорядка за защитой.
          Вызвано это тем, что граждане Украины порой ведут себя несколько
          неадекватно и нередко нападают на россиян.
        </Paragraph>
        <Paragraph>
          Несмотря на переживания жителей РФ, Путин заявил: “Беженцам нужно
          помогать, они оказались в ситуации, в которой им нужна помощь. Это и
          наши граждане и граждане Украины. Когда мы говорим, что мы несем
          ответственность за русский мир, мы поддерживаем русский мир; вот,
          пожалуйста, это часть русского мира, это люди, которые оказались в
          тяжелейшей ситуации. Им требуется помощь, и она сейчас оказывается,
          причем не только государством. И это очень важно.”.
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

export default HousingForUkrainians;
