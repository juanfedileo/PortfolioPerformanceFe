import { React, useState } from "react";
import { Datepicker, Dropdown, Label, Select } from "flowbite-react";
import UsaFlag from "../Flags/UsaFlag";
import EuroFlag from "../Flags/EuroFlag";
import GbpFlag from "../Flags/GbpFlag";
import ArgentinaFlag from "../Flags/ArgentinaFlag";

const MountForm = () => {
  const [selectedTitle, setSelectedTitle] = useState("USD");
  const [selectedIcon, setSelectedIcon] = useState(<UsaFlag />);
  const [selectedActivo, setSelectedActivo] = useState("Cripto");

  const handleItemClick = (title, icon) => {
    setSelectedTitle(title);
    setSelectedIcon(icon);
  };

  const handleChangeActiveType = (activo) => {
    setSelectedActivo(activo);
  };

  return (
    <>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg max-w-[50%] max-h-[50%] m-10 bg-gray-800 flex-1">
        <div className="text-xs uppercase bg-gray-700 text-gray-400 px-6 py-3 text-center">
          <span className="font-bold">AGREGAR INVERSIONES</span>
        </div>
        <form className="max-w-[18rem] mx-auto flex m-4 flex-col">
          <div className="py-2">
            <Label value="Precio de Compra" />
            <div className="flex">
              <div className="relative w-full">
                <div className="absolute inset-y-0 start-0 top-0 flex items-center ps-3.5 pointer-events-none ">
                  <svg
                    className="w-4 h-4 text-gray-400"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 20 16"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 2a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1M2 5h12a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1Zm8 5a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z"
                    />
                  </svg>
                </div>
                <input
                  type="number"
                  id="currency-input"
                  className="block p-2.5 w-full z-20 ps-10 text-sm  rounded-s-lg  border-e-2 border  focus:ring-blue-500 focus:outline-none bg-gray-700 border-e-gray-700  border-gray-600 placeholder-gray-400 text-white focus:border-blue-500"
                  placeholder="Enter amount"
                  required
                />
              </div>
              <Dropdown
                class="flex-shrink-0 z-10 inline-flex items-center text-sm font-medium text-center  border  rounded-e-lg focus:ring-4 focus:outline-none bg-gray-700 hover:bg-gray-600 focus:ring-blue-500 text-white border-gray-600"
                label={
                  <>
                    {selectedIcon && <span>{selectedIcon}</span>}
                    {selectedTitle}
                  </>
                }
                dismissOnClick={false}
              >
                <Dropdown.Item
                  onClick={() => handleItemClick("USD", <UsaFlag />)}
                >
                  <UsaFlag />
                  USD
                </Dropdown.Item>
                <Dropdown.Item
                  onClick={() => handleItemClick("EUR", <EuroFlag />)}
                >
                  <EuroFlag />
                  EUR
                </Dropdown.Item>
                <Dropdown.Item
                  onClick={() => handleItemClick("GBL", <GbpFlag />)}
                >
                  <GbpFlag />
                  GBL
                </Dropdown.Item>
                <Dropdown.Item
                  onClick={() => handleItemClick("ARS", <ArgentinaFlag />)}
                >
                  <ArgentinaFlag />
                  ARS
                </Dropdown.Item>
              </Dropdown>
            </div>
          </div>
          <div>
            <Label value="Cantidad de activos" />
            <input
              type="number"
              id="number-input"
              aria-describedby="helper-text-explanation"
              className="border  text-sm rounded-lg  block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
              required
            />
          </div>
          <div className="py-2">
            <Label value="Fecha de la inversión" />
            <Datepicker
              language="es-ES"
              class=" border text-sm rounded-lg block w-full ps-10 p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          <div className="py-2">
            <Label value="Tipo de activo" />
            <Select id="actives-type" required>
              <option onClick={() => handleChangeActiveType("Cripto")}>
                Cripto
              </option>
              <option onClick={() => handleChangeActiveType("Acciones")}>
                Acciones
              </option>
              <option onClick={() => handleChangeActiveType("Bonos")}>
                Bonos
              </option>
            </Select>
          </div>
          <div className="py-2">
            <Label value={selectedActivo} />
            <Select id="actives-list" required>
              <option>Cripto</option>
              <option>Acciones</option>
              <option>Bonos</option>
            </Select>
          </div>
        </form>
      </div>
    </>
  );
};

export default MountForm;
