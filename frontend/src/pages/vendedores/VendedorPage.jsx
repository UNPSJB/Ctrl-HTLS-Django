import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../../api"

export default function VendedorPage() {
  const { documento } = useParams();
  const [vendedor, setVendedor] = useState(null)

  useEffect(() => {
    api.getVendedor(documento).then((res) => {
      setVendedor(res)
    })
  }, [documento])

  return (
    <div>
      <h1>{vendedor.nombre} {vendedor.apellido}</h1>
      <p>{vendedor.documento}</p>
      <p>{vendedor.tipo_documento}</p>
    </div>
  )
}
