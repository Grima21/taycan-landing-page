import styles from "./Models.module.css";

// src/components/TaycanModels/data.js

// eslint-disable-next-line react-refresh/only-export-components
export const baseInfo = {
  type: "Electric",
  disclaimer:
    "Manufacturer’s Suggested Retail Price. Excludes options; taxes; title; registration; delivery, processing and handling fee; dealer charges; potential tariffs. Dealer sets actual selling price.",
  accelerationLabel: "0 - 60 mph with Launch Control",
  powerLabel:
    "Overboost Power with Launch Control up to (kW) / Overboost Power with Launch Control up to (HP)",
  speedLabel: "Top track speed (with summer tires)",
  buttons: {
    configure: "Configure",
    techData: "Technical Data",
  },
};

// eslint-disable-next-line react-refresh/only-export-components
export const models = [
  {
    name: "Taycan",
    price: "$100,300",
    acceleration: "4.5 s",
    power: {
      kw: "300 kW",
      hp: "402 hp",
    },
    topSpeed: "143 mph",
    image: "./assets/Taycan_green.jpg",
  },
  {
    name: "Taycan Turbo",
    price: "$175,000",
    acceleration: "2.5 s",
    power: {
      kw: "650 kW",
      hp: "871 hp",
    },
    topSpeed: "162 mph",
    image: "./assets/Taycan_green.jpg",
  },
  {
    name: "Taycan Turbo S",
    price: "$209,900",
    acceleration: "2.3 s",
    power: {
      kw: "700 kW",
      hp: "938 hp",
    },
    topSpeed: "162 mph",
    image: "./assets/Taycan_green.jpg",
  },
  {
    name: "Taycan Turbo GT",
    price: "$231,100",
    acceleration: "2.2 s",
    power: {
      kw: "760 kW",
      hp: "1,019 hp",
    },
    topSpeed: "180 mph",
    image: "./assets/Taycan_green.jpg",
  },
];

export default function ModelCard() {
  return (
    <section className={styles.grid}>
      {models.map((car) => (
        <div className={styles.card} key={car.name}>
          <span className={styles.badge}>{baseInfo.type}</span>
          <img className={styles.image} src={car.image} alt={car.name} />
          <h2 className={styles.title}>{car.name}</h2>
          <p className={styles.price}>From {car.price}</p>
          <p className={styles.disclaimer}>{baseInfo.disclaimer}</p>

          <p className={styles.bold}>{car.acceleration}</p>
          <p className={styles.label}>{baseInfo.accelerationLabel}</p>

          <p className={styles.bold}>
            {car.power.kw} / {car.power.hp}
          </p>
          <p className={styles.label}> {baseInfo.powerLabel}</p>

          <p className={styles.bold}>{car.topSpeed}</p>
          <p className={styles.label}>{baseInfo.speedLabel}</p>

          <div className={styles.buttons}>
            <button className={styles.btn}>{baseInfo.buttons.configure}</button>
            <button className={`${styles.btn} ${styles.outline}`}>
              {baseInfo.buttons.techData}
            </button>
          </div>
        </div>
      ))}
    </section>
  );
}
