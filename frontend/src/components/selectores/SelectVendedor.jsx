import { useEffect, useState } from "react";
import api from "../../api";
import Selector from "./Selector";

function SelectVendedor({ vendedor, setVendedor }) {
  const [vendedores, setVendedores] = useState([]);

  useEffect(() => {
    api.vendedores.getAll().then((res) => {
      setVendedores(res);
    });
  }, []);

  const handleChange = (e) => setVendedor(e.target.value);
  return (
    <div>
      <Selector
        value={vendedor ?? ""}
        handleChange={handleChange}
        options={vendedores}
        defaultOption="Vendedores"
        getValue={(item) => item.documento}
        getLabel={(item) => item.nombre}
      />
    </div>
  );
}

export default SelectVendedor;
