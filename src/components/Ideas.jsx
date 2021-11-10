import React from 'react';
import styles from '../styles/ideas.module.css';
import group6Image from '../assets/Group6.png';

const Ideas = () => {
  return (
    <div className={styles.ideas}>
      <div className={styles.ideas__contents}>
        <h2 className={styles.ideas__headline}>
          Small team, <br />
          big ideas
        </h2>
        <a href='/about' className={styles.ideas__link}>
          About Us
          <span className={styles.arrow}>
            <img src={group6Image} alt='arrow' />
          </span>
        </a>
      </div>
    </div>
  );
};

export default Ideas;
