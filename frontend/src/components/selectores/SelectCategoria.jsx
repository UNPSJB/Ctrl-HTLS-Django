import { useEffect, useState } from "react";
import api from "../../api";
import Selector from "./Selector";

export default function SelectCategoria({
  categoria,
  setCategoria,
  className,
}) {
  const [categorias, setCategorias] = useState([]);

  useEffect(() => {
    api.categorias.getAll().then((res) => {
      setCategorias(res);
    });
  }, []);

  const handleChange = (e) => setCategoria(e.target.value);

  return (
    <div>
      <Selector
        className={className}
        value={categoria ?? ""}
        handleChange={handleChange}
        options={categorias}
        defaultOption="Categorias"
        getValue={(item) => item.id}
        getLabel={(item) => item.nombre}
      />
    </div>
  );
}
