import React from 'react';
import styles from '../../styles/portfolio.module.css';
import PortfolioCard from './PortfolioCard';
import portfolio from '../../data/portfolioData';

const Portfolio = () => {
  return (
    <div className={styles.portfolio}>
      <div className={styles.portfolio__images_container}>
        {portfolio.map(function (item, id) {
          // console.log(item.class);

          return (
            <PortfolioCard
              key={id}
              classes={item.class}
              title={item.title}
              date={item.date}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Portfolio;
