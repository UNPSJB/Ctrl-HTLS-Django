import HotelList from "../../components/hotel/HotelList";
import { Link } from "react-router-dom";

export default function HotelPage() {
  return (
    <div>
      <Link to="/">Home</Link>
      <br />
      <Link to="/hotel-form">Crear Hotel</Link>
      <HotelList />;
    </div>
  );
}
