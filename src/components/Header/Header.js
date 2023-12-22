// src/components/Header/Header.js

import React from 'react';
import styles from './Header.module.css'; // Import the CSS module

const Header = () => {
  return (
    <div className={styles.header}> {/* Use styles.header for the class */}
      <div className={styles.container}> {/* Use styles.container for the class */}
        <nav>
          <ul className={styles.menu}> {/* Use styles.menu for the class */}
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
