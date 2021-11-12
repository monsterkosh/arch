import React from 'react';
import styles from '../../styles/hero.module.css';

const Hero = () => {
  return (
    <div className={styles.container}>
      {/* VER STILO CONTAINER */}
      <div className={styles.slider}>
        <div className={`${styles.slide} ${styles.current}`}>
          <div className={styles.content}>
            <h1 className={styles.slide__title}>Project</h1>
            <h1 className={`${styles.slide__title} ${styles.two}`}>Paramour</h1>
            <p className={styles.slide__desc}>
              Project made for an art meuseum near Southwest London. Project
              Paramour is a statement of bold, modern architecture.
            </p>
            <a href='/portolio' className={styles.slide__link}>
              See Our Portfolio
            </a>
          </div>
        </div>
        <div className={styles.button} id='prev'>
          <i className={`${styles.fas} ${styles.fa_arrow_left}`}></i>
        </div>
        <div className={styles.button} id='next'>
          <i className={`${styles.fas} ${styles.fa_arrow_right}`}></i>
        </div>
      </div>
    </div>
  );
};

export default Hero;
