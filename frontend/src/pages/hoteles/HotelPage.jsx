import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import api from "../../api";
import HabitacionList from "../../components/hotel/HabitacionList";
import SelectVendedor from "../../components/selectores/SelectVendedor";
import PaquetesList from "../../components/hotel/PaquetesList";

export default function HotelPage() {
  window.api = api;
  const { id } = useParams();
  const [hotel, setHotel] = useState(null);
  const [vendedor, setVendedor] = useState(null);
  const [habitacionesSeleccionadas, setHabitacionesSeleccionadas] = useState(
    []
  );
  const [paquetesSeleccionados, setPaquetesSeleccionados] = useState([]);

  useEffect(() => {
    api.hoteles.get(id, "full").then((res) => {
      setHotel(res);
    });
  }, [id]);

  return (
    <div>
      {hotel ? (
        <>
          <p>Nombre: {hotel.nombre}</p>
          <p>
            Dirección: {hotel.ubicacion.calle} {hotel.ubicacion.numero}
          </p>
          <p>Categoría: {hotel.categoria.nombre}</p>
          <p>
            Encargado: {hotel.encargado.nombre} {hotel.encargado.apellido}
          </p>
          <SelectVendedor
            vendedores={hotel.vendedores}
            vendedor={vendedor}
            setVendedor={setVendedor}
          />
          <HabitacionList
            habitaciones={hotel.habitaciones_por_tipo}
            habitacionesSelecionadas={habitacionesSeleccionadas}
            setHabitacionesSelecionadas={setHabitacionesSeleccionadas}
          />
          <PaquetesList
            paquetes={hotel.paquetes}
            paquetesSeleccionados={paquetesSeleccionados}
            setPaquetesSeleccionados={setPaquetesSeleccionados}
          />
        </>
      ) : (
        <p>Cargando...</p>
      )}
      <Link to="/alquiler">
        <button>ALQUILAR</button>
      </Link>
    </div>
  );
}
