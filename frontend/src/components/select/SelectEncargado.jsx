import { useEffect, useState } from "react";
import { getAllEncargadosAsignados } from "../../api/core.api";

export default function SelectEncargado({ encargado, setEncargado }) {
  const [encargados, setEncargados] = useState([]);

  useEffect(() => {
    async function loadEncargados() {
      const res = await getAllEncargadosAsignados(false);
      setEncargados(res.data);
    }
    loadEncargados();
  }, []);

  const handleChange = (e) => setEncargado(e.target.value);

  return (
    <div>
      <select value={encargado ?? ""} onChange={handleChange}>
        <option value="todos">Encargados</option>
        {encargados.map((encargadoItem) => (
          <option key={encargadoItem.documento} value={encargadoItem.documento}>
            {encargadoItem.nombre + " " + encargadoItem.apellido}
          </option>
        ))}
      </select>
    </div>
  );
}
