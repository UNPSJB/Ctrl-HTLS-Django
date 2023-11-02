import { useState } from "react";
import { Link } from "react-router-dom";
import HotelList from "../../components/hotel/HotelList";
import SelectPais from "../../components/selectores/SelectPais";
import SelectProvincia from "../../components/selectores/SelectProvincia";
import SelectCiudad from "../../components/selectores/SelectCiudad";
import SelectCategoria from "../../components/selectores/SelectCategoria";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faCirclePlus } from '@fortawesome/free-solid-svg-icons';
import Navigation from "../../components/Navigation";

export default function HotelesPage() {
  const [pais, setPais] = useState("");
  const [provincia, setProvincia] = useState("");
  const [ciudad, setCiudad] = useState("");
  const [categoria, setCategoria] = useState(null);
  const [mostrarFiltros, setMostrarFiltros] = useState(false);

  const toggleFiltros = () => {
    setMostrarFiltros(!mostrarFiltros);
  };

  const handleResetFiltros = () => {
    setPais("")
    setProvincia("")
    setCiudad("")
    setCategoria(null)
  }

  return (
    <div>
      <Navigation>
        <Link to="/" className="flex m-4 items-center">
          <FontAwesomeIcon icon={faHome} className="text-red-500" />
        </Link>
        <Link to="/hotel-form">
          <FontAwesomeIcon icon={faCirclePlus} />    Agregar Hotel
        </Link>
        {/* Menú desplegable de filtros */}
        <div className="relative">
          <button
            className="border border-gray-300 py-2 px-4 rounded-md ml-2"
            onClick={toggleFiltros}
          >
            Buscar por
          </button>
          {mostrarFiltros && (
            <div className="absolute z-10 bg-white border border-gray-300 p-4 mt-2 rounded-md">
              <SelectPais pais={pais} setPais={setPais} />
              <SelectProvincia pais={pais} provincia={provincia} setProvincia={setProvincia} />
              <SelectCiudad provincia={provincia} ciudad={ciudad} setCiudad={setCiudad} />
              <SelectCategoria categoria={categoria} setCategoria={setCategoria} />
              <button className="cursor-pointer border rounded-md py-1 px-4 bg-red-500" onClick={handleResetFiltros}>Reset</button>
            </div>
          )}
        </div>
      </Navigation>
      {/* Lista de hoteles filtrados */}
      <HotelList pais={pais} provincia={provincia} ciudad={ciudad} categoria={categoria} />
    </div>
  );
}