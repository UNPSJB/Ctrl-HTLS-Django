import { Link } from "react-router-dom";
import VendedorList from "../../components/vendedor/VendedorList";
import SecondNavBar from "../../components/SecondNavBar";

function VendedoresPage() {
  return (
    <div>
      <SecondNavBar>
        <Link to="/">Home</Link>
        <br />
        <Link to="/vendedor-form">Crear Vendedor</Link>
      </SecondNavBar>
      <VendedorList />
    </div>
  );
}

export default VendedoresPage;
