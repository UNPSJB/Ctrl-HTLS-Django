import { Link } from "react-router-dom";

function Navigation() {
  return (
    <div className="bg-blue-500 text-white p-3 flex justify-around">
      <Link to="/" className="hover:text-gray-300">
        Inicio
      </Link>
      <Link to="/hoteles" className="hover:text-gray-300">
        Hoteles
      </Link>
      <Link to="/vendedores" className="hover:text-gray-300">
        Vendedores
      </Link>
      <Link to="/clientes" className="hover:text-gray-300">
        Clientes
      </Link>
      <Link to="/ventas" className="hover:text-gray-300">
        Ventas
      </Link>
    </div>
  );
}

export default Navigation;
