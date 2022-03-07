import React from "react";
import mainImage from "./mainImage.png";
import textImage from "./textImage.png";
import { ReactComponent as InfoIcon } from "../../../images/info.svg";
import video from '../../../video/economyRF.mp4';
import Button from "../../Button";
import Paragraph from "../../Paragraph/Paragraph";
import OtherNews from "../../OtherNews";
import styles from "./GeneralMobilizacia.module.scss";
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
    text:
      "Главное для нас - отстоять интересы правительства Российской Федерации. " +
      "Для этого мы готовы задействовать все имеющиеся ресурсы. Мы готовы идти до конца даже если это потребует всеобщей мобилизации населения",
    author: "Сергей Шойгу",
    authorPosition: "министр обороны Российской Федерации",
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
//       "Главное для нас - отстоять интересы правительства Российской Федерации. " +
//       "Для этого мы готовы задействовать все имеющиеся ресурсы. Мы готовы идти до конца даже если это потребует всеобщей мобилизации населения",
//     author: "Сергей Шойгу",
//     authorPosition: "министр обороны Российской Федерации",
//   },
//   otherNews: [
//     {
//       image: news1,
//       text: 'Шойгу объявил, что 40% русских зарплат пойдут на нужды армии',
      
//     },
//     {
//       image: news2,
//       text: "Лавров заявил о возможном введении налога на армию. Зарплаты станут еще меньше",
//     },
//     {
//       image: news3,
//       text: "Жителей России обяжут перевести часть зарплаты на нужды вооруженных сил",
//     },
//     {
//       image: news4,
//       text: 'У президента заявили об огромных затратах на армию. Возможны урезания зарплат для пополнения бюджета.',
//     },
//     {
//       image: news5,
//       text: 'Военный налог: часть доходов россиян пойдет на финансирование армии',
//     },
//     {
//       image: news6,
//       text: "Кремль подтвердил возможность введения военного налога.",
//     },
//   ],
// };

const GeneralMobilizacia = () => {
  return (
    <>
    <div className={styles.mobileWrapper}>
        <img src={mainImage} className={styles.mainImage} alt="main-img" />
        <h1 className={styles.mobileTitle}>
          Социологи рассказали, что население не готово к всеобщей мобилизации
        </h1>
      </div>
      <div className={styles.dateWrapper}>
        <p className={styles.date}>
          00:54, 5 марта 2022 <span className={styles.country}>Россия</span>
        </p>
        <InfoIcon />
      </div>
      <div className={styles.desktopWrapper}>
        <p className={styles.date}>
          00:54, 5 марта 2022 <span className={styles.country}>Мир</span>
        </p>
      </div>
      <div className={styles.wrapper}>
        <h1 className={styles.desktopTitle}>
          Социологи рассказали, что население не готово к всеобщей мобилизации
        </h1>
        <p className={styles.subtitle}>
          Жители Москвы оказались не готовы к поддержанию наступления на
          Украину. Данные следуют из результатов исследования Российского
          общества социологов (РОС)
        </p>
        <img src={mainImage} alt="main-image" className={styles.desktopImage} />
        <p className={styles.text}>
          В результате проведенного исследования оказалось, что более чем 90%
          жителей столицы не готовы к ведению полномасштабного наступления на
          Украину - ни сейчас, ни в краткосрочной перспективе.
        </p>
        <img className={styles.image} src={textImage} alt="biezenci" />
        <Quote
          text={content.quote.text}
          author={content.quote.author}
          position={content.quote.authorPosition}
        />
        <Paragraph className={styles.firstParagraph}>
          Также, результаты исследования указывают на то, что в среднем 77.5%
          населения очень взволнованы накалившейся обстановкой вокруг обсуждений
          всеобщей мобилизации. Более половины респондентов заявили, что
          несмотря на то, что дискуссия все еще ведется они готовы рассмотреть
          выезд из страны как инструмент избежания призыва для себя или своих
          ближайших родственников.
        </Paragraph>
        <Paragraph>
          Традиционно, наиболее “скептичными” к милитаризму стали центальные и
          западные регионы России. В отдельных городах более 95% населения
          возрастной категории 18-40 лет отметили, что не готовы участвовать в
          боевых действиях даже в условиях прямой угрозы для дружественных
          государств Евразийского экономического союза.
        </Paragraph>
        <Paragraph>
          В заключении, следует отметить, что массовые выезды граждан страны
          могут привести к стремительному падению экономики, что в свое время
          скажется на значительном ухудшении уровне жизни граждан России.
        </Paragraph>
        <video src={video} className={styles.video} type="video/mp4" controls/>
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

export default GeneralMobilizacia;
