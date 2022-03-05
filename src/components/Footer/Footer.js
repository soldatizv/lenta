import React from "react";
import styles from "./Footer.module.css";
import companies from './companies.png'

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.mobile}>
        <p className={styles.limit}>18+</p>
        <p className={styles.text}>
          © 1999 - {new Date().getFullYear()} Все права защищены. <br />
          ООО «Лента.Ру»
        </p>
      </div>
      <div className={styles.desktop}>
        <div>
          <p className={styles.copyright}>
            © 1999 - {new Date().getFullYear()} ООО «Лента.Ру»
            <span className={styles.mistake}>Нашли опечатку? Нажмите Ctrl+Enter</span>
          </p>
        </div>
        <div className={styles.wrapperCompanies}>
          <span>Озвучка материалов</span>
          <img className={styles.companies} src={companies} alt="companies" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
