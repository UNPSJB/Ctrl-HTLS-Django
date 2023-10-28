import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../../api";

export default function VendedorPage() {
  const { documento } = useParams();
  const [vendedor, setVendedor] = useState(null);

  useEffect(() => {
    api.vendedores.get(documento).then((res) => {
      setVendedor(res);
    });
  }, [documento]);

  return (
    <div>
      {vendedor ? (
        <>
          <p>Documento: {vendedor.documento}</p>
          <p>Tipo de Documento: {vendedor.tipo_documento}</p>
          <p>Nombre: {vendedor.nombre}</p>
          <p>Apellido: {vendedor.apellido}</p>
        </>
      ) : (
        <p>Cargando...</p>
      )}
    </div>
  );
}
