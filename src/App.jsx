import React from "react";
import "./App.css";
import { NavBar } from "./components/NavBar";
import SimpleTable from "./components/Tables/SimpleTable";
import MountForm from "./components/Tables/MountForm";
function App() {
  return (
    <>
      <NavBar />
      <div className="relative flex">
        <SimpleTable />
        <MountForm />
      </div>
    </>
  );
}

export default App;
