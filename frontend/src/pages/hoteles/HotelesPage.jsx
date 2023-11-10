import { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlus } from "@fortawesome/free-solid-svg-icons";
import SelectPais from "../../components/selectores/SelectPais";
import SelectProvincia from "../../components/selectores/SelectProvincia";
import SelectCiudad from "../../components/selectores/SelectCiudad";
import SelectCategoria from "../../components/selectores/SelectCategoria";
import List from "../../components/hotel/HotelList";
import SecondNavBar from "../../components/SecondNavBar";
import Filtro from "../../components/Filtro";
import Fecha from "../../components/Fecha";

function HotelesPage() {
  const [pais, setPais] = useState("");
  const [provincia, setProvincia] = useState("");
  const [ciudad, setCiudad] = useState("");
  const [categoria, setCategoria] = useState(null);

  return (
    <>
      <SecondNavBar>
        <Filtro>
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
          <SelectCategoria categoria={categoria} setCategoria={setCategoria} />
          <Fecha />
          <Fecha />
        </Filtro>
        <h1 className="text-3xl">HOTELES</h1>
        <button className="border rounded-md p-2 bg-AgregarHotel text-LetraAgregarHotel">
          <Link to="/hotel-form">
            <FontAwesomeIcon icon={faCirclePlus} /> <span>Agregar Hotel</span>
          </Link>
        </button>
      </SecondNavBar>
      <List
        pais={pais}
        provincia={provincia}
        ciudad={ciudad}
        categoria={categoria}
      />
    </>
  );
}

export default HotelesPage;
