import React from 'react';
import styles from '../../styles/contact.module.css';
import ContactDetailList from '../contact/ContactDetailList';
import contact from '../../data/contacData';

const ContactDetails = () => {
  return (
    <div className={styles.contact__details}>
      <div className={styles.heritage__divider}></div>
      <div className={styles.contact__details_container}>
        <div className={styles.contact__details_left}>
          <h2 className={styles.contact__details_left_title}>
            Contact <br />
            Details
          </h2>
        </div>
        {contact.map(function (item, id) {
          return (
            <ContactDetailList
              key={id}
              location={item.location}
              mail={item.mail}
              address={item.address}
              phone={item.phone}
            />
          );
        })}
      </div>
      <div className={styles.contact__map}></div>
    </div>
  );
};

export default ContactDetails;
