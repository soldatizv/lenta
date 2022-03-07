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
import video from '../../../video/military.mp4';
import Button from "../../Button";
import Paragraph from "../../Paragraph/Paragraph";
import OtherNews from "../../OtherNews";
import styles from "./GeneralMobilizacia1.module.scss";
import Quote from "../../Quote";

const content = {
  quote: {
    text:
      "Мобилизацию провести в центральном и западных военных округах Российской Федерации. " +
      "Призыв военнообязанных, резервистов и привлечение транспортных средств для обеспечения нужд военных формирований поручено осуществить в объемах, определенных в соответствии с мобилизационными планами.",
    author: "Владимир Путин",
    authorPosition: "президент Российской Федерации",
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

const GeneralMobilizacia1 = () => {
  return (
    <>
      <div className={styles.mobileWrapper}>
        <img src={mainImage} className={styles.mainImage} alt="main-img" />
        <h1 className={styles.mobileTitle}>
          Всеобщая мобилизация: кого и в какую очередь будут призывать на
          территории Российской Федерации
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
          Всеобщая мобилизация: кого и в какую очередь будут призывать на
          территории Российской Федерации
        </h1>
        <p className={styles.subtitle}>
          Президент России Владимир Путин в связи с решением укрепить позиции на
          ключевых направлениях наступления объявит в стране всеобщую
          мобилизацию начиная с 13 марта.
        </p>
        <img src={mainImage} alt="main-image" className={styles.desktopImage} />
        <p className={styles.text}>
          Лента рассказывает, какие группы населения и в какую очередь будут
          призывать.
          <br />
          <br />
          Первыми под мобилизацию попадает оперативный резерв — бывшие
          военнослужащие до 40 лет, имеющие боевой опыт. Вторыми –
          военнослужащие, которые проходили срочную службу до 2014 года или
          служили по контракту.
        </p>
        <img className={styles.image} src={textImage} alt="biezenci" />
        <Paragraph className={styles.firstParagraph}>
          В третью очередь будут призывать мобилизационный резерв —
          военнообязанных граждан, окончивших военные кафедры вузов в качестве
          офицеров запаса и не призывавшихся во время предыдущих мобилизационных
          кампаний
        </Paragraph>
        <Paragraph>
          Ожидается, что все три волны мобилизации пройдут в марте-апреле 2022
          года.
        </Paragraph>
        <Quote
          text={content.quote.text}
          author={content.quote.author}
          position={content.quote.authorPosition}
        />
        <Paragraph className={styles.firstParagraph}>
          Далее, при необходимости, мобилизация распространяется на общественный
          резерв — других граждан, которые не имеют возрастных и физических
          ограничений для призыва на военную службу и могут быть привлечены для
          комплектования Вооруженных Сил и других военных формирований
          исключительно в особый период.
        </Paragraph>
        <Paragraph>
          Отметим, что мобилизация проводится в центральной и западной части
          Российской Федерации и, предположительно, продлится 90 дней.
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

export default GeneralMobilizacia1;
