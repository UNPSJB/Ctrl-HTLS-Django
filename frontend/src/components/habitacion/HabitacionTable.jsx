import { useEffect, useState } from "react";
import api from "../../api";

function HabitacionesTable({ habitaciones }) {
  const [tipos, setTipos] = useState([]);

  useEffect(() => {
    api.tiposhabitaciones.getAll().then((res) => {
      setTipos(res);
    });
  }, []);

  return (
    <div className="border border-violet-600">
      {habitaciones.length > 0 ? (
        habitaciones.map((habitacion) => {
          const tipoHabitacion =
            tipos.find((tipo) => tipo.id === habitacion.tipo_habitacion)
              ?.nombre || "Desconocido";
          return (
            <p key={habitacion.id} className="mb-2">
              Habitación {habitacion.numero_de_habitacion} - Piso{" "}
              {habitacion.piso} - {tipoHabitacion}
            </p>
          );
        })
      ) : (
        <p>Sin Habitaciones</p>
      )}
    </div>
  );
}

export default HabitacionesTable;
