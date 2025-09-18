import styles from "./Experience.module.css";
import { getImageUrl, type ImageFile } from "../../utils";
import history from "../../data/history.json";
import { Component, type JSX } from "react";
import type { sections } from "../../App";

type ExperienceProps = {
  activeSection: sections;
  onSectionChange: (section: sections) => void;
};

export class Experience extends Component<ExperienceProps> {
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
    const isActive = this.props.activeSection === 'experience';

    return (
      <section id="experience" className={`${styles.container} ${isActive ? styles.active : ''}`}>
        <div className={styles.content}>
          <h1 className={styles.title}>Career Journey</h1>

          {history.map((exp, index) => (
            <div key={index} className={styles.card}>
              {/* Header, Company, Location, and Logo (Left side of the header) */}
              <div className={styles.header}>
                <div className={styles.info}>
                  <img src={getImageUrl(exp.imageSrc as ImageFile)}
                    className={styles.logo} />
                  <div className={styles.details}>
                    <h3 className={styles.role}>{exp.role}</h3>
                    <div className={styles.orgLocation}>
                      <img className={styles.icon} src="../assets/history/organization.png" alt="Organization" />
                      <span>{exp.organization}</span>
                      <img className={styles.icon} src="../assets/history/location.png" alt="Location" />
                      <span>{exp.location}</span>
                    </div>
                  </div>
                </div>

                {/* Date and Current/Past badge (Right side of the header) */}
                <div className={styles.status}>
                  <div className={styles.dateSection}>
                    <img className={styles.icon} src="../assets/history/calendar.png" alt="Date" />
                    <span className={styles.duration}>
                      {exp.startDate} - {exp.endDate}
                    </span>
                  </div>
                  {exp.endDate === "Present" && (
                    <span className={styles.current}>Current</span>
                  )}
                </div>
              </div>

              {/* Bullets */}
              <ul className={styles.description}>
                {exp.description.map((item: string, itemIndex: number) => (
                  <li key={itemIndex} className={styles.descriptionItem}>
                    {item}
                  </li>
                ))}
              </ul>

              {/* Tech bubbles */}
              {exp.technologies && exp.technologies.length > 0 && (
                <div className={styles.technologiesSection}>
                  <h4 className={styles.technologiesTitle}>Tech:</h4>
                  <div className={styles.technologiesList}>
                    {exp.technologies.map((tech: string, techIndex: number) => (
                      <span key={techIndex} className={styles.technologyTag}>
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}

        </div>
      </section>
    );
  }
}