import { useEffect, useState } from "react";
import api from "../../api";
import Selector from "./Selector";

export default function SelectCiudad({
  provincia,
  ciudad,
  setCiudad,
  className,
}) {
  const [ciudades, setCiudades] = useState([]);

  useEffect(() => {
    async function loadCiudades() {
      if (provincia !== "") {
        const res = await api.ciudades.find({ provincia });
        setCiudades(res);
      } else {
        const res = await api.ciudades.getAll();
        setCiudades(res);
      }
    }
    loadCiudades();
  }, [provincia]);

  const handleChange = (e) => setCiudad(e.target.value);

  return (
    <div>
      <Selector
        className={className}
        value={ciudad ?? ""}
        handleChange={handleChange}
        options={ciudades}
        disabled={provincia === ""}
        defaultOption="Ciudades"
        getValue={(item) => item.codigo_postal}
        getLabel={(item) => item.nombre}
      />
    </div>
  );
}
