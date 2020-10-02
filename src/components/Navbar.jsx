import React from "react";
import Brand from "parts/Brand";
import ic_cart from "assets/images/icon/ic_cart.svg";

export default function Navbar(props) {
  return (
    <header className="lg:px-10  pr-4 bg-white flex flex-wrap items-center py-5">
      <div className="flex-1 flex justify-evenly items-center px-0">
        <Brand />
      </div>
      <form className="lg:w-9/12 md:w-5/12 w-7/12">
        <input
          className="shadow appearance-none border rounded w-full py-2 px-5 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="username"
          type="text"
          placeholder="Apa yang kamu cari?"
        />
      </form>

      <ul className="ml-8">
        <li>
          <img
            src={ic_cart}
            alt="icon-cart"
            className="pr-4"
            style={{ width: "40px", height: 40 }}
          />
        </li>
      </ul>

      <label htmlFor="menu-toggle" className="pointer-cursor md:hidden block">
        <svg
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </label>
      <input className="hidden" type="checkbox" id="menu-toggle" />

      <div
        className="hidden md:flex md:items-center md:w-auto w-full"
        id="menu"
      >
        <nav className="md:border-l-2 lg:border-none md:border-gray-200">
          <ul className="md:flex items-center justify-between text-base text-gray-700 pt-2 md:pt-0 pl-4 lg:ml-7 lg:pt-2">
            <li className="md:mx-4  my-3">
              <a
                className="bg-transparent hover:bg-indigo-500 text-indigo-500 font-medium hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded text-xs md:text-sm"
                href="/"
              >
                Masuk
              </a>
            </li>
            <li>
              <a
                className="bg-indigo-500  text-white font-medium py-2 px-4  rounded text-xs md:text-sm"
                href="/"
              >
                Daftar
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
