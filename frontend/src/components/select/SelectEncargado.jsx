import { useEffect, useState } from "react";
import api from "../../api";

export default function SelectEncargado({ encargado, setEncargado }) {
  const [encargados, setEncargados] = useState([]);

  useEffect(() => {
    async function loadEncargados() {
      const res = await api.encargados.find({ asignado: false });
      console.log(res);
      setEncargados(res);
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
