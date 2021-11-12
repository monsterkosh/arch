import React from 'react';
import styles from '../../styles/about.module.css';

const About = () => {
  return (
    <div>
      <section className={styles.about__hero}>
        <div className={styles.about__hero_container}>
          <div className={styles.about__hero_left}>
            <div className={styles.about__hero_left_block}></div>
          </div>
          <div className={styles.about__hero_right}>
            <h1 className={styles.about__headline_large}>About</h1>
            <div className={styles.about__separator}></div>
            <h2 className={styles.about__right_headline}>
              Your team of <br />
              professionals
            </h2>
            <p className={styles.about__hero_right_description}>
              Our small team of world-class professionals will work with you
              every step of the way. Strong relationships are at the core of
              everything we do. This extends to the relationship our projects
              have with their surroundings.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
