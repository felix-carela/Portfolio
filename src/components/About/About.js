import React from "react";
import styles from "./About.module.css";
import profilePicture from "../../assets/images/profilePicture.JPG";

const About = () => {
  return (
    <div id="about" className={styles.about}>
      <div className="container">
        <div className={styles.row}>
          <div id="about-col-1" className={styles.aboutCol1}>
            <img src={profilePicture} alt="Profile" />
          </div>
          <div id="about-col-2" className={styles.aboutCol2}>
            <h1>Felix Carela</h1>
            <p>
            As a Software Engineer with 2 years of experience in programming from academic, personal, and group projects, I am passionate about solving technical and algorithmic challenges. My approach to work is characterized by a disciplined, adaptable, and innovative mindset, which drives me to excel in collaborative environments. With a strong commitment to dependability, I consistently deliver results and adeptly manage troubleshooting. My technical expertise enhances my ability for collaborative problem-solving, ensuring the creation and implementation of creative solutions and making me a valuable contributor to any team.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
