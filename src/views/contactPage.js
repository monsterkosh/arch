import styles from '../styles/contact.module.css';
import blackArrow from '../assets/black__arrow.png';
import Group6 from '../assets/Group6.png';

const ContactPage = () => {
  return (
    <div>
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
      <div className={styles.contact__details}>
        <div className={styles.heritage__divider}></div>
        <div className={styles.contact__details_container}>
          <div className={styles.contact__details_left}>
            <h2 className={styles.contact__details_left_title}>
              Contact <br />
              Details
            </h2>
          </div>

          <div className={`${styles.contact__details_list} ${styles.main}`}>
            <div className={styles.contact__details_text}>
              <p className={styles.location}>Main Office</p>
              <p className={styles.mail}>Mail: archone@mail.com</p>
              <p className={styles.address}>Address: 1892 Chenoweth Drive TN</p>
              <p className={styles.phone}>Phone: 802-456-3451</p>
            </div>
            <div className={styles.view__container}>
              <span className={styles.view}>View on Map</span>
              <span className={styles.arrow__black}>
                <img src={blackArrow} alt='' />
              </span>
            </div>
          </div>
          <div className={`${styles.contact__details_list} ${styles.office}`}>
            <div className={styles.contact__details_text}>
              <p className={styles.location}>Office II</p>
              <p className={styles.mail}>Mail: archtwo@mail.com</p>
              <p className={styles.address}>Address: 3399 Wines Lane TX</p>
              <p className={styles.phone}>Phone: 832-145-4321</p>
            </div>
            <div className={styles.view__container}>
              <span className={styles.view}>View on Map</span>
              <span className={styles.arrow__black}>
                <img src={blackArrow} alt='' />
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.contact__map}></div>
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
                cols='30'
                rows='10'
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
    </div>
  );
};

export default ContactPage;
