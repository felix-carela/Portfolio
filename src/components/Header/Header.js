// src/components/Header/Header.js

import React from 'react';
import styles from './Header.module.css';

const Header = () => {
  return (
    <div className={styles.header}>
      <div className="container" id="section">
        <nav>
          <ul id="menu">
            <li><a href="#about"><span>About</span></a></li>
            <li><a href="#skills"><span>Skills</span></a></li>
            <li><a href="#projects"><span>Projects</span></a></li>
            <li><a href="#contact"><span>Contact</span></a></li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Header;
