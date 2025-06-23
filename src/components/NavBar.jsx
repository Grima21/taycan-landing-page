import styles from "./NavBar.module.css";
export default function NavBar() {
  return (
    <header className={styles.header}>
      <div className={styles.headerImg}>
        <nav className={styles.navBar}>
          <div className={styles.container}>
            <div className={styles.logo}>
              <a href="/">TAYCAN</a>
            </div>
            <ul className={styles.navLinks}>
              <li className={styles.navItem}>
                <a href="/">Home</a>
              </li>
              <li className={styles.navItem}>
                <a href="/about">Configure</a>
              </li>
              <li className={styles.navItem}>
                <a href="/gallery">Experience</a>
              </li>
              <li className={styles.navItem}>
                <a href="/contact">Service</a>
              </li>
            </ul>
            <button className={styles.navBtn}>Contact</button>
          </div>
        </nav>
        <div className={styles.hero}>
          <div className={styles.heroContent}>
            <div className={styles.heroText}>
              <h1 className={styles.heroTitle}>Driven By Dreams</h1>
            </div>
          </div>
          <div className={styles.heroButton}>
            <button className={styles.heroBtn}>Explore </button>
          </div>
        </div>
      </div>
    </header>
  );
}
