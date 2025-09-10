import React, { useState } from "react";
import styles from "./Navbar.module.css";
import { getImageUrl } from "../../utils";

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('About');

  const handleMenuClick = (itemName) => {
    setActiveSection(itemName);
    setMenuOpen(false);
  };

  return (
    <nav className={styles.navbar}>
      <a className={styles.title} href="/">
        Jonathan Trinh | UW CSE
      </a>
      <div className={styles.menu}>
        <img
          className={styles.menuBtn}
          src={
            menuOpen
              ? getImageUrl("nav/closeIcon.png")
              : getImageUrl("nav/menuIcon.png")
          }
          alt="menu-button"
          onClick={() => setMenuOpen(!menuOpen)}
        />

        <ul
          className={`${styles.menuItems} ${menuOpen ? styles.menuOpen : ''}`}
          onClick={() => setMenuOpen(false)}
        >
          <li>
            <a
              href="#about"
              className={activeSection === 'About' ? styles.active : ''}
              onClick={() => handleMenuClick('About')}
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#experience"
              className={activeSection === 'Experience' ? styles.active : ''}
              onClick={() => handleMenuClick('Experience')}
            >
              Experience
            </a>
          </li>
          <li>
            <a
              href="#projects"
              className={activeSection === 'Projects' ? styles.active : ''}
              onClick={() => handleMenuClick('Projects')}
            >
              Projects
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className={activeSection === 'Contact' ? styles.active : ''}
              onClick={() => handleMenuClick('Contact')}
            >
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};