import { useEffect, useState } from "react";
import ClienteCard from "./ClienteCard";
import api from "../../api";

export default function ClienteList({ pais, provincia, ciudad }) {
  const [clientes, setClientes] = useState([]);

   useEffect(() => {
     api.clientes.getAll().then((res) => {
       setClientes(res);
     });
   }, [pais, provincia, ciudad]);


  return (
    <div>
      {clientes.map((cliente) => (
        <ClienteCard key={cliente.documento} cliente={cliente} />
      ))}
    </div>
  );
}
