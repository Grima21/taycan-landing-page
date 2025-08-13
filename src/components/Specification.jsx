import { SECTIONS } from "../constants/sections";

export default function Specification() {
  return (
    <section id={SECTIONS.SPECIFICATION} className="w-full h-auto md:h-[600px]">
      <div className="flex flex-col md:flex-row w-full h-full">
        {/* LEFT */}
        <div className="w-full md:w-1/2 bg-[#111] flex items-center justify-center">
          <img
            src="../assets/specification-img.jpg"
            alt="Taycan Specification"
            className="w-full h-full object-cover"
          />
        </div>

        {/* RIGHT */}
        <div className="w-full md:w-1/2 bg-[#1b3c2e] text-white p-6 flex flex-col items-center justify-center">
          <div className="mb-12 w-full max-w-xl">
            <h2 className="text-[2rem] md:text-[3rem] font-semibold text-center md:text-left">
              Performance And Specification
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full max-w-xl">
            <div className="relative flex flex-col items-center gap-2 p-4">
              <div className="absolute left-0 top-1/4 h-1/2 w-px bg-white hidden sm:block" />
              <h3 className="text-2xl font-bold">2.4 seconds</h3>
              <p className="text-lg font-medium">Acceleration</p>
            </div>
            <div className="relative flex flex-col items-center gap-2 p-4">
              <div className="absolute left-0 top-1/4 h-1/2 w-px bg-white hidden sm:block" />
              <h3 className="text-2xl font-bold">250 km/h</h3>
              <p className="text-lg font-medium">Top Speed</p>
            </div>
            <div className="relative flex flex-col items-center gap-2 p-4">
              <div className="absolute left-0 top-1/4 h-1/2 w-px bg-white hidden sm:block" />
              <h3 className="text-2xl font-bold">300 miles</h3>
              <p className="text-lg font-medium">Range</p>
            </div>
            <div className="relative flex flex-col items-center gap-2 p-4">
              <div className="absolute left-0 top-1/4 h-1/2 w-px bg-white hidden sm:block" />
              <h3 className="text-2xl font-bold">777 hp</h3>
              <p className="text-lg font-medium">Horsepower</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
