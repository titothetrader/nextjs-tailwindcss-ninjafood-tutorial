import { useState } from "react";

import { FiHome, FiAtSign, FiClock } from "react-icons/fi";
import { FaHamburger, FaRegQuestionCircle } from "react-icons/fa";

export default function Home() {
  const [burger, setBurger] = useState(false); // TRUE is open, FALSE is closed

  const openBurger = () => {
    setBurger(!burger);
    return burger;
  };

  return (
    <div className="text-gray-600 font-myFont">
      {/* Content wrapper */}
      <div className="grid md:grid-cols-3">
        <div className="md:flex md:col-span-1 md:justify-end ">
          <nav className="text-right">
            <div className="flex items-center justify-between">
              <h1 className="p-4 font-bold uppercase border-b border-gray-100">
                <a
                  href="#"
                  className="text-green-500 sm:text-red-500 lg:text-blue-500 hover:text-gray-500"
                >
                  Food Ninja
                </a>
              </h1>
              <div
                id="burger"
                className="px-4 cursor-pointer md:hidden hover:text-gray-500"
              >
                <FaHamburger
                  onClick={openBurger}
                  className={`hover:text-gray-600 ${
                    burger ? "text-green-600" : "text-gray-400"
                  }`}
                />
              </div>
            </div>
            <ul
              id="menu"
              className={`md:block mt-6 text-sm ${burger ? "block" : "hidden"}`}
            >
              <li className="py-1 font-bold text-gray-700">
                <a
                  href="#"
                  className="flex justify-end gap-1 px-4 border-r-4 border-primary"
                >
                  <span>Home</span>
                  <FiHome />
                </a>
              </li>
              <li className="py-1">
                <a
                  href="#"
                  className="flex justify-end gap-1 px-4 border-r-4 border-transparent"
                >
                  <span>About</span>
                  <FaRegQuestionCircle />
                </a>
              </li>
              <li className="py-1">
                <a
                  href="#"
                  className="flex justify-end gap-1 px-4 border-r-4 border-transparent"
                >
                  <span>Contact</span>
                  <FiAtSign />
                </a>
              </li>
            </ul>
          </nav>
        </div>
        {/* END NAV */}

        <main className="px-16 py-6 bg-gray-100 md:col-span-2">
          <div className="flex justify-center md:justify-end">
            <a
              href="#"
              className="transition-general md:border-2 border-primary text-primary btn hover:bg-primary hover:text-white"
            >
              Log In
            </a>
            <a
              href="#"
              className="ml-2 transition-general md:border-2 text-primary btn border-primary hover:bg-primary hover:text-white"
            >
              Sign Up
            </a>
          </div>

          <header>
            <h2 className="text-6xl font-semibold text-gray-700">Recipes</h2>
            <h3 className="text-2xl font-semibold">For Ninjas</h3>
          </header>

          <div>
            <h4 className="title">Latest Recipes</h4>
            <div className="grid gap-10 mt-8 lg:grid-cols-3">
              {/* CARDS GO HERE */}
              <div className="card">
                <img
                  src="./img/stew.jpg"
                  alt="stew"
                  className="object-cover w-full h-32 sm:h-48 w-"
                />
                <div className="m-4">
                  <span className="font-bold">5 Bean Chilli Stew</span>
                  <span className="block text-sm text-grey-500">
                    Recipe by Mario
                  </span>
                </div>
                <div className="flex gap-1 badge">
                  <FiClock />
                  <span>25 mins</span>
                </div>
              </div>
              <div className="card">
                <img
                  src="./img/noodles.jpg"
                  alt="noodles"
                  className="object-cover w-full h-32 sm:h-48 w-"
                />
                <div className="m-4">
                  <span className="font-bold">Veggie Noodles</span>
                  <span className="block text-sm text-grey-500">
                    Recipe by Lei
                  </span>
                </div>
                <div className="flex gap-1 badge">
                  <FiClock />
                  <span>25 mins</span>
                </div>
              </div>
              <div className="card">
                <img
                  src="./img/curry.jpg"
                  alt="curry"
                  className="object-cover w-full h-32 sm:h-48 w-"
                />
                <div className="m-4">
                  <span className="font-bold">Tofu Curry</span>
                  <span className="block text-sm text-grey-500">
                    Recipe by Shankar
                  </span>
                </div>
                <div className="flex gap-1 badge">
                  <FiClock />
                  <span>25 mins</span>
                </div>
              </div>
            </div>

            <h4 className="title">Most Popular</h4>
            <div className="mt-8">{/* CARDS GO HERE */}</div>

            <div className="flex justify-center">
              <div className="scale-up transition-general bg-secondary-100 text-secondary-200 btn hover:shadow-inner">
                Load more
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
