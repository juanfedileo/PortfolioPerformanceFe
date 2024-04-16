import React from "react";
import "./App.css";
import { NavBar } from "./components/NavBar";
import SimpleTable from "./components/Tables/SimpleTable";
import MountForm from "./components/Tables/MountForm";
import { Flowbite } from "flowbite-react";
function App() {
  return (
    <>
      <Flowbite theme={{ mode: "dark" }}>
        <NavBar />
        <div className="relative flex">
          <SimpleTable />
          <MountForm />
        </div>
      </Flowbite>
    </>
  );
}

export default App;
