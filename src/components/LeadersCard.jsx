import React from 'react';
import styles from '../styles/leaders.module.css';

const LeadersCard = ({ image, name, title }) => {
  return (
    <div>
      <div className={styles.leaders__card}>
        <img src={image} alt='' className={styles.leaders__image} />
        <h3 className={styles.leaders__name}>{name}</h3>
        <p className={styles.leaders__title}>{title}</p>
        <i className='fab fa-instagram fa-2x'></i>
        <i className={`fab fa-twitter fa-2x ${styles.twit}`}></i>
      </div>
    </div>
  );
};

export default LeadersCard;
