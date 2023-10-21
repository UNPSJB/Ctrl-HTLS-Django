import { useEffect, useState } from "react";
import { getAllTipoHabitacion } from "../../api/core.api";

function SelectTipoHabitacion({ tipoHabitacion, setTipoHabitacion }) {
  const [tipoHabitaciones, setTipoHabitaciones] = useState([]);

  useEffect(() => {
    async function loadTipoHabitaciones() {
      const res = await getAllTipoHabitacion();
      setTipoHabitaciones(res.data);
    }
    loadTipoHabitaciones();
  }, []);

  const handleChange = (e) => setTipoHabitacion(e.target.value);

  return (
    <div>
      <select value={tipoHabitacion ?? ""} onChange={handleChange}>
        <option value="todos">Tipos de Habitacion</option>
        {tipoHabitaciones.map((tipoHabitacionItem) => (
          <option key={tipoHabitacionItem.nombre} value={tipoHabitacionItem.nombre}>
            {tipoHabitacionItem.nombre}
          </option>
        ))}
      </select>
    </div>
  );
}

export default SelectTipoHabitacion;
