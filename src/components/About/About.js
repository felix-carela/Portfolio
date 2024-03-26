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
            As a Software Engineer with 2 years of experience in programming from academic, personal, and group projects, I am passionate about solving technical and algorithmic challenges. My disciplined, adaptable, and innovative approach drives me to excel in collaborative environments. With a commitment to dependability, I consistently deliver results and adeptly manage troubleshooting. My technical expertise is a strong asset in collaborative problem-solving, ensuring the creation and implementation of creative solutions that contribute positively to project success.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
