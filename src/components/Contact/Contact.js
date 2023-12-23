import React from "react";
import styles from "./Contact.module.css";
import CopyIcon from "../../assets/images/copy.png";
import LinkedInIcon from "../../assets/images/LinkedIn.png";
import GitHubIcon from "../../assets/images/GitHub.png";

const Contact = () => {
  const copyToClipboard = () => {
    const copyText = document.getElementById("email-input");
    copyText.select();
    document.execCommand("copy");
  };

  return (
    <div id="contact" className={styles.contact}>
      <div className={styles.container}>
        <div className={styles.leftColumn}>
          <a
            href="data/Felix Carela Resume.pdf"
            download
            className={styles.btn}
          >
            Download Resume
          </a>
        </div>
        <div className={styles.rightColumn}>
          <div className={styles.contactRow}>
            <h1 className={styles.contactTitle}>Contact:</h1>
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
              <button onClick={copyToClipboard} className={styles.copyBtn}>
                {/* Using the SVG as an image */}
                <img src={CopyIcon} alt="Copy" className={styles.octiconCopy} />
                {/* Or use it as a component if your setup supports it */}
                {/* <CopyIcon className={styles.octiconCopy} /> */}
              </button>
            </div>
            <div className={styles.socialLinks}>
              {/* ... */}
              <a
                href="https://www.linkedin.com/in/felix-carela/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={LinkedInIcon}
                  alt="LinkedIn"
                  className={styles.socialIcon}
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
                  className={styles.socialIcon}
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
