import React from "react";

export const NavBar = () => {
  return (
    <header className="flex mx-auto justify-between py-3 bg-gray-700">
      <div className="mx-4">
        <p className="text-center text-gray-400">Portfolio Performance</p>
      </div>
      <nav className="flex flex-row gap-x-10 text-center mx-4">
        <a href="/" className="text-gray-400">
          Inicio
        </a>
        <a href="/Cartera" className="text-gray-400">
          Cartera
        </a>
        <a href="/Rendimientos" className="text-gray-400">
          Rendimientos
        </a>
      </nav>
    </header>
  );
};
