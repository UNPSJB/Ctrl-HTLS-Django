import { useState } from "react";
import SelectPais from "../../components/selectores/SelectPais";
import SelectProvincia from "../../components/selectores/SelectProvincia";
import SelectCiudad from "../../components/selectores/SelectCiudad";
import SelectCategoria from "../../components/selectores/SelectCategoria";
import Filtro from "../../components/Filtro";
import Header from "../../components/header/Header";
import HotelListAlquilar from "../../components/alquilar/HotelListAlquilar";

function AlquileresPage() {
  const [pais, setPais] = useState("");
  const [provincia, setProvincia] = useState("");
  const [ciudad, setCiudad] = useState("");
  const [categoria, setCategoria] = useState(null);

  const fechaActual = new Date().toISOString().split("T")[0];
  const [inicio, setInicio] = useState(fechaActual);
  const [fin, setFin] = useState(fechaActual);

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
          value={inicio}
          onChange={(e) => setInicio(e.target.value)}
        />
        <input
          type="date"
          value={fin}
          onChange={(e) => setFin(e.target.value)}
        />
      </Filtro>
      <h2 className="text-3xl">HOTELES</h2>
    </>
  );

  return (
    <div>
      <Header secondNavBarChildren={secondNavBarContent} />
      <HotelListAlquilar
        pais={pais}
        provincia={provincia}
        ciudad={ciudad}
        categoria={categoria}
        inicio={inicio}
        fin={fin}
      />
    </div>
  );
}

export default AlquileresPage;
