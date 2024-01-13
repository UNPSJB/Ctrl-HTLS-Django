import { useEffect, useState } from "react";
import api from "../../api";
export default function SelectCliente({ clienteElegido, setClienteElegido }) {
  const [clientes, setClientes] = useState([]);

  //Obtengo todos los clientes
  useEffect(() => {
    api.clientes.getAll().then((res) => {
      setClientes(res);
    });
  }, []);

  const handleClientChange = (e) => {
    e.preventDefault();
    setClienteElegido(e.target.value);
  };

  return (
    <div>
      <select
        value={clienteElegido ? clienteElegido : ""}
        onChange={handleClientChange}
        className="border p-2 rounded-md"
      >
        <option value="">Clientes</option>
        {clientes.map((clienteItem) => (
          <option key={clienteItem.documento} value={clienteItem.documento}>
            {clienteItem.nombre} {clienteItem.apellido}
          </option>
        ))}
      </select>
    </div>
  );
}
