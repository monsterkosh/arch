import React from 'react';
import styles from '../../styles/contact.module.css';
import Group6 from '../../assets/Group6.png';

const ContactForm = () => {
  return (
    <div className={styles.contact__form}>
      <h2 className={styles.contact__form_headline}>
        Connect <br />
        with us
      </h2>
      <div className={styles.form__container}>
        <form action='#' id={styles.connect__form}>
          <div className={styles.form__input}>
            <input type='text' placeholder='Name' id='Name' />
            <p className={`${styles.form__error} ${styles.name}`}>
              Can't be empty
            </p>
          </div>
          <div className={styles.form__input}>
            <input type='email' placeholder='Email' id='email' />
            <p className={`${styles.form__error} ${styles.name}`}>
              Can't be empty
            </p>
          </div>
          <div className={styles.form__input}>
            <textarea
              name='message'
              id='Message'
              placeholder='Message'
              cols={30}
              rows={10}
            ></textarea>
            <p className={`${styles.form__error} ${styles.message}`}>
              Can't be empty
            </p>
          </div>
          <div className={styles.button__container}>
            <button type='submit' className={styles.form__button}>
              <img src={Group6} alt='' className={styles.form__arrow} />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
