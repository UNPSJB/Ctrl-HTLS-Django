import { useEffect, useState } from "react";
import api from "../../api";

function SelectTipoHabitacion({ tipoHabitacion, setTipoHabitacion }) {
  const [tipoHabitaciones, setTipoHabitaciones] = useState([]);

  useEffect(() => {
    api.tiposhabitaciones.getAll().then((res) => {
      setTipoHabitaciones(res);
    });
  }, []);

  const handleChange = (e) => setTipoHabitacion(e.target.value);

  return (
    <div>
      <select value={tipoHabitacion ?? ""} onChange={handleChange}>
        <option value="todos">Tipos de Habitacion</option>
        {tipoHabitaciones.map((tipoHabitacionItem) => (
          <option key={tipoHabitacionItem.nombre} value={tipoHabitacionItem.id}>
            {tipoHabitacionItem.nombre}
          </option>
        ))}
      </select>
    </div>
  );
}

export default SelectTipoHabitacion;
