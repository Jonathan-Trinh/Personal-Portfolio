import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../../utils";

export const Hero = () => {
    return (
        <section className={styles.container}>
            <div className={styles.content}>
                <h1 className={styles.title}>Hi, I'm Jonathan</h1>
                <p className={styles.description}>
                    I'm a Student at the University of Washington pursuing a bachelors.
                    If my work interests you, feel free to reach out and connect!
                </p>
                <a href="mailto:jonathantrinh04@gmail.com" className={styles.contactBtn}>
                    Contact Me
                </a>
            </div>
            <img
                src={getImageUrl("hero/heroImage.png")}
                alt="Hero Image of me"
                className={styles.heroImg}
            />
            <div className={styles.topBlur} />
            <div className={styles.bottomBlur} />
        </section>
    );
};