import React from 'react';
import styles from '../styles/featured.module.css';
import group6Image from '../assets/Group6.png';

const Featured = () => {
  return (
    <div className={styles.featured}>
      <div className={styles.featured__title_container}>
        <h2 className={styles.featured__title}>Featured</h2>
        <a href='##' className={styles.featured__button}>
          See All
          <span className={styles.arrow}>
            <img src={group6Image} alt='white arrow' />
          </span>
        </a>
      </div>
      <div className={styles.featured__images_container}>
        <div className={`${styles.featured__image_card} ${styles.sol}`}>
          <div className={styles.featured__image_text}>
            <h3>Project Del Sol</h3>
            <p>View All Projects</p>
            <div className={styles.featured__card_number}>1</div>
            <div className={styles.featured__number}></div>
          </div>
        </div>
        <div className={`${styles.featured__image_card} ${styles.tower}`}>
          <div className={styles.featured__image_text}>
            <h3>228B Tower</h3>
            <p>View All Projects</p>
            <div className={styles.featured__card_number}>2</div>
          </div>
        </div>
        <div className={`${styles.featured__image_card} ${styles.proto}`}>
          <div className={styles.featured__image_text}>
            <h3>Le Prototype</h3>
            <p>View All Projects</p>
            <div className={styles.featured__card_number}>3</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featured;
