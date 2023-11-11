import { Link } from "react-router-dom";

function Navigation() {
  return (
    <div className="bg-NavBar text-Letras font-navBar font-extralight text-xl p-3 flex justify-around">
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
