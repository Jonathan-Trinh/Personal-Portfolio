import styles from "./Contact.module.css";
import { getImageUrl, type ImageFile } from "../../utils";
import contact from "../../data/contact.json";
import { Component, type JSX } from "react";
import type { sections } from "../../App";

type ContactProps = {
  activeSection: sections;
  onSectionChange: (section: sections) => void;
}

export class Contact extends Component<ContactProps> {
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
    const isActive = this.props.activeSection === 'contact';

    return (
      <section id="contact" className={`${styles.container} ${isActive ? styles.active : ''}`}>
        <div className={styles.content}>
          <h1 className={styles.title}>Let's Connect!</h1>
          <h2 className={styles.subtitle}>Feel free to reach out on any platforms listed below</h2>

          <div className={styles.socialCard}>
            <h2 className={styles.linkTitle}>Platforms</h2>

            <div className={styles.socialLinks}>
              {contact.map((link, index) => (
                <div key={index} className={styles.socialLink}>
                  <div className={styles.socialIcon}>
                    <img
                      src={getImageUrl(link.icon as ImageFile)}
                      className={styles.screenshot}
                    />
                  </div>
                  <div className={styles.socialInfo}>
                    <span className={styles.socialPlatform}>
                      {link.platform}
                    </span>
                    <span className={styles.socialHandle}>
                      {link.handle}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <footer className={styles.footer}>
          <div className={styles.footerContent}>
            <p className={styles.footerText}>
              © {new Date().getFullYear()} Jonathan Trinh. All rights reserved.
            </p>

            <div className={styles.footerSocials}>
              <p className={styles.footerName}>Links:</p>
              <a href="https://github.com/Jonathan-Trinh" className={styles.footerSocialLink} rel="noopener noreferrer" target="_blank">
                <img
                  src={getImageUrl('contact/github.png' as ImageFile)}
                  className={styles.footerIcon}
                  alt="GitHub"
                />
              </a>
              <a href="https://www.linkedin.com/in/jonathantrinh20/" className={styles.footerSocialLink} rel="noopener noreferrer" target="_blank">
                <img
                  src={getImageUrl('contact/linkedin.png' as ImageFile)}
                  className={styles.footerIcon}
                  alt="LinkedIn"
                />
              </a>
            </div>
          </div>
        </footer>

      </section>
    );
  }
}