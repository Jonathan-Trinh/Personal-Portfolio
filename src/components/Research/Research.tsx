import { Component, type JSX } from "react";
import styles from "./Research.module.css";
import type { sections } from "../../App";

type ResearchProps = {
  activeSection: sections;
  onSectionChange: (section: sections) => void;
};

type ResearchState = {
  currentSlide: number;
};

export class Research extends Component<ResearchProps, ResearchState> {
  private carouselImages = [
    "../assets/research/remoteLab.jpg",
    "../assets/research/remoteLab2.jpg",
    "../assets/research/RL-IDE.jpg"
  ];

  constructor(props: ResearchProps) {
    super(props);
    this.state = {
      currentSlide: 0
    };
  }

  nextSlide = () => {
    this.setState((prevState) => ({
      currentSlide: (prevState.currentSlide + 1) % this.carouselImages.length
    }));
  };

  prevSlide = () => {
    this.setState((prevState) => ({
      currentSlide: prevState.currentSlide === 0
        ? this.carouselImages.length - 1
        : prevState.currentSlide - 1
    }));
  };

  goToSlide = (index: number) => {
    this.setState({ currentSlide: index });
  };

  render(): JSX.Element {
    const isActive = this.props.activeSection === "research";

    return (
      <section
        id="research"
        className={`${styles.container} ${isActive ? styles.active : ""}`}>

        <div className={styles.content}>

          <h1 className={styles.title}>Research</h1>
          <div className={styles.researchList}>
            <div className={styles.researchRow}>

              <div className={styles.researchText}>
                <h3>Goals and Work</h3>
                <p>
                  Enhance CS/CE curricula accessibility and content through extending remote laboratories and corresponding course materials.
                </p>
              </div>

              <div className={styles.carouselContainer}>
                <button
                  className={`${styles.carouselButton} ${styles.carouselButtonPrev}`}
                  onClick={this.prevSlide}
                  aria-label="Previous slide">
                  &lt;
                </button>

                <div className={styles.carouselTrack}>
                  {this.carouselImages.map((image, index) => (
                    <div
                      key={index}
                      className={`${styles.carouselSlide} ${index === this.state.currentSlide ? styles.carouselSlideActive : ""}`}
                      style={{
                        backgroundImage: `url(${image})`,
                        transform: `translateX(-${this.state.currentSlide * 100}%)`
                      }}
                    />
                  ))}
                </div>

                <button
                  className={`${styles.carouselButton} ${styles.carouselButtonNext}`}
                  onClick={this.nextSlide}
                  aria-label="Next slide">
                  &gt;
                </button>

                <div className={styles.carouselDots}>
                  {this.carouselImages.map((_, index) => (
                    <button
                      key={index}
                      className={`${styles.carouselDot} ${index === this.state.currentSlide ? styles.carouselDotActive : ""}`}
                      onClick={() => this.goToSlide(index)}
                      aria-label={`Go to slide ${index + 1}`}
                    />
                  ))}
                </div>
              </div>
            </div>
            <div className={`${styles.researchRow} ${styles.reverse}`}>
              <div className={styles.researchText}>
                <h3>Demo</h3>
                <p>
                  A video demo on using the remote lab and simulating the device from a web browser.
                </p>
              </div>

              <div className={styles.videoContainer}>
                <iframe
                  className={styles.videoIframe}
                  src="https://www.youtube.com/embed/9_RL6gZpP1I"
                  title="RL Demo"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen />
              </div>
            </div>
            <div className={styles.researchRow}>
              <div className={styles.researchText}>
                <h3>Paper</h3>
                <p>
                  Published a paper to the international conference Smart Technologies & Education (STE2026) showcasing the results and future developments of RedTail and Remote Laboratories.
                </p>
              </div>

              <div className={styles.imageCard}>
                <img
                  src="../assets/research/RedTail-Paper.jpg"
                  alt="Research Paper"
                  className={styles.cardImage} />
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}