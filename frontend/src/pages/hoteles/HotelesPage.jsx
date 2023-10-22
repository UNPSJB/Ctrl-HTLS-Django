import { Link } from "react-router-dom";
import HotelList from "../../components/hotel/HotelList";
import SelectUbicacion from "../../components/select/SelectUbicacion";
import useUbicacion from "../../hooks/useUbicacion";

export default function HotelesPage() {
  const ubicacion = useUbicacion();

  return (
    <div>
      <Link to="/">Home</Link>
      <br />
      <Link to="/hotel-form">Crear Hotel</Link>
      <div>
        <SelectUbicacion {...ubicacion} />
      </div>
      <HotelList pais={ubicacion.pais} provincia={ubicacion.provincia} ciudad={ubicacion.ciudad} />;
    </div>
  );
}
