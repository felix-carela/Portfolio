import React from 'react';
import styles from './Projects.module.css';

const Projects = () => {
  const openInNewTab = (url) => {
    const newWindow = window.open(url, '_blank', 'noopener,noreferrer');
    if (newWindow) newWindow.opener = null;
  };

  return (
    <div id="projects" className={styles.projects}>
      <div className="container">
        <h1 className="sub-title">Projects</h1>
        <div className={styles.projectsList}>
          <div className={styles.projectItem}>
            <img src="images/FurniTech.png" alt="FurniTech" />
            <div className={styles.layer}>
              <h3>FurniTech</h3>
              <p>
                An application for users to explore and purchase a wide array of
                furniture products.
              </p>
              <button
                className={styles.visitButton}
                onClick={() => openInNewTab('https://feature-workpls--playful-alpaca-c1fe99.netlify.app/')}
              >
                Visit
              </button>
            </div>
          </div>
          <div className={styles.projectItem}>
            <img src="images/HiddenNYC.png" alt="HiddenNYC" />
            <div className={styles.layer}>
              <h3>HiddenNYC</h3>
              <p>
                An application for users to explore speakeasy bars across Manhattan.
              </p>
              <button
                className={styles.visitButton}
                onClick={() => openInNewTab('https://team-america-project-3-frontend.vercel.app/')}
              >
                Visit
              </button>
            </div>
          </div>
          <div className={styles.projectItem}>
            <img src="images/Minesweeper.png" alt="Minesweeper" />
            <div className={styles.layer}>
              <h3>Minesweeper</h3>
              <p>
                A game where the user must avoid clicking on the hidden bombs
                within the cells.
              </p>
              <button
                className={styles.visitButton}
                onClick={() => openInNewTab('https://felix-carela-minesweeper.netlify.app/')}
              >
                Visit
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
