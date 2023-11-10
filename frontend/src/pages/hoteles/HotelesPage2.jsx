import { useState } from "react";
import { Link } from "react-router-dom";
import SelectPais from "../../components/selectores/SelectPais";
import SelectProvincia from "../../components/selectores/SelectProvincia";
import SelectCiudad from "../../components/selectores/SelectCiudad";
import SelectCategoria from "../../components/selectores/SelectCategoria";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlus } from "@fortawesome/free-solid-svg-icons";
import HotelList from "../../components/hotel/HotelList";
import SecondNavBar from "../../components/SecondNavBar";

function HotelesPage() {
  const [pais, setPais] = useState("");
  const [provincia, setProvincia] = useState("");
  const [ciudad, setCiudad] = useState("");
  const [categoria, setCategoria] = useState(null);
  const [mostrarFiltros, setMostrarFiltros] = useState(false);

  const [fechaInicio, setFechaInicio] = useState("");
  const [fechaFin, setFechaFin] = useState("");

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   onFiltrar(fechaInicio, fechaFin);
  // };

  const toggleFiltros = () => {
    setMostrarFiltros(!mostrarFiltros);
  };

  const handleResetFiltros = () => {
    setPais("");
    setProvincia("");
    setCiudad("");
    setCategoria(null);
    setFechaInicio("");
    setFechaFin("");
  };

  return (
    <>
      <SecondNavBar>
        {/* Menú desplegable de filtros */}
        <div className="relative">
          <button
            className="border border-gray-300 py-2 px-4 rounded-md ml-2"
            onClick={toggleFiltros}
          >
            Buscar por
          </button>
          {mostrarFiltros && (
            <div className="absolute z-10 bg-white border border-gray-300 p-4 mt-2 rounded-md text-black">
              <SelectPais pais={pais} setPais={setPais} />
              <SelectProvincia
                pais={pais}
                provincia={provincia}
                setProvincia={setProvincia}
              />
              <SelectCiudad
                provincia={provincia}
                ciudad={ciudad}
                setCiudad={setCiudad}
              />
              <SelectCategoria
                categoria={categoria}
                setCategoria={setCategoria}
              />
              <input
                type="date"
                placeholder="Fecha de inicio"
                value={fechaInicio}
                onChange={(e) => setFechaInicio(e.target.value)}
              />
              <input
                type="date"
                placeholder="Fecha de fin"
                value={fechaFin}
                onChange={(e) => setFechaFin(e.target.value)}
              />
              <button
                className="cursor-pointer border rounded-md py-1 px-4 bg-red-500"
                onClick={handleResetFiltros}
              >
                Reset
              </button>
            </div>
          )}
        </div>
        <h1 className="text-3xl">HOTELES</h1>
        <button className="border rounded-md p-2 bg-AgregarHotel text-LetraAgregarHotel">
          <Link to="/hotel-form">
            <FontAwesomeIcon icon={faCirclePlus} /> <span>Agregar Hotel</span>
          </Link>
        </button>
      </SecondNavBar>
      {/* Lista de hoteles filtrados */}
      <HotelList
        pais={pais}
        provincia={provincia}
        ciudad={ciudad}
        categoria={categoria}
      />
    </>
  );
}

export default HotelesPage;
