import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';


export default function Navigation() {
  return (
    <div className="flex justify-center space-x-28 bg-blue-400 py-4 font-normal text-xl">
      <Link to="/" className="px-2 flex items-center" >
        <FontAwesomeIcon icon={faHome} className="text-neutral-100"/>
      </Link>
      <Link to="/hoteles" className="px-2">
        Hoteles
      </Link>
      <Link to="/vendedores" className="px-2">
        Vendedores
      </Link>
      <Link to="/clientes" className="px-2">
        Clientes
      </Link>
      <Link to="/ventas" className="px-2">
        Ventas
      </Link>
    </div>
  );
}