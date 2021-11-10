import React from 'react';
import styles from '../styles/footer.module.css';
import logoImg from '../assets/logo.svg';

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.footer__left}>
        <a href='/'>
          <img src={logoImg} alt='' className={styles.footer__logo} />
        </a>
      </div>
      <div className={styles.footer__links}>
        <a href='/portfolio' className={styles.footer__link}>
          Portfolio
        </a>
        <a href='/about' className={styles.footer__link}>
          About Us
        </a>
        <a href='/contact' className={styles.footer__link}>
          Contact
        </a>
        <div className={styles.footer__button}>See Our Portfolio</div>
      </div>
    </div>
  );
};

export default Footer;
