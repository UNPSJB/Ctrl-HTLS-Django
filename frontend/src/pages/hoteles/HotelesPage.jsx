import { useState } from "react";
import { useNavigate } from "react-router-dom";
import SelectPais from "../../components/selectores/SelectPais";
import SelectProvincia from "../../components/selectores/SelectProvincia";
import SelectCiudad from "../../components/selectores/SelectCiudad";
import SelectCategoria from "../../components/selectores/SelectCategoria";
import HotelList from "../../components/hotel/HotelList";
import Filtro from "../../components/Filtro";
import Header from "../../components/header/Header";
import ButtonLink from "../../components/helpers/ButtonLink";

function HotelesPage() {
  const [pais, setPais] = useState("");
  const [provincia, setProvincia] = useState("");
  const [ciudad, setCiudad] = useState("");
  const [categoria, setCategoria] = useState(null);
  const [fechaEntrada, setFechaEntrada] = useState("2000-01-01");
  const [fechaSalida, setFechaSalida] = useState("2999-12-30");

  const navigate = useNavigate();

  const handleAgregarHotelClick = () => {
    localStorage.removeItem("hotelExistente");
    navigate("/hotel-form");
  };

  const secondNavBarContent = (
    <>
      <Filtro>
        <SelectPais
          className="text-Letras bg-FondoHotel w-full p-2 rounded-md"
          pais={pais}
          setPais={setPais}
        />
        <SelectProvincia
          className="text-Letras bg-FondoHotel w-full p-2 rounded-md"
          pais={pais}
          provincia={provincia}
          setProvincia={setProvincia}
        />
        <SelectCiudad
          className="text-Letras bg-FondoHotel w-full p-2 rounded-md"
          provincia={provincia}
          ciudad={ciudad}
          setCiudad={setCiudad}
        />
        <SelectCategoria
          className="text-Letras bg-FondoHotel w-full p-2 rounded-md"
          categoria={categoria}
          setCategoria={setCategoria}
        />
        <input
          type="date"
          value={fechaEntrada}
          onChange={(e) => setFechaEntrada(e.target.value)}
        />
        <input
          type="date"
          value={fechaSalida}
          onChange={(e) => setFechaSalida(e.target.value)}
        />
      </Filtro>
      <h2 className="text-3xl">HOTELES</h2>
      <div>
        <button
          className="text-LetraAgregarHotel bg-AgregarHotel hover:bg-purple-100 font-bold py-2 px-4 rounded flex items-center"
          onClick={handleAgregarHotelClick}
        >
          Agregar Hotel
        </button>
      </div>
    </>
  );

  return (
    <div>
      <Header secondNavBarChildren={secondNavBarContent} />
      <HotelList
        pais={pais}
        provincia={provincia}
        ciudad={ciudad}
        categoria={categoria}
        fechaEntrada={fechaEntrada}
        fechaSalida={fechaSalida}
      />
    </div>
  );
}

export default HotelesPage;
