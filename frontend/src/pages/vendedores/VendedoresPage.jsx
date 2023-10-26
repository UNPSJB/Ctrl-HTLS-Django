import { Link } from "react-router-dom";
import VendedorList from "../../components/vendedor/VendedorList";

function VendedoresPage() {
  return (
    <div>
      <Link to="/">Home</Link>
      <br />
      <Link to="/vendedor-form">Crear Vendedor</Link>
      <VendedorList />
    </div>
  )
}

export default VendedoresPage
