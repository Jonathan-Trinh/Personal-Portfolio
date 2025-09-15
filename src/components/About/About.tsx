import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/uiIcon.png")} alt="Icon" />
            <div className={styles.aboutItemText}>
              <p>
                Blob
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};