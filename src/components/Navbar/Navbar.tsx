import { Component, type JSX } from "react";
import styles from "./Navbar.module.css";
import { getImageUrl } from "../../utils";

interface NavbarState {
  menuOpen: boolean;
  activeSection: string;
}

/** Navbar Component for website */
export class Navbar extends Component<{}, NavbarState> {
  constructor(props: {}) {
    super(props);

    this.state = {
      menuOpen: false,
      activeSection: 'About'
    };
  }

  handleMenuClick = (itemName: string) => {
    this.setState({
      activeSection: itemName,
      menuOpen: false
    });
  };

  toggleMenu = () => {
    this.setState(prevState => ({
      menuOpen: !prevState.menuOpen
    }));
  };

  closeMenu = () => {
    this.setState({ menuOpen: false });
  };

  render = (): JSX.Element => {
    const { menuOpen, activeSection } = this.state;

    return (
      <nav className={styles.navbar}>
        <a className={styles.title} href="/">
          Jonathan Trinh | UW CSE
        </a>

        <img
          className={styles.menuBtn}
          src={menuOpen ? getImageUrl("nav/closeIcon.png") : getImageUrl("nav/menuIcon.png")}
          alt="menu-button"
          onClick={this.toggleMenu}
        />

        <div className={`${styles.menu} ${menuOpen ? styles.menuOpen : ''}`}>
          <ul className={styles.menuItems} onClick={this.closeMenu}>
            <li>
              <a
                href="#about"
                className={activeSection === 'About' ? styles.active : ''}
                onClick={() => this.handleMenuClick('About')}
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#experience"
                className={activeSection === 'Experience' ? styles.active : ''}
                onClick={() => this.handleMenuClick('Experience')}
              >
                Experience
              </a>
            </li>
            <li>
              <a
                href="#projects"
                className={activeSection === 'Projects' ? styles.active : ''}
                onClick={() => this.handleMenuClick('Projects')}
              >
                Projects
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className={activeSection === 'Contact' ? styles.active : ''}
                onClick={() => this.handleMenuClick('Contact')}
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </nav>
    );
  };
}