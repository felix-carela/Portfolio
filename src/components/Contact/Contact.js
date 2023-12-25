import React, { useState } from "react";
import styles from "./Contact.module.css";
import CopyIcon from "../../assets/images/copy.png";
import LinkedInIcon from "../../assets/images/LinkedIn.png";
import GitHubIcon from "../../assets/images/GitHub.png";

const Contact = () => {
  const [isButtonActive, setIsButtonActive] = useState(false);

  const copyToClipboard = () => {
    const email = "felixacarela@protonmail.com";
    navigator.clipboard.writeText(email).then(
      () => {
        console.log("Email copied to clipboard!");
      },
      (err) => {
        console.error("Could not copy text: ", err);
      }
    );
  };

  return (
    <div id="contact" className={styles.contact}>
      <div className={styles.container}>
        <div className={styles.leftColumn}>
          <a
            href="/Felix_Carela_Resume.pdf"
            download
            className={styles.btn}
          >
            Download Resume
          </a>
        </div>
        <div className={styles.rightColumn}>
          <div className={styles.contactRow}>
            <div className={styles.inputGroup}>
              <input
                id="email-input"
                type="text"
                readOnly
                spellCheck="false"
                className={styles.formControl}
                value="felixacarela@protonmail.com"
                aria-label="Email address"
              />
              <button
                onMouseDown={() => setIsButtonActive(true)}
                onMouseUp={() => setIsButtonActive(false)}
                onMouseLeave={() => setIsButtonActive(false)}
                onClick={copyToClipboard}
                className={`${styles.copyBtn} ${isButtonActive ? styles.active : ''}`}
              >
                <img src={CopyIcon} alt="Copy" className={styles.octiconCopy} />
              </button>
            </div>
            <div className={styles.socialLinks}>
              <a
                href="https://www.linkedin.com/in/felix-carela/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={LinkedInIcon}
                  alt="LinkedIn"
                  className={styles.socialIcon1}
                />
              </a>
              <a
                href="https://github.com/felix-carela"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={GitHubIcon}
                  alt="GitHub"
                  className={styles.socialIcon2}
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
