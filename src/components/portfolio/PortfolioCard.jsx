import React from 'react';
import styles from '../../styles/portfolio.module.css';

const PortfolioCard = ({ classes, title, date }) => {
  // console.log(classes);

  return (
    <div className={`${styles.featured__image_card} ${styles.v}`}>
      <div className={styles.featured__image_text}>
        <h3>{title}</h3>
        <p>{date}</p>
      </div>
    </div>
  );
};

export default PortfolioCard;
