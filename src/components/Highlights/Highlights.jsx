import styles from "./Highlights.module.css";
import { highlights } from "./data";
import { useRef } from "react";

export default function Highlights() {
  const sliderRef = useRef(null);

  const scroll = (dir) => {
    const amount = dir === "left" ? -350 : 350;
    sliderRef.current?.scrollBy({ left: amount, behavior: "smooth" });
  };

  return (
    <section className={styles.container}>
      <div className={styles.header}>
        <h2 className={styles.title}>Taycan Highlights.</h2>
        <div className={styles.arrows}>
          <button onClick={() => scroll("left")}>&larr;</button>
          <button onClick={() => scroll("right")}>&rarr;</button>
        </div>
      </div>

      <div className={styles.slider} ref={sliderRef}>
        {highlights.map((item, idx) => (
          <div
            key={idx}
            className={styles.card}
            style={{ backgroundImage: `url(${item.image})` }}
          >
            <div className={styles.overlay}>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
