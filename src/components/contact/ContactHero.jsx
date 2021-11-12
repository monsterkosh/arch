import React from 'react';
import styles from '../../styles/contact.module.css';

const ContactHero = () => {
  return (
    <div className={styles.contact__hero}>
      <div className={styles.contact__hero_container}>
        <div className={styles.contact__hero_left}>
          <div className={styles.contact__hero_left_block}></div>
        </div>
        <div className={styles.contact__hero_right}>
          <h1 className={styles.contact__headline_large}>Contact</h1>
          <div className={styles.contact__separator}></div>
          <h2 className={styles.contact__right_headline}>
            Tell us about <br />
            your project
          </h2>
          <p className={styles.contact__hero_right_description}>
            We’d love to hear more about your project. Please, leave a message
            below or give us a call. We have two offices, one in Texas and one
            in Tennessee. If you find yourself nearby, come say hello!
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContactHero;
