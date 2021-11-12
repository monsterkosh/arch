import React from 'react';
import styles from '../../styles/contact.module.css';
import blackArrow from '../../assets/black__arrow.png';

const ContactDetailList = ({ location, mail, address, phone }) => {
  return (
    <div className={`${styles.contact__details_list} ${styles.main}`}>
      <div className={styles.contact__details_text}>
        <p className={styles.location}>{location}</p>
        <p className={styles.mail}>Mail: {mail}</p>
        <p className={styles.address}>Address: {address}</p>
        <p className={styles.phone}>Phone: {phone}</p>
      </div>
      <div className={styles.view__container}>
        <span className={styles.view}>View on Map</span>
        <span className={styles.arrow__black}>
          <img src={blackArrow} alt='' />
        </span>
      </div>
    </div>
  );
};

export default ContactDetailList;
