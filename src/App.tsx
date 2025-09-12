import { Component, type JSX } from 'react';
import styles from './App.module.css';
import { Navbar } from './components/Navbar/Navbar';

/** Root Component of the website */
export class App extends Component {
  render = (): JSX.Element => {
    return (
      <div className={styles.App}>
        <Navbar />
      </div>)
  }
};
