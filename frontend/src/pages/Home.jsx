import Navigation from "../components/Navigation";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';

// export default function Home() {
//   return (
//     <div className="">
//       <Navigation />
//       <div className="absolute w-full h-1 bg-gray-600 top-18"></div>
//       <div className="mt-16 p-4">
//         <img src="" alt="Buena Vista" />
//       </div>
//     </div>
//   );
// }
export default function Home() {
  return (
    <div>
      <Navigation>
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
    </Navigation>
      <div className="flex justify-center space-x-28 bg-customSitiosFrecuentes text-customLetras py-4  text-xl">
        <p className="font-navSitiosFrecuentes">Sitios Frecuentes</p>
      </div>
      <div className=" flex justify-center space-x-28 bg-customFrecuentesItems font-navSitiosFrecuentes text-customLetras">
        <p>Gestion de Hoteles</p> 
        <p>Historial de Ventas</p>
      </div>
    </div>
  )
}
