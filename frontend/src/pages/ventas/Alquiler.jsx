import { useLocation } from "react-router-dom";

export default function AlquilarPage() {
  const location = useLocation();
  const habitaciones = location.state.habitaciones;
  return (
    <div>
      <h1>ALQUILERES</h1>
    </div>
  );
}
