import React from 'react';
import styles from '../styles/navbar.module.css';
import logo from '../assets/logo.svg';

const Navbar = () => {
  return (
    <nav>
      <div className={styles.nav__logo_container}>
        <a href='/home'>
          <img className={styles.logo} src={logo} alt='' />
        </a>
      </div>
      <div className={styles.nav__links_container}>
        <a href='/portfolio' className={styles.nav__link}>
          Portfolio
        </a>
        <a href='/about' className={styles.nav__link}>
          About Us
        </a>
        <a href='/contact' className={styles.nav__link}>
          Contact
        </a>
      </div>
      <div className={styles.hamburger__menu}>
        <div className={`${styles.burger__line} ${styles.line1}`}></div>
        <div className={`${styles.burger__line} ${styles.line2}`}></div>
        <div className={`${styles.burger__line} ${styles.line3}`}></div>
      </div>
    </nav>
  );
};

export default Navbar;
