import React from 'react';
import styles from './Contact.module.css';

const Contact = () => {
  return (
    <div id="contact" className={styles.contact}>
      <div className={styles.container}>
        <div className={styles.leftColumn}>
          <a href="data/Felix Carela Resume.pdf" download className={styles.btn}>
            Download Resume
          </a>
        </div>
        <div className={styles.rightColumn}>
          <div className={styles.contactHeader}>
            <h1 className={styles.contactTitle}>Contact Me:</h1>
            <div className={styles.contactInfo}>
              <p className={styles.email}>felixacarela@protonmail.com</p>
              <div className={styles.socialLinks}>
                <a href="https://www.linkedin.com/in/felix-carela/" target="_blank" rel="noopener noreferrer">
                  <img src="/images/LinkedIn.png" alt="LinkedIn" className={styles.socialIcon} />
                </a>
                <a href="https://github.com/felix-carela" target="_blank" rel="noopener noreferrer">
                  <img src="/images/GitHub.png" alt="GitHub" className={styles.socialIcon} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
