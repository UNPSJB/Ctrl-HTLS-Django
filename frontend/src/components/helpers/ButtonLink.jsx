import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusCircle } from "@fortawesome/free-solid-svg-icons";

function BotonLink({ texto, url }) {
  return (
    <Link
      to={url}
      className="inline-flex items-center px-4 py-2 border border-transparent font-medium rounded-md shadow-sm text-LetraAgregarHotel bg-AgregarHotel hover:bg-purple-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
    >
      <FontAwesomeIcon icon={faPlusCircle} className="mr-2" />
      {texto}
    </Link>
  );
}

export default BotonLink;
