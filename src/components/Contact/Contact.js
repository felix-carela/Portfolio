// src/components/Contact/Contact.js

import React from 'react';
import styles from './Contact.module.css';

const Contact = () => {
  return (
    <div id="contact" className={styles.contact}>
      <div className="container">
        <h1 className="sub-title">Contact Me</h1>
        <p>felixacarela@protonmail.com</p>
        <p>
          <a href="https://www.linkedin.com/in/felix-carela/" target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
        </p>
        <p>
          <a href="https://github.com/felix-carela" target="_blank" rel="noopener noreferrer">
            GitHub
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
