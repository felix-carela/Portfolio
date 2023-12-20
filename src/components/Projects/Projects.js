// src/components/Projects/Projects.js

import React from 'react';
import styles from './Projects.module.css';

const Projects = () => {
  return (
    <div id="projects" className={styles.projects}>
      <div className="container">
        <h1 className="sub-title">Projects</h1>
        <div className={styles.projectsList}>
          {/* Project 1 */}
          <div className={styles.projectItem}>
            <img src="images/FurniTech.png" alt="FurniTech" />
            <div className={styles.layer}>
              <h3>FurniTech</h3>
              <p>
                An application for users to explore and purchase a wide array of
                furniture products.
              </p>
            </div>
          </div>
          {/* Project 2 */}
          <div className={styles.projectItem}>
            <img src="images/HiddenNYC.png" alt="HiddenNYC" />
            <div className={styles.layer}>
              <h3>HiddenNYC</h3>
              <p>
                An application for users to explore lesser-known pop-up food
                eateries and speakeasy bars across Manhattan.
              </p>
            </div>
          </div>
          {/* Project 3 */}
          <div className={styles.projectItem}>
            <img src="images/Minesweeper.png" alt="Minesweeper" />
            <div className={styles.layer}>
              <h3>Minesweeper</h3>
              <p>
                A game where the user must avoid clicking on the hidden bombs
                within the cells.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
