import { useState } from "react";
import { Link } from "react-router-dom";
import HotelList from "../../components/hotel/HotelList";
import SelectUbicacion from "../../components/select/SelectUbicacion";
import SelectCategoria from "../../components/select/SelectCategoria";
import useUbicacion from "../../hooks/useUbicacion";

export default function HotelesPage() {
  const ubicacion = useUbicacion();
  const [categoria, setCategoria] = useState(null);

  return (
    <div className="m-4">
      <Link to="/">Home</Link>
      <br />
      <Link to="/hotel-form">Crear Hotel</Link>
      {/* Este div es todo el filtrado de los hoteles */}
      <div className="flex m-4">
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
