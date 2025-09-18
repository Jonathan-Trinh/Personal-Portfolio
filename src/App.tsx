import { Component, type JSX } from 'react';
import styles from './App.module.css';
import { Navbar } from './components/Navbar/Navbar';
import { Hero } from './components/Hero/Hero';
import { About } from './components/About/About';
import { Experience } from './components/Experience/Experience';
import { Projects } from './components/Projects/Projects';
import { Contact } from './components/Contact/Contact';

export type sections = 'hero' | 'about' | 'experience' | 'projects' | 'contact';

type AppProps = {};

type AppState = {
  activeSection: sections;
};

/** Root Component of the website */
export class App extends Component<AppProps, AppState> {
  constructor(props: AppProps) {
    super(props);

    this.state = {
      activeSection: 'hero'
    };
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
    this.handleScroll();
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll = () => {
    const sections: sections[] = ['hero', 'about', 'experience', 'projects', 'contact'];

    const current = sections.find(section => {
      const element = document.getElementById(section);
      if (element) {
        const rect = element.getBoundingClientRect();
        return rect.top <= window.innerHeight * 0.3 && rect.bottom >= window.innerHeight * 0.3;
      }
      return false;
    });

    if (!current) {
      let closestSection: sections = 'hero';
      let closestDistance = Infinity;

      sections.forEach(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          const distance = Math.abs(rect.top);
          if (distance < closestDistance) {
            closestDistance = distance;
            closestSection = section;
          }
        }
      });

      if (closestSection !== this.state.activeSection) {
        this.setState({ activeSection: closestSection });
      }
    } else if (current !== this.state.activeSection) {
      this.setState({ activeSection: current });
    }
  };

  handleSectionChange = (section: sections) => {
    this.setState({ activeSection: section });
  };

  render = (): JSX.Element => {
    return (
      <div className={styles.App}>
        <Navbar
          activeSection={this.state.activeSection}
          onSectionChange={this.handleSectionChange} />
        <Hero
          activeSection={this.state.activeSection}
          onSectionChange={this.handleSectionChange} />
        <About
          activeSection={this.state.activeSection}
          onSectionChange={this.handleSectionChange} />
        <Experience
          activeSection={this.state.activeSection}
          onSectionChange={this.handleSectionChange} />
        <Projects
          activeSection={this.state.activeSection}
          onSectionChange={this.handleSectionChange} />
        <Contact
          activeSection={this.state.activeSection}
          onSectionChange={this.handleSectionChange} />
      </div>
    );
  };
}