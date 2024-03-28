import React from "react";

export const NavBar = () => {
  return (
    <header className="flex mx-auto justify-between py-3 bg-slate-500">
      <div className="mx-4">
        <p className="text-center">Portfolio Performance</p>
      </div>
      <nav className="flex flex-row gap-x-10 opacity-90 text-center mx-4">
        <a href="/">Inicio</a>
        <a href="/Cartera">Cartera</a>
        <a href="/Rendimientos">Rendimientos</a>
      </nav>
    </header>
  );
};
