import { useState } from "react";
import SelectPais from "../../components/selectores/SelectPais";
import SelectProvincia from "../../components/selectores/SelectProvincia";
import SelectCiudad from "../../components/selectores/SelectCiudad";
import SelectCategoria from "../../components/selectores/SelectCategoria";
import HotelList from "../../components/hotel/HotelList";
import Filtro from "../../components/Filtro";
import Fecha from "../../components/Fecha";
import Header from "../../components/header/Header";
import ButtonLink from "../../components/helpers/ButtonLink";

function HotelesPage() {
  const [pais, setPais] = useState("");
  const [provincia, setProvincia] = useState("");
  const [ciudad, setCiudad] = useState("");
  const [categoria, setCategoria] = useState(null);

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
        <Fecha />
        <Fecha />
      </Filtro>
      <h2 className="text-3xl">HOTELES</h2>
      <div>
        <ButtonLink texto={"Agregar Hotel"} url={"/hotel-form"} />
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
      />
    </div>
  );
}

export default HotelesPage;
