import Reveal from "./Reveal"; // o "../components/Reveal" si no tienes alias

export default function TechnologyPreview() {
  return (
    <Reveal
      as="section"
      className="w-full sm:h-[700px] my-20 flex flex-col items-center justify-center p-8 bg-white"
    >
      <div className="w-full max-w-[1280px] flex flex-col md:flex-row items-center justify-center gap-20">
        {/* RIGHT */}
        <div className="w-full md:w-1/2 max-w-[600px] flex flex-col items-start justify-center p-8 md:text-left text-center">
          <h2 className="text-[2.5rem] sm:text-[3rem] md:text-[3.5rem] font-bold text-gray-800 mb-4">
            The Power At Your Finger Tips
          </h2>
          <p className="text-[1rem] sm:text-[1.1rem] md:text-[1.2rem] text-gray-600 leading-relaxed mb-4">
            Experience the future of electric performance with the Taycan's
            innovative technology. Every detail has been crafted to deliver an
            unparalleled driving experience that combines sustainability with
            pure excitement.
          </p>
          <button className="w-[150px] h-[40px] text-white bg-[#1b3c2e] rounded-lg text-base hover:bg-[#164f3a] transition">
            Learn More
          </button>
        </div>

        {/* LEFT */}
        <div className="w-full md:w-1/2 max-w-[600px] flex items-center justify-center p-8">
          <div className="w-full">
            <img
              src="../assets/Tycan.avif"
              alt="Taycan Technology"
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
      </div>
    </Reveal>
  );
}
