import styles from "./Projects.module.css";
import { getImageUrl, type ImageFile } from "../../utils";
import projects from "../../data/projects.json";
import { Component, type JSX } from "react";
import type { sections } from "../../App";


type ProjectsProps = {
  activeSection: sections;
  onSectionChange: (section: sections) => void;
}

export class Projects extends Component<ProjectsProps> {
  handleNavigation = (section: sections): void => {
    this.props.onSectionChange(section);

    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  render(): JSX.Element {
    const isActive = this.props.activeSection === 'projects';

    return (
      <section id="projects" className={`${styles.container} ${isActive ? styles.active : ''}`}>
        <div className={styles.content}>
          <h1 className={styles.title}>Projects</h1>
          <h2 className={styles.subtitle}>Some of my favorite projects so far</h2>
          <div className={styles.projectsGrid}>
            {projects.map((project, index) => (
              <div key={index} className={styles.projectCard}>
                <div className={styles.projectImage}>
                  <img
                    src={getImageUrl(project.imageSrc as ImageFile)}
                    alt={project.title}
                    className={styles.screenshot}
                  />
                </div>

                <div className={styles.projectDetails}>
                  <h3 className={styles.projectTitle}>{project.title}</h3>

                  <p className={styles.projectDescription}>
                    {project.description}
                  </p>

                  <div className={styles.techStack}>
                    {project.skills.map((skill, skillIndex) => (
                      <span key={skillIndex} className={styles.techTag}>{skill}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>


        </div>
      </section>);
  }
}