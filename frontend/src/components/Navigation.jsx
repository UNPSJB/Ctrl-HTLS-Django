import { Link } from "react-router-dom";

export default function Navigation() {
  return (
    <div className="flex justify-center space-x-28">
      <Link to="/" className="px-2">
        Home
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
