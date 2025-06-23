import styles from "./TechonologyPreview.module.css";

export default function TechnologyPreview() {
  return (
    <section className={styles.techonologySection}>
      <div className={styles.techonologyContainer}>
        {/*RIGHT */}
        <div className={styles.techonologyRight}>
          <h2 className={styles.techonologyTitle}>
            The Power At Your Finger Tips
          </h2>
          <p className={styles.techonologyText}>
            Experience the future of electric performance with the Taycan's
            innovative technology. Every detail has been crafted to deliver an
            unparalleled driving experience that combines sustainability with
            pure excitement.
          </p>
          <button className={styles.techonologyBtn}>Learn More</button>
        </div>
        {/*LEFT */}
        <div className={styles.techonologyLeft}>
          <div className={styles.techonologyImg}>
            <img
              className={styles.imgTaycan}
              src="../assets/Tycan.avif"
              alt="Taycan Technology"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
