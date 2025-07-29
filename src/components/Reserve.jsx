export default function Reserve() {
  const taycanModels = [
    "Taycan",
    "Taycan 4S",
    "Taycan Turbo",
    "Taycan Turbo S",
    "Taycan GTS",
    "Taycan Cross Turismo",
    "Taycan Sport Turismo",
  ];

  return (
    <section className="bg-white my-8 flex justify-center">
      <div className="max-w-[1280px] w-full flex flex-col lg:flex-row gap-8 p-4 lg:p-0">
        {/* Text Section */}
        <div className="w-full lg:w-1/2 flex flex-col text-gray-800 text-base leading-relaxed">
          <h2 className="text-3xl text-black font-semibold mb-4 max-w-md">
            Reserve Your Taycan Today.
          </h2>
          <p className="text-gray-600 mb-4">
            Take the first step towards electric performance. Reserve your
            Taycan today and experience the future of driving.
          </p>
          <img
            src="./assets/Logotipo.png"
            alt="Porsche logo"
            className="w-[200px] h-[200px] lg:w-[150px] lg:h-[150px] sm:w-[100px] sm:h-[100px]"
          />
        </div>

        {/* Form Section */}
        <div className="w-full lg:w-1/2 bg-gray-100 rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-6">
            FILL OUT FORM BELOW TO RESERVE
          </h2>
          <form>
            <div className="flex flex-col gap-1 mb-4">
              <label htmlFor="name" className="text-sm font-medium">
                Nombre
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="w-full h-10 rounded-md border border-gray-300 px-3 focus:outline-none hover:border-black transition"
              />
            </div>

            <div className="flex flex-col gap-1 mb-4">
              <label htmlFor="email" className="text-sm font-medium">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="w-full h-10 rounded-md border border-gray-300 px-3 focus:outline-none hover:border-black transition"
              />
            </div>

            <div className="flex flex-col gap-1 mb-4">
              <label htmlFor="phone" className="text-sm font-medium">
                Teléfono
              </label>
              <input
                type="number"
                id="phone"
                name="phone"
                required
                className="w-full h-10 rounded-md border border-gray-300 px-3 focus:outline-none hover:border-black transition"
              />
            </div>

            <div className="flex flex-col gap-1 mb-4">
              <label htmlFor="model" className="text-sm font-medium">
                Modelo Taycan
              </label>
              <select
                id="model"
                name="model"
                required
                className="w-full h-10 rounded-md border border-gray-300 px-3"
              >
                <option value="">Selecciona un modelo</option>
                {taycanModels.map((model) => (
                  <option key={model} value={model} className="text-black">
                    {model}
                  </option>
                ))}
              </select>
            </div>

            <button
              type="submit"
              className="w-full h-10 rounded-md bg-white border border-gray-300 shadow-sm font-medium hover:bg-zinc-900 hover:text-white transition"
            >
              Reservar
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
