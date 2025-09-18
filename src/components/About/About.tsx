import styles from "./About.module.css";
import { getImageUrl, type ImageFile } from "../../utils";
import skills from "../../data/skills.json"
import { Component, type JSX } from "react";
import type { sections } from "../../App";

type AboutProps = {
  activeSection: sections;
  onSectionChange: (section: sections) => void;
}

export class About extends Component<AboutProps> {
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
    const isActive = this.props.activeSection === 'about';

    return (
      <section id="about" className={`${styles.container} ${isActive ? styles.active : ''}`}>
        <div className={styles.content}>
          <div className={styles.header}>
            <h1 className={styles.title}>About Me</h1>
            <p className={styles.description}>
              I'm an undergraduate computer science student at the University of Washington with a passion for full-stack development and systems programming. Driven by curiosity, I'm always looking for opportunities to learn more about these topics and expand my skillset. In action this includes searching for roles to gain experience or building projects to learn new skills to further my ability.
            </p>
          </div>

          <h2 className={styles.title}>Skills and Tools</h2>
          <div className={styles.skillsbox}>
            {skills.map((skill, index) => (
              <div key={index} className={styles.skillCard}>
                <div className={styles.icon}>
                  <img src={getImageUrl(skill.imageSrc as ImageFile)} alt={skill.title} />
                </div>
                <h3 className={styles.skillTitle}>{skill.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
}