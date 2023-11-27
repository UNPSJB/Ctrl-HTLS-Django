import { useEffect, useState } from "react";
import api from "../../api";
import Selector from "./Selector";

export default function SelectEncargado({ encargado, setEncargado }) {
  const [encargados, setEncargados] = useState([]);

  useEffect(() => {
    api.encargados.find({ asignado: false }).then((res) => {
      setEncargados(res);
    });
  }, []);

  const handleChange = (e) => setEncargado(e.target.value);

  return (
    <div>
      <Selector
        value={encargado ?? ""}
        handleChange={handleChange}
        options={encargados}
        defaultOption="Encargados"
        getValue={(item) => item.documento}
        getLabel={(item) => item.nombre + " " + item.apellido}
        className="w-full h-full p-2 bg-white rounded-lg border-2 border-violet-500 flex-col justify-start items-start gap-2.5 inline-flex"
      />
    </div>
  );
}
