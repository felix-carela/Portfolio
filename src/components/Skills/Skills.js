import React from 'react';
import styles from './Skills.module.css';

const Skills = () => {
  const skills = [
    { src: "https://img.shields.io/badge/-Python-black?style=flat-square&logo=python", alt: "Python" },
    { src: "https://img.shields.io/badge/-JavaScript-black?style=flat-square&logo=javascript", alt: "JavaScript" },
    { src: "https://img.shields.io/badge/-SQL-black?style=flat-square&logo=postgresql", alt: "SQL" },
    { src: "https://img.shields.io/badge/-React-black?style=flat-square&logo=react", alt: "React" },
    { src: "https://img.shields.io/badge/-Django-black?style=flat-square&logo=django", alt: "Django" },
    { src: "https://img.shields.io/badge/-C++-black?style=flat-square&logo=c%2B%2B", alt: "C++" },
    { src: "https://img.shields.io/badge/-Java-black?style=flat-square&logo=java&logoColor=white", alt: "Java" },
    { src: "https://img.shields.io/badge/-MongoDB-black?style=flat-square&logo=mongodb", alt: "MongoDB" },
    { src: "https://img.shields.io/badge/-Express-black?style=flat-square&logo=express", alt: "Express" },
    { src: "https://img.shields.io/badge/-TypeScript-black?style=flat-square&logo=typescript", alt: "TypeScript" },
    { src: "https://img.shields.io/badge/-HTML5-black?style=flat-square&logo=html5", alt: "HTML5" },
    { src: "https://img.shields.io/badge/-CSS3-black?style=flat-square&logo=css3", alt: "CSS3" },
    { src: "https://img.shields.io/badge/-Node.js-black?style=flat-square&logo=node.js", alt: "Node.js" },
    { src: "https://img.shields.io/badge/-jQuery-black?style=flat-square&logo=jquery&logoColor=white", alt: "jQuery" },
  { src: "https://img.shields.io/badge/-PostgreSQL-black?style=flat-square&logo=postgresql&logoColor=white", alt: "PostgreSQL" }
  ];

  return (
    <div id="skills" className={styles.skills}>
      <div className="container">
        <h1 className="sub-title">Skills</h1>
        <div className={styles.skillsGrid}>
          {skills.map((skill, index) => (
            <div key={index} className={styles.skillItem}>
              <img src={skill.src} alt={skill.alt} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
