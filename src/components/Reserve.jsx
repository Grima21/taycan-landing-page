import { SECTIONS } from "../constants/sections";
import Reveal from "./Reveal";
import { Fragment, useState } from "react";
import { Listbox, Transition } from "@headlessui/react";
import { ChevronUpDownIcon, CheckIcon } from "@heroicons/react/24/outline";

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

  // estado controlado para el modelo seleccionado
  const [selectedModel, setSelectedModel] = useState("");

  return (
    <Reveal
      as="section"
      id={SECTIONS.RESERVE}
      className="bg-white my-8 flex justify-center sm:h-[700px] mt-10"
    >
      <div className="max-w-[1280px] w-full flex items-center flex-col lg:flex-row gap-8 p-4 lg:p-0">
        {/* Text Section */}
        <div className="w-full lg:w-1/2 flex flex-col text-gray-800 text-base leading-relaxed">
          <h2 className="text-3xl text-black font-semibold mb-4 max-w-md">
            Reserve Your Taycan Today.
          </h2>
          <p className="text-gray-700 mb-4">
            Take the first step towards electric performance. Reserve your
            Taycan today and experience the future of driving.
          </p>
          <img
            src="./assets/Logotipo.webp"
            alt="Porsche logo"
            className="w-[200px] h-[200px] lg:w-[150px] lg:h-[150px] sm:w-[100px] sm:h-[100px]"
          />
        </div>

        {/* Form Section */}
        <div className="w-full lg:w-1/2 sm:h-[500px] bg-gray-100 rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-6">
            FILL OUT FORM BELOW TO RESERVE
          </h2>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              const data = new FormData(e.currentTarget);
              // aquí podrías manejar el submit
              // console.log(Object.fromEntries(data.entries()));
            }}
          >
            {/* Nombre */}
            <div className="flex flex-col gap-1 mb-4 transition-transform duration-200 hover:-translate-y-0.5">
              <label htmlFor="name" className="text-sm font-medium">
                Nombre
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="w-full h-10 rounded-md border border-gray-300 px-3
                           focus:outline-none focus:ring-2 focus:ring-emerald-700 focus:border-emerald-400
                           hover:border-gray-400 transition"
              />
            </div>

            {/* Email */}
            <div className="flex flex-col gap-1 mb-4 transition-transform duration-200 hover:-translate-y-0.5">
              <label htmlFor="email" className="text-sm font-medium">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="w-full h-10 rounded-md border border-gray-300 px-3
                           focus:outline-none focus:ring-2 focus:ring-emerald-700 focus:border-emerald-400
                           hover:border-gray-400 transition"
              />
            </div>

            {/* Teléfono */}
            <div className="flex flex-col gap-1 mb-4 transition-transform duration-200 hover:-translate-y-0.5">
              <label htmlFor="phone" className="text-sm font-medium">
                Teléfono
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                required
                className="w-full h-10 rounded-md border border-gray-300 px-3
                           focus:outline-none focus:ring-2 focus:ring-emerald-700 focus:border-emerald-400
                           hover:border-gray-400 transition"
              />
            </div>

            {/* Modelo (Listbox animado) */}
            <div className="flex flex-col gap-1 mb-4">
              <label htmlFor="model" className="text-sm font-medium">
                Modelo Taycan
              </label>

              {/* el name="model" asegura que se envía en el form */}
              <Listbox
                value={selectedModel}
                onChange={setSelectedModel}
                name="model"
              >
                <div className="relative">
                  {/* Botón del select */}
                  <Listbox.Button
                    id="model"
                    className="relative w-full h-10 cursor-default rounded-md border border-gray-300 bg-white pl-3 pr-10 text-left
                               focus:outline-none focus:ring-2 focus:ring-emerald-700 focus:border-emerald-400
                               transition duration-200 hover:border-gray-400"
                  >
                    <span className="block truncate">
                      {selectedModel || "Selecciona un modelo"}
                    </span>
                    <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                      <ChevronUpDownIcon className="h-5 w-5 text-gray-500" />
                    </span>
                  </Listbox.Button>

                  {/* Panel animado */}
                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-150"
                    enterFrom="opacity-0 scale-95 translate-y-1"
                    enterTo="opacity-100 scale-100 translate-y-0"
                    leave="transition ease-in duration-100"
                    leaveFrom="opacity-100 scale-100 translate-y-0"
                    leaveTo="opacity-0 scale-95 translate-y-1"
                  >
                    <Listbox.Options className="absolute z-10 mt-2 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-2xl ring-1 ring-black/5 focus:outline-none">
                      {/* Opción vacía */}
                      <Listbox.Option
                        key="__empty__"
                        value=""
                        className="relative cursor-default select-none py-2 pl-9 pr-3 text-sm text-gray-800"
                      >
                        <span className="block truncate">
                          Selecciona un modelo
                        </span>
                      </Listbox.Option>

                      {/* Opciones reales */}
                      {taycanModels.map((m) => (
                        <Listbox.Option
                          key={m}
                          value={m}
                          className={({ active }) =>
                            `relative cursor-default select-none py-2 pl-9 pr-3 text-sm
                             ${
                               active
                                 ? "bg-emerald-50 text-emerald-700"
                                 : "text-gray-800"
                             }`
                          }
                        >
                          {({ selected }) => (
                            <>
                              <span
                                className={`block truncate ${
                                  selected ? "font-medium" : "font-normal"
                                }`}
                              >
                                {m}
                              </span>
                              {selected && (
                                <span className="absolute inset-y-0 left-2 flex items-center">
                                  <CheckIcon className="h-4 w-4" />
                                </span>
                              )}
                            </>
                          )}
                        </Listbox.Option>
                      ))}
                    </Listbox.Options>
                  </Transition>
                </div>
              </Listbox>
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="w-full h-10 rounded-md bg-white border border-gray-300 shadow-sm font-medium
                         transition-transform duration-300 hover:-translate-y-0.4 hover:shadow-lg
                         hover:bg-zinc-900  hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-black"
            >
              Reservar
            </button>
          </form>
        </div>
      </div>
    </Reveal>
  );
}
