import { useEffect, useState } from "react";
import api from "../../api";
import Selector from "./Selector";

export default function SelectPais({ pais, setPais, setProvincia, setCiudad }) {
  const [paises, setPaises] = useState([]);

  useEffect(() => {
    api.paises.getAll().then((res) => {
      setPaises(res);
    });
  }, []);

  const handleChange = (e) => {
    setPais(e.target.value);
    if (e.target.value === "") {
      setProvincia("");
      setCiudad("");
    }
  };

  return (
    <div>
      <Selector
        value={pais ?? ""}
        handleChange={handleChange}
        options={paises}
        defaultOption="Países"
        getValue={(item) => item.codigo}
        getLabel={(item) => item.nombre}
      />
    </div>
  );
}
