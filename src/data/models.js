// src/data/models.js

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
