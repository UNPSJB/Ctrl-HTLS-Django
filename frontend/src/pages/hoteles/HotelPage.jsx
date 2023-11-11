import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import api from "../../api";
import HabitacionList from "../../components/hotel/HabitacionList";
import PaquetesList from "../../components/hotel/PaquetesList";
import SelectVendedorHotel from "../../components/selectores/SelectVendedorHotel";

export default function HotelPage() {
  window.api = api;
  const { id } = useParams();
  const [hotel, setHotel] = useState(null);
  const [vendedorElegido, setVendedorElegido] = useState(null);
  const [paquetesSeleccionados, setPaquetesSeleccionados] = useState([]);
  const [habitacionesSeleccionadas, setHabitacionesSeleccionadas] = useState(
    {}
  );
  const navigate = useNavigate();

  const handlePaqueteToggle = (id) => {
    setPaquetesSeleccionados((prevPaquetes) => {
      if (prevPaquetes.includes(id)) {
        // If the package is already selected, unselect it
        return prevPaquetes.filter((paqueteId) => paqueteId !== id);
      } else {
        // If the package is not selected, select it
        return [...prevPaquetes, id];
      }
    });
  };

  const handleCountChange = (tipoNombre, newCount) => {
    setHabitacionesSeleccionadas((prevCounts) => ({
      ...prevCounts,
      [tipoNombre]: newCount,
    }));
  };

  const handleAlquilarClick = () => {
    // Redirige a la página de alquiler
    navigate("/alquiler", {
      state: {
        hotel: id,
        habitaciones: habitacionesSeleccionadas,
        paquetes: paquetesSeleccionados,
        vendedor: vendedorElegido,
      },
    });
  };

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
          <SelectVendedorHotel
            vendedores={hotel.vendedores}
            vendedorElegido={vendedorElegido}
            setVendedorElegido={setVendedorElegido}
          />
          <HabitacionList
            habitaciones={hotel.habitaciones_por_tipo}
            onCountChange={handleCountChange}
          />
          <PaquetesList
            paquetes={hotel.paquetes}
            onPaqueteToggle={handlePaqueteToggle}
          />
        </>
      ) : (
        <p>Cargando...</p>
      )}
      <button onClick={handleAlquilarClick}>ALQUILAR</button>
    </div>
  );
}
