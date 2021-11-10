import React from 'react';
import styles from '../styles/welcome.module.css';
import welcomeImage from '../assets/home/desktop/image-welcome.jpg';

const Welcome = () => {
  return (
    <div className={styles.welcome}>
      <h2 className={styles.welcome__title}>Welcome</h2>
      <div className={styles.welcome__contents}>
        <div className={styles.welcome__contents_left}>
          <h2 className={styles.welcome__heading}>
            Welcome to <br />
            Arch Studio
          </h2>
          <p className={styles.welcome__description}>
            Welcome to Arch Studio We have a unique network and skillset to help
            bring your projects to life. Our small team of highly skilled
            individuals combined with our large network put us in a strong
            position to deliver exceptional results. <br />
            <br />
            Over the past 10 years, we have worked on all kinds of projects.
            From stations to high-rise buildings, we create spaces that inspire
            and delight. <br />
            <br />
            We work closely with our clients so that we understand the
            intricacies of each project. This allows us to work in harmony the
            surrounding area to create truly stunning projects that will stand
            the test of time.
          </p>
        </div>
        <div className={styles.welcome__contents_right}>
          <img
            src={welcomeImage}
            alt=''
            className={styles.welcome__right_img}
          />
        </div>
      </div>
    </div>
  );
};

export default Welcome;
