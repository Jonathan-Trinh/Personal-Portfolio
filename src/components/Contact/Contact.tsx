import styles from "./Contact.module.css";
import { Component, type JSX } from "react";
import type { sections } from "../../App";

type ContactProps = {
  activeSection: sections;
  onSectionChange: (section: sections) => void;
}

type ContactState = {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export class Contact extends Component<ContactProps, ContactState> {
  constructor(props: ContactProps) {
    super(props);
    this.state = {
      name: '',
      email: '',
      subject: '',
      message: ''
    };
  }

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
    // const { name, email, subject, message } = this.state;

    return (
      <section id="contact" className={`${styles.container} ${isActive ? styles.active : ''}`}>
        <div className={styles.content}>
          <h1 className={styles.title}>Contact</h1>
        </div>
      </section>);
  }
}