import styles from "./Specifications.module.css";

export default function Specification() {
  return (
    <section className={styles.specificationSection}>
      <div className={styles.containerSpecification}>
        {/*LEFT*/}
        <div className={styles.imageLeft}>
          <img
            className={styles.imgTaycan}
            src="../assets/specification-img.jpg "
            alt="Taycan Specification"
          />
        </div>
        {/*RIGHT*/}
        <div className={styles.specificationRight}>
          <div className={styles.specificationHeader}>
            <h2 className={styles.titleSpec}>Performance And Specification</h2>
          </div>
          <div className={styles.specificationContent}>
            <div className={styles.specificationItem}>
              <h3 className={styles.specificationTitle}> 2.4 seconds</h3>
              <p className={styles.specificationText}>Acceleration</p>
            </div>
            <div className={styles.specificationItem}>
              <h3 className={styles.specificationTitle}>250 km/h</h3>
              <p className={styles.specificationText}>Top Speed</p>
            </div>
            <div className={styles.specificationItem}>
              <h3 className={styles.specificationTitle}>300 miles</h3>
              <p className={styles.specificationText}>Range</p>
            </div>
            <div className={styles.specificationItem}>
              <h3 className={styles.specificationTitle}>777 hp</h3>
              <p className={styles.specificationText}>Horsepower</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
