import React from 'react';
import styles from '../styles/portfolio.module.css';

const PortfolioCard = ({ classes, title, date }) => {
  return (
    <div className={classes}>
      <div className={styles.featured__image_text}>
        <h3>{title}</h3>
        <p>{date}</p>
      </div>
    </div>
  );
};

export default PortfolioCard;
