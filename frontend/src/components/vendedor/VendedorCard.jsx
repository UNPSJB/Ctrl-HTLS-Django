import { Link } from "react-router-dom";

export default function VendedorCard({ vendedores }) {
  return (
    <div>
      {vendedores.map((vendedor) => (
        <div key={vendedor.documento}>
          <h1>
            <Link to={`/vendedor/${vendedor.documento}`}>{vendedor.nombre}{" "}{vendedor.apellido}</Link>
          </h1>
        </div>
      ))}
    </div>
  )
}
