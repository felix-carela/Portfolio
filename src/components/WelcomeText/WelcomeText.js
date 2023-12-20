// src/components/WelcomeText/WelcomeText.js

import React from 'react';
import styles from './WelcomeText.module.css';

const WelcomeText = () => {
  return (
    <div id={styles['welcome-text']}>
      <h1>Hello, thank you for visiting. Please take a look around!</h1>
    </div>
  );
};

export default WelcomeText;
