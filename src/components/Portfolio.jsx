import React from 'react';
import styles from '../styles/portfolio.module.css';
import PortfolioCard from './PortfolioCard';

const Portfolio = () => {
  return (
    <div className={styles.portfolio}>
      <div className={styles.portfolio__images_container}>
        <PortfolioCard
          classes={`${styles.featured__image_card} ${styles.seraph}`}
          title={'Seraph Station'}
          date={'September 2019'}
        />
        <PortfolioCard
          classes={`${styles.featured__image_card} ${styles.eebox}`}
          title={'Eebox Building'}
          date={'August 2017'}
        />
        <PortfolioCard
          classes={`${styles.featured__image_card} ${styles.federal}`}
          title={'Federal II Tower'}
          date={'March 2017'}
        />
        <PortfolioCard
          classes={`${styles.featured__image_card} ${styles.sol}`}
          title={'Project Del Sol'}
          date={'January 2016'}
        />
        <PortfolioCard
          classes={`${styles.featured__image_card} ${styles.proto}`}
          title={'Le Prototype'}
          date={'October 2015'}
        />
        <PortfolioCard
          classes={`${styles.featured__image_card} ${styles.arch}`}
          title={'2288 Tower'}
          date={'April 2015'}
        />
        <PortfolioCard
          classes={`${styles.featured__image_card} ${styles.hotel}`}
          title={'Grand Edelweiss Hotel'}
          date={'December 2013'}
        />
        <PortfolioCard
          classes={`${styles.featured__image_card} ${styles.netcry}`}
          title={'Netcry Tower'}
          date={'August 2012'}
        />
        <PortfolioCard
          classes={`${styles.featured__image_card} ${styles.hypers}`}
          title={'Hypers'}
          date={'January 2012'}
        />
        <PortfolioCard
          classes={`${styles.featured__image_card} ${styles.v}`}
          title={'SXIV Tower'}
          date={'March 2011'}
        />
        <PortfolioCard
          classes={`${styles.featured__image_card} ${styles.trinity}`}
          title={'Trinity Bank Tower'}
          date={'September 2010'}
        />
        <PortfolioCard
          classes={`${styles.featured__image_card} ${styles.paramour}`}
          title={'Project Paramour'}
          date={'February 2008'}
        />
      </div>
    </div>
  );
};

export default Portfolio;
