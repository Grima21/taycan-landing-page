import { SECTIONS } from "../constants/sections";
import Reveal from "./Reveal"; // o "../components/Reveal" si no tienes alias

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
    image: "./assets/Taycan_green.webp",
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
    image: "./assets/TaycanTurbo.webp",
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
    image: "./assets/TaycanTurbo.webp",
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
    image: "./assets/TaycanTurboGT.webp",
  },
];

export default function ModelCard() {
  return (
    <Reveal
      as="section"
      id={SECTIONS.MODELS}
      className=" grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 p-8 mt-10 mb-8"
    >
      {models.map((car) => (
        <div
          key={car.name}
          className="bg-[#efefef] p-6 rounded-xl shadow-md leading-relaxed"
        >
          <span className="bg-white text-black px-3 py-1 text-sm rounded-md shadow-sm font-semibold">
            {baseInfo.type}
          </span>
          <img src={car.image} alt={car.name} className="w-full h-auto my-4" />
          <h2 className="text-2xl font-semibold mb-2">{car.name}</h2>
          <p className="font-bold text-gray-600">From {car.price}</p>
          <p className="text-sm text-gray-500 my-2">{baseInfo.disclaimer}</p>

          <p className="font-bold text-xl">{car.acceleration}</p>
          <p className="text-sm text-gray-500 mb-4">
            {baseInfo.accelerationLabel}
          </p>

          <p className="font-bold text-xl">
            {car.power.kw} / {car.power.hp}
          </p>
          <p className="text-sm text-gray-500 mb-4">{baseInfo.powerLabel}</p>

          <p className="font-bold text-xl">{car.topSpeed}</p>
          <p className="text-sm text-gray-500 mb-4">{baseInfo.speedLabel}</p>

          <div className="flex gap-2 mt-6">
            <button className="flex-1 h-10 px-4 rounded-md bg-black text-white font-bold transition hover:bg-gray-800">
              {baseInfo.buttons.configure}
            </button>
            <button className="flex-1 h-10 px-4 rounded-md bg-white text-black border border-black font-bold transition hover:bg-gray-200">
              {baseInfo.buttons.techData}
            </button>
          </div>
        </div>
      ))}
    </Reveal>
  );
}
