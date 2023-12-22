import React from 'react';
import styles from './Contact.module.css';

const Contact = () => {
  return (
    <div id="contact" className={styles.contact}>
      <div className="container">
        <h1 className="contact-title">Contact Me</h1>
        <p>felixacarela@protonmail.com</p>
        <p>
          <a href="https://www.linkedin.com/in/felix-carela/" target="_blank" rel="noopener noreferrer">
            <img src="/images/LinkedIn.png" alt="LinkedIn" style={{ maxWidth: '50px' }} />
          </a>
        </p>
        <p>
          <a href="https://github.com/felix-carela" target="_blank" rel="noopener noreferrer">
            <img src="/images/GitHub.png" alt="GitHub" style={{ maxWidth: '50px' }} />
          </a>
        </p>
        <a href="data/Felix Carela Resume.pdf" download className="btn">
          Download Resume
        </a>
      </div>
    </div>
  );
};

export default Contact;
