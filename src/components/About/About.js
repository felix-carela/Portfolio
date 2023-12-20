// src/components/About/About.js

import React from 'react';
import styles from './About.module.css';

const About = () => {
  return (
    <div id="about" className={styles.about}>
      <div className="container">
        <h1 className="sub-title">About</h1>
        <div className={styles.row}>
          <div id="about-col-1" className={styles.aboutCol1}>
            <img src="images/profilePicture.JPG" alt="Profile" />
          </div>
          <div id="about-col-2" className={styles.aboutCol2}>
            <h1>Felix Carela</h1>
            <p>
              I am a Software Engineer who is passionate about solving technical
              and algorithmic problems while thriving in collaborative
              environments. My previous career in the Marine Corps provided me
              with invaluable experiences that honed my ability to maintain
              composure under pressure and collaborate effectively with diverse
              groups, even in unique and challenging circumstances. This
              background has instilled in me a deep commitment to maintaining a
              high level of dependability, which manifests in consistently
              delivering results and adeptly troubleshooting issues as they
              arise. I approach every project with a disciplined, adaptable, and
              innovative mindset, combining my technical expertise with a
              passion for collaborative problem-solving, ensuring the delivery
              of creative solutions and optimal results as a valuable team
              contributor.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
