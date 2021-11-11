import React from 'react';
import styles from '../styles/heritage.module.css';

const Heritage = () => {
  return (
    <div>
      <section className={styles.heritage}>
        <div className={styles.heritage__container}>
          <div className={styles.heritage__left}>
            <div className={styles.heritage__divider}></div>
            <h2 className={styles.heritage__headline}>
              Our <br />
              Heritage
            </h2>
            <div className={styles.heritage__description}>
              Founded in 2007, we started as a trio of architects. Our
              complimentary skills and relentless attention to detail turned
              Arch into one of the most sought after boutique firms in the
              country. <br className={styles.dh1} />
              Speciliazing in Urban Design allowed us to focus on creating
              exceptional structures that live in harmony with their
              surroundings. We consider every detail from every surrounding
              element to inform our designs. <br className={styles.dh1} />
              Our small team of world-class professionals provides input on
              every project.
            </div>
          </div>
          <div className={styles.heritage__right}></div>
        </div>
      </section>
    </div>
  );
};

export default Heritage;
