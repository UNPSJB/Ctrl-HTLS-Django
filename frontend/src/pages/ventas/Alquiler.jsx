import { useLocation } from "react-router-dom";

export default function AlquilarPage() {
  const location = useLocation();
  return (
    <div>
      {console.log(location.state)}
      <h1>ALQUILERES</h1>
    </div>
  );
}
