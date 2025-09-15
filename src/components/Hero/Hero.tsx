import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";
import { Component, type JSX } from "react";
import type { sections } from "../../App";

type HeroProps = {
  activeSection: sections
  onSectionChange: (section: sections) => void;
}

export class Hero extends Component<HeroProps> {

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
    const isActive = this.props.activeSection === 'hero';

    return (
      <section id="hero" className={`${styles.container} ${isActive ? styles.active : ''}`}>
        <div className={styles.content}>
          <h1 className={styles.title}>Jonathan Trinh</h1>
          <h2 className={styles.subtitle}>Student and Software Developer</h2>
          <p className={styles.description}>
            CS student at the University of Washington passionate about developing solutions with software to tackle real-world challenges
          </p>
          <div className={styles.buttonContainer}>
            <button
              className={`${styles.btn} ${styles.primaryBtn}`}
              onClick={() => this.handleNavigation('projects')}>
              View Projects
            </button>
            <button
              className={`${styles.btn} ${styles.secondaryBtn}`}
              onClick={() => this.handleNavigation('contact')}>
              Connect with me
            </button>
          </div>
        </div>
        <img
          src={getImageUrl("hero/jonathan.png")}
          alt="Hero image of Jonathan Trinh"
          className={styles.heroImg}/>
      </section>
    );
  }
}