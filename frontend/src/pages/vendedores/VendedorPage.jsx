import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../../api";
import Header from "../../components/header/Header";

export default function VendedorPage() {
  const { documento } = useParams();
  const [vendedor, setVendedor] = useState(null);

  useEffect(() => {
    api.vendedores.get(documento).then((res) => {
      setVendedor(res);
    });
  }, [documento]);

  const secondNavBarChildren = (
    <>
      <h2 className="text-3xl">{vendedor?.nombre} {vendedor?.apellido}</h2>
    </>
  );

  return (
    <div>
      <Header secondNavBarChildren={secondNavBarChildren} />
      <div className="flex justify-center">
      {vendedor ? (        
      <div className="p-6 bg-white rounded shadow-md w-80 text-center">
        <h2 className="text-2xl font-bold mb-2">Información del Vendedor</h2>
        <p><span className="font-bold">Documento:</span> {vendedor.documento}</p>
        <p><span className="font-bold">Tipo de Documento:</span> {vendedor.tipo_documento}</p>
        <p><span className="font-bold">Nombre:</span> {vendedor.nombre}</p>
        <p><span className="font-bold">Apellido:</span> {vendedor.apellido}</p>
      </div>
      ) : (
        <p>Cargando...</p>
      )}
      </div>
    </div>
  );
}
