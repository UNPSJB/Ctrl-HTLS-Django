import { useEffect, useState } from "react";
import { getAllCategorias } from "../../api/core.api";

export default function SelectCategoria({ categoria, setCategoria }) {
  const [categorias, setCategorias] = useState([]);

  useEffect(() => {
    async function loadCategorias() {
      const res = await getAllCategorias();
      setCategorias(res.data);
    }
    loadCategorias();
  }, []);

  const handleChange = (e) => setCategoria(e.target.value);

  return (
    <div>
      <select value={categoria ?? ""} onChange={handleChange}>
        <option value="">Categorias</option>
        {categorias.map((categoriaItem) => (
          <option key={categoriaItem.id} value={categoriaItem.id}>
            {categoriaItem.nombre}
          </option>
        ))}
      </select>
    </div>
  );
}
