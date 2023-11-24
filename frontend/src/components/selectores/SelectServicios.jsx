import { useEffect, useState } from "react";
import api from "../../api";

export default function SelectServicios({
  servicioElegido,
  setServicioElegido,
}) {
  const [servicios, setServicios] = useState([]);
  useEffect(() => {
    api.servicios.getAll().then((res) => {
      setServicios(res);
    });
  }, []);

  const handleChange = (e) => setServicioElegido(e.target.value);

  return (
    <div>
      <select value={servicioElegido ?? ""} onChange={handleChange}>
        <option value="todos">Servicio</option>
        {servicios.map((servicioItem) => (
          <option key={servicioItem.id} value={servicioItem.id}>
            {servicioItem.nombre}
          </option>
        ))}
      </select>
    </div>
  );
}
