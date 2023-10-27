import { useState } from "react";
import { Link } from "react-router-dom";
import HotelList from "../../components/hotel/HotelList";
import SelectUbicacion from "../../components/select/SelectUbicacion";
import SelectCategoria from "../../components/select/SelectCategoria";
import useUbicacion from "../../hooks/useUbicacion";
import api from "../../api";

export default function HotelesPage() {
  window.API = api;
  const ubicacion = useUbicacion();
  const [categoria, setCategoria] = useState(null);

  return (
    <div>
      <Link to="/">Home</Link>
      <br />
      <Link to="/hotel-form">Crear Hotel</Link>
      {/* Este div es todo el filtrado de los hoteles */}
      <div>
        <SelectUbicacion {...ubicacion} />
        <SelectCategoria categoria={categoria} setCategoria={setCategoria} />
      </div>
      <HotelList
        pais={ubicacion.pais}
        provincia={ubicacion.provincia}
        ciudad={ubicacion.ciudad}
        categoria={categoria}
      />
    </div>
  );
}
