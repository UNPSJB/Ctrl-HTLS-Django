import { Link } from "react-router-dom";

function VendedorPage() {
  return (
    <div>
    <Link to="/">Home</Link>
    <br />
    <Link to="/vendedor-form">Crear Vendedor</Link>
    </div>
  )
}

export default VendedorPage
