import { motion } from "framer-motion";
import {
  ChevronDownIcon,
  Bars3Icon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import { SECTIONS } from "../constants/sections";
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";

const navigation = [
  { name: "Home", href: `#${SECTIONS.HERO}`, current: true },
  { name: "Highlights", href: `#${SECTIONS.HIGHLIGHT}`, current: false },
  { name: "Models", href: `#${SECTIONS.MODELS}`, current: false },
  { name: "Reserve", href: `#${SECTIONS.RESERVE}`, current: false },
  { name: "Specification", href: `#${SECTIONS.SPECIFICATION}`, current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function NavBar() {
  // Variants para el hero
  const heroTitle = {
    hidden: { opacity: 0, y: 24 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };
  const btnsContainer = {
    hidden: {},
    show: { transition: { staggerChildren: 0.12, delayChildren: 0.15 } },
  };
  const btnItem = {
    hidden: { opacity: 0, y: 10 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  };

  return (
    <header className="w-full h-[600px] sm:h-[920px]">
      {/* Fondo con zoom-in suave */}
      <motion.div
        className="w-full h-full bg-center bg-no-repeat bg-cover relative will-change-transform"
        style={{ backgroundImage: "url(./assets/Taycan_green.webp)" }}
        initial={{ scale: 1.05 }}
        animate={{ scale: 1 }}
        transition={{ duration: 2.0, ease: "easeOut" }}
      >
        {/* overlay para legibilidad del texto */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/10 to-black/40" />

        {/* NAV */}
        <Disclosure
          aria-label="Principal"
          as="nav"
          className="relative z-10 bg-gray-400/70 rounded-lg max-w-[1280px] mx-auto px-4 py-4"
        >
          {({ open }) => (
            <>
              <div className="relative flex h-11 items-center justify-between">
                {/* Mobile button */}
                <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                  <DisclosureButton
                    aria-label={
                      open
                        ? "Cerrar menú de navegación"
                        : "Abrir menú de navegación"
                    }
                    className="group relative inline-flex items-center justify-center rounded-md p-2 text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-white focus:ring-inset"
                  >
                    <span className="sr-only">
                      {open
                        ? "Cerrar menú de navegación"
                        : "Abrir menú de navegación"}
                    </span>
                    <Bars3Icon
                      className={classNames(
                        open ? "hidden" : "block",
                        "h-6 w-6"
                      )}
                    />
                    <XMarkIcon
                      className={classNames(
                        open ? "block" : "hidden",
                        "h-6 w-6"
                      )}
                    />
                  </DisclosureButton>
                </div>

                {/* Logo + desktop nav */}
                <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                  <div className="flex shrink-0 items-center">
                    <span className="text-white text-xl font-bold">TAYCAN</span>
                  </div>
                  <div className="hidden sm:ml-6 sm:block">
                    <div className="flex space-x-4">
                      {navigation.map((item) => (
                        <a
                          key={item.name}
                          href={item.href}
                          aria-current={item.current ? "page" : undefined}
                          className={classNames(
                            item.current
                              ? "bg-gray-900 text-white"
                              : "text-white hover:bg-gray-700 hover:text-white",
                            "rounded-md px-3 py-2 text-sm font-medium",
                            "transition-transform duration-200 hover:-translate-y-0.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
                          )}
                        >
                          {item.name}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>

                {/* CTA derecha */}
                <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                  <a
                    href={`#${SECTIONS.RESERVE}`}
                    className="text-center flex items-center justify-center font-semibold relative w-[100px] h-[35px] text-sm bg-white text-black rounded-full shadow-md hover:bg-gray-900 hover:text-white transition duration-300"
                  >
                    Contact
                  </a>
                </div>
              </div>

              {/* Mobile panel */}
              <DisclosurePanel className="sm:hidden">
                <div className="space-y-1 px-2 pt-2 pb-3">
                  {navigation.map((item) => (
                    <DisclosureButton
                      key={item.name}
                      as="a"
                      href={item.href}
                      aria-current={item.current ? "page" : undefined}
                      className={classNames(
                        item.current
                          ? "bg-gray-900 text-white"
                          : "text-white hover:bg-gray-700 hover:text-white",
                        "block rounded-md px-3 py-2 text-base font-medium"
                      )}
                    >
                      {item.name}
                    </DisclosureButton>
                  ))}
                </div>
              </DisclosurePanel>
            </>
          )}
        </Disclosure>

        {/* HERO */}
        <section
          id={SECTIONS.HERO}
          className="relative z-10 flex flex-col items-center justify-center text-center px-4 mt-8 sm:mt-12 pb-16"
        >
          {/* Título con fade + slide */}
          <motion.h1
            variants={heroTitle}
            initial="hidden"
            animate="show"
            className="text-4xl sm:text-5xl md:text-6xl text-white font-semibold drop-shadow-[0_4px_6px_rgba(0,0,0,0.7)]"
          >
            Driven By Dreams
          </motion.h1>

          {/* Botones con stagger */}
          <motion.div
            variants={btnsContainer}
            initial="hidden"
            animate="show"
            className="flex flex-col sm:flex-row gap-4 mt-8"
          >
            <motion.a
              variants={btnItem}
              href={`#${SECTIONS.SPECIFICATION}`}
              className="text-white text-lg rounded-md bg-[#1b3c2e] px-6 py-2
                         transition-transform duration-200 hover:-translate-y-0.5 hover:shadow-lg active:translate-y-0
                         focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
            >
              Especificar
            </motion.a>

            <motion.a
              variants={btnItem}
              href={`#${SECTIONS.HIGHLIGHT}`}
              className="text-white text-lg rounded-md bg-[#1b3c2e] px-6 py-2
                         transition-transform duration-200 hover:-translate-y-0.5 hover:shadow-lg active:translate-y-0
                         focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
            >
              Highlights
            </motion.a>
          </motion.div>

          {/* Indicador de scroll (bounce leve) */}
          <motion.button
            aria-label="Bajar a Highlights"
            onClick={() =>
              document
                .getElementById(SECTIONS.HIGHLIGHT)
                ?.scrollIntoView({ behavior: "smooth", block: "start" })
            }
            className="mt-10 rounded-full p-2 outline-none"
            animate={{ y: [0, 6, 0] }}
            transition={{
              repeat: Infinity,
              duration: 1.6,
              ease: "easeInOut",
              delay: 0.6,
            }}
          >
            <ChevronDownIcon className="h-7 w-7 text-white/90" />
          </motion.button>
        </section>
      </motion.div>
    </header>
  );
}
