import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
    return (
        <section className={styles.container}>
            <div className={styles.content}>
                <h1 className={styles.title}>Hi, I'm Jonathan</h1>
                <p className={styles.description}>
                I'm a student majoring in computer science at the University of Washington.
                My communication lines are always open, so feel free to connect with me using the links in the contact section below!
                </p>
            </div>
            <img
                src={getImageUrl("hero/Hero.png")}
                alt="Hero Image of me"
                className={styles.heroImg}
            />
            <div className={styles.topBlur} />
            <div className={styles.bottomBlur} />
        </section>
    );
};