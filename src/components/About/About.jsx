import React from "react";

import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
    return (
        <section className={styles.container} id="about">
            <h2 className={styles.title}>About</h2>
            <div className={styles.content}>
                <img
                    src={getImageUrl("about/GatesCenter.png")}
                    alt="Bill and Melinda Gates Center for Computer Science"
                    className={styles.aboutImage}
                />
                <ul className={styles.aboutItems}>
                    <li className={styles.aboutItem}>
                        <img src={getImageUrl("about/uiIcon.png")} alt="Icon" />
                        <div className={styles.aboutItemText}>
                            <p>
                                I'm a quick learner that's always eager to learn more. 
                                The opportunity to use my passion and knowledge to improve the lives of others, even if only a little, drives me to pursue CS at UW.
                                I've put the desire to help people into action by contributing to projects and teaching others. 
                            </p>
                        </div>
                    </li>
                    {/* <li className={styles.aboutItem}>
                        <img src={getImageUrl("about/uiIcon.png")} alt="Icon" />
                        <div className={styles.aboutItemText}>
                            <h3>What's next!</h3>
                            <p>
                                Currently, I'm looking for a SWE internship for the summer of 2025
                            </p>
                        </div>
                    </li> */}
                </ul>
            </div>
        </section>
    );
};