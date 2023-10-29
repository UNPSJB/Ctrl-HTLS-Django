import { useState } from "react";
import { Link } from "react-router-dom";
import HotelList from "../../components/hotel/HotelList";
import SelectPais from "../../components/selectores/SelectPais";
import SelectProvincia from "../../components/selectores/SelectProvincia";
import SelectCiudad from "../../components/selectores/SelectCiudad";
import SelectCategoria from "../../components/selectores/SelectCategoria";

export default function HotelesPage() {
  const [pais, setPais] = useState("");
  const [provincia, setProvincia] = useState("");
  const [ciudad, setCiudad] = useState("");
  const [categoria, setCategoria] = useState(null);

  return (
    <div className="m-4">
      <Link to="/">Home</Link>
      <br />
      <Link to="/hotel-form">Crear Hotel</Link>
      {/* Este div es todo el filtrado de los hoteles */}
      <div className="flex m-4">
        <SelectPais
          pais={pais}
          setPais={setPais}
          setProvincia={setProvincia}
          setCiudad={setCiudad}
        />
        <SelectProvincia
          pais={pais}
          provincia={provincia}
          setProvincia={setProvincia}
          setCiudad={setCiudad}
        />
        <SelectCiudad provincia={provincia} ciudad={ciudad} setCiudad={setCiudad} />
        <SelectCategoria categoria={categoria} setCategoria={setCategoria} />
      </div>

      <HotelList pais={pais} provincia={provincia} ciudad={ciudad} categoria={categoria} />
    </div>
  );
}
