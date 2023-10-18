import { useEffect, useState } from "react";
import { getAllTipoHabitacion } from "../api/tipoHabitacion.api";

function SelectTipoHabitacion() {

  const [tipoHabitaciones, setTipoHabitaciones] = useState([])
  const [tipoHabitacion, setTipoHabitacion] = useState([])

  useEffect(() => {
  async function loadTipoHabitaciones() {
    const res = await getAllTipoHabitacion();
    setTipoHabitaciones(res.data);
  }
  loadTipoHabitaciones();
  }, []);

  const handleChange = (e) => setTipoHabitacion(e.target.value)

  return (
    <div>
      <select value={tipoHabitacion} onChange={handleChange}>
        <option value="todos">Tipos de Habitacion</option>
        {tipoHabitaciones.map((tipoHabitacionItem) => (
          <option key={tipoHabitacionItem.codigo} value={tipoHabitacionItem.codigo}>
            {tipoHabitacionItem.nombre}
          </option>
        ))}
      </select>
    </div>
  )
}

export default SelectTipoHabitacion