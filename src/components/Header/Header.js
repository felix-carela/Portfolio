import React from 'react';
import styles from './Header.module.css';

const Header = () => {
  return (
    <div className={styles.header}>
      <div className={styles.container}>
        <a href="http://felixcarela.com" className={styles.logoLink}>
          <img src="logo.png" alt="Logo" className={styles.logo}/>
        </a>
        <nav>
          <ul className={styles.menu}>
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
