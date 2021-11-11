import React from 'react';
import styles from '../styles/leaders.module.css';
import leaders from '../data/leadersData';
import LeadersCard from './LeadersCard';

const Leaders = () => {
  return (
    <div>
      <section className={styles.leaders}>
        <div className={styles.leaders__container}>
          <h2 className={styles.leaders__left}>
            The <br />
            Leaders
          </h2>
          <div className={styles.leaders__right}>
            <>
              {leaders.map(function (item) {
                return (
                  <LeadersCard
                    image={item.image}
                    name={item.name}
                    title={item.title}
                  />
                );
              })}
            </>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Leaders;
