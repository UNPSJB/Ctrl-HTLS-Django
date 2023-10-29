import { useEffect, useState } from "react";
import api from "../../api";
import Selector from "./Selector";

export default function SelectProvincia({ pais, provincia, setProvincia, setCiudad }) {
  const [provincias, setProvincias] = useState([]);

  useEffect(() => {
    async function loadProvincias() {
      if (pais !== "") {
        const res = await api.provincias.find({ pais });
        setProvincias(res);
      } else {
        setProvincias([]);
      }
    }
    loadProvincias();
  }, [pais, provincia]);

  const handleChange = (e) => {
    setProvincia(e.target.value);
    if (e.target.value === "") {
      setCiudad("");
    }
  };

  return (
    <div>
      <Selector
        value={provincia ?? ""}
        handleChange={handleChange}
        options={provincias}
        disabled={pais === ""}
        defaultOption="Provincias"
        getValue={(item) => item.id}
        getLabel={(item) => item.nombre}
      />
    </div>
  );
}
