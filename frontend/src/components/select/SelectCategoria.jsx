import { useEffect, useState } from "react";
import api from "../../api";

export default function SelectCategoria({ categoria, setCategoria }) {
  const [categorias, setCategorias] = useState([]);

  useEffect(() => {
    async function loadCategorias() {
      const res = await api.categorias.getAll();
      setCategorias(res);
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
