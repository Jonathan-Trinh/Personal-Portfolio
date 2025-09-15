import { Component, type JSX } from "react";
import styles from "./Navbar.module.css";
import { getImageUrl } from "../../utils";
import type { sections } from "../../App";

type NavbarProps = {
  activeSection: sections;
  onSectionChange: (section: sections) => void;
}

type NavbarState = {
  menuOpen: boolean;
}

/** Navbar Component for website */
export class Navbar extends Component<NavbarProps, NavbarState> {
  constructor(props: NavbarProps) {
    super(props);

    this.state = {
      menuOpen: false
    };
  }

  handleMenuClick = (section: sections): void => {
    this.props.onSectionChange(section);
    this.closeMenu();

    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  toggleMenu = () => {
    this.setState({ menuOpen: !this.state.menuOpen });
  };

  closeMenu = () => {
    this.setState({ menuOpen: false });
  };

  render = (): JSX.Element => {
    const { menuOpen } = this.state;
    const { activeSection } = this.props;

    return (
      <nav className={styles.navbar}>
        <a
          className={styles.title}
          href="#hero"
          onClick={(e) => {
            e.preventDefault();
            this.handleMenuClick('hero');
          }}>
          Jonathan Trinh
        </a>

        <img
          className={styles.menuBtn}
          src={menuOpen ? getImageUrl("nav/closeIcon.png") : getImageUrl("nav/menuIcon.png")}
          alt="menu-button"
          onClick={this.toggleMenu} />

        <div className={`${styles.menu} ${menuOpen ? styles.menuOpen : ''}`}>
          <ul className={styles.menuItems}>
            <li>
              <a
                href="#hero"
                className={activeSection === 'hero' ? styles.active : ''}
                onClick={(e) => {
                  e.preventDefault();
                  this.handleMenuClick('hero');
                }}>
                Home
              </a>
            </li>
            <li>
              <a
                href="#about"
                className={activeSection === 'about' ? styles.active : ''}
                onClick={(e) => {
                  e.preventDefault();
                  this.handleMenuClick('about');
                }}>
                About
              </a>
            </li>
            <li>
              <a
                href="#experience"
                className={activeSection === 'experience' ? styles.active : ''}
                onClick={(e) => {
                  e.preventDefault();
                  this.handleMenuClick('experience');
                }}>
                Experience
              </a>
            </li>
            <li>
              <a
                href="#projects"
                className={activeSection === 'projects' ? styles.active : ''}
                onClick={(e) => {
                  e.preventDefault();
                  this.handleMenuClick('projects');
                }}>
                Projects
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className={activeSection === 'contact' ? styles.active : ''}
                onClick={(e) => {
                  e.preventDefault();
                  this.handleMenuClick('contact');
                }}>
                Contact
              </a>
            </li>
          </ul>
        </div>
      </nav>
    );
  };
}