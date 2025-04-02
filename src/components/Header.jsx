import React from "react";
import logo from "../images/senscritique.webp";

export default function Header() {
  return (
    <div className="bg-white w-full flex justify-between p-4 items-center shadow-md">
      <h1 className="text-red-500 font-bold text-xl">Airbed & Breakfast</h1>
      <nav className="flex justify-evenly w-2xs nav">
        <a className="text-gray-600 hover:text-black" href="#">
          Maisons
        </a>
        <a className="text-gray-600 hover:text-black" href="#">
          Appartements
        </a>
        <a className="text-gray-600 hover:text-black" href="#">
          Villas
        </a>
      </nav>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
        className="size-6 burger"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
        />
      </svg>
    </div>
  );
}
