import { SECTIONS } from "../../constants/sections";
import { highlights } from "./data";
import { useRef } from "react";
import Reveal from "../Reveal"; // o "../components/Reveal" si no tienes alias

export default function Highlights() {
  const sliderRef = useRef(null);

  const scroll = (dir) => {
    const amount = dir === "left" ? -350 : 350;
    sliderRef.current?.scrollBy({ left: amount, behavior: "smooth" });
  };

  return (
    <Reveal
      as="section"
      id={SECTIONS.HIGHLIGHT}
      className="px-8 py-12 mt-12 mb-12"
    >
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-3xl font-bold">Taycan Highlights.</h2>
        <div className="space-x-2">
          <button
            onClick={() => scroll("left")}
            className="ml-2 px-3 py-2 text-xl font-bold bg-white rounded-md transition hover:bg-gray-100"
          >
            &larr;
          </button>
          <button
            onClick={() => scroll("right")}
            className="px-3 py-2 text-xl font-bold bg-white rounded-md transition hover:bg-gray-100"
          >
            &rarr;
          </button>
        </div>
      </div>

      <div
        className="flex overflow-x-auto gap-6 pb-4 scroll-snap-x scroll-smooth"
        ref={sliderRef}
      >
        {highlights.map((item, idx) => (
          <div
            key={idx}
            className="relative flex-none w-[650px] h-[650px] rounded-xl overflow-hidden bg-center bg-cover scroll-snap-start"
            style={{ backgroundImage: `url(${item.image})` }}
          >
            <div className="absolute bottom-0 w-full p-6 bg-gradient-to-t from-black/70 to-transparent text-white">
              <h3 className="text-4xl mb-4">{item.title}</h3>
              <p className="text-lg leading-relaxed">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </Reveal>
  );
}
