// src/components/Skills/Skills.js

import React from 'react';
import styles from './Skills.module.css';

const Skills = () => {
  return (
    <div id="skills" className={styles.skills}>
      <div className="container">
        <h1 className="sub-title">Skills</h1>
        <div className={styles.skillsList}>
          <img
            src="https://img.shields.io/badge/-Python-black?style=flat-square&logo=python"
            alt="Python"
          />
          <img
            src="https://img.shields.io/badge/-JavaScript-black?style=flat-square&logo=javascript"
            alt="JavaScript"
          />
          <img
            src="https://img.shields.io/badge/-SQL-black?style=flat-square&logo=postgresql"
            alt="SQL"
          />
          <img
            src="https://img.shields.io/badge/-React-black?style=flat-square&logo=react"
            alt="React"
          />
        </div>
        <div className="skills-slide">
          <img
            src="https://img.shields.io/badge/-Django-black?style=flat-square&logo=django"
            alt="Django"
          />
          <img
            src="https://img.shields.io/badge/-C++-black?style=flat-square&logo=c%2B%2B"
            alt="C++"
          />
          <img
            src="https://img.shields.io/badge/-Java-black?style=flat-square&logo=java"
            alt="Java"
          />
        </div>
        <img
          src="https://img.shields.io/badge/-MongoDB-black?style=flat-square&logo=mongodb"
          alt="MongoDB"
        />
        <img
          src="https://img.shields.io/badge/-Express-black?style=flat-square&logo=express"
          alt="Express"
        />
        <img
          src="https://img.shields.io/badge/-TypeScript-black?style=flat-square&logo=typescript"
          alt="TypeScript"
        />
        <div className="skills-slide">
          <img
            src="https://img.shields.io/badge/-HTML5-black?style=flat-square&logo=html5"
            alt="HTML5"
          />
          <img
            src="https://img.shields.io/badge/-CSS3-black?style=flat-square&logo=css3"
            alt="CSS3"
          />
        </div>
      </div>
    </div>
  );
};

export default Skills;
