import { SECTIONS } from "../constants/sections";
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
} from "@headlessui/react";
import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/react/24/outline";

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
  return (
    <header className="w-full h-[600px] sm:h-[850px] ">
      <div
        className="w-full h-full bg-center bg-no-repeat bg-cover"
        style={{ backgroundImage: "url(./assets/Taycan_green.jpg)" }}
      >
        <Disclosure
          as="nav"
          className="bg-gray-400/70 rounded-lg max-w-[1280px]  mx-auto px-4 py-4 "
        >
          {({ open }) => (
            <>
              <div className="relative flex h-11 items-center justify-between ">
                <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                  <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-white hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-inset">
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
                            "rounded-md px-3 py-2 text-sm font-medium"
                          )}
                        >
                          {item.name}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                  <a
                    href={`#${SECTIONS.RESERVE}`}
                    className="text-center flex items-center justify-center font-semibold relative w-[100px] h-[35px] text-sm bg-white text-black rounded-full shadow-md hover:bg-gray-900 hover:text-white transition duration-300"
                  >
                    Contact
                  </a>
                </div>
              </div>

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
        <div
          id={SECTIONS.HERO}
          className="flex flex-col items-center justify-center text-center px-4 mt-8 sm:mt-12"
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl text-white font-semibold drop-shadow-[0_4px_6px_rgba(0,0,0,0.7)]">
            Driven By Dreams
          </h1>
          <div className="flex flex-col sm:flex-row gap-4 mt-8">
            <a
              href={`#${SECTIONS.MODELS}`}
              className="text-white text-lg rounded-md bg-[#1b3c2e] px-6 py-2 hover:bg-[#164f3a] transition"
            >
              Especificar
            </a>
            <a
              href={`#${SECTIONS.HIGHLIGHT}`}
              className="text-white text-lg rounded-md bg-[#1b3c2e] px-6 py-2 hover:bg-[#164f3a] transition"
            >
              Highlights
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
