import React from "react";
import mainImage from "./mainImage.png";
import textImage from "./textImage.png";
import news1 from "./news1.png";
import news2 from "./news2.png";
import news3 from "./news3.png";
import news4 from "./news4.png";
import news5 from "./news5.png";
import news6 from "./news6.png";
import Button from "../../Button";
import Paragraph from "../../Paragraph/Paragraph";
import OtherNews from "../../OtherNews";
import styles from "./GeneralMobilizacia.module.scss";

const content = {
  otherNews: [
    {
      image: news1,
      text: '"С полок магазинов Екатеринбурга, Новоссибирска, Казани и Челябинска скоро исчезнут привычные жителям продукты"',
    },
    {
      image: news2,
      text: "Депутат Единой России внес законопроект о всероссийской трудовой военной обязанности",
    },
    {
      image: news3,
      text: "До 50% рабочих мест исчезнет в России уже весной в связи с новыми санкциями Запада",
    },
    {
      image: news4,
      text: 'Путин: "Военное положение обязывает граждан платить за хлеб и масло вдвое больше обычного"',
    },
    {
      image: news5,
      text: 'Путин: "10-20 млн россиян, кто потеряют работу в связи с операцией на Украине будут задействованы в оборонпроме"',
    },
    {
      image: news6,
      text: "«Единая Россия»: Резкий скачок цен на повышение коммунальных услуг оправдан геополитической ситуацией",
    },
  ],
};

const GeneralMobilizacia = () => {
  return (
    <>
      <div className={styles.mobileWrapper}>
        <img src={mainImage} className={styles.mainImage} alt="main-img" />
        <h1 className={styles.mobileTitle}>
          Социологи рассказали, что население не готово к всеобщей мобилизации
        </h1>
        <p className={styles.date}>
          16:27, 4 марта 2022 <span className={styles.country}>Россия</span>
        </p>
      </div>
      <div className={styles.desktopWrapper}>
        <p className={styles.date}>
          23:54, 4 марта 2022 <span className={styles.country}>Мир</span>
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

export default GeneralMobilizacia;
