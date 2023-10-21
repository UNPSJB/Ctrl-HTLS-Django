import { Link } from "react-router-dom";

function HotelCard({ hoteles }) {
  return (
    <div>
      {hoteles.map((hotel) => (
        <div key={hotel.id}>
          <h1>
            <Link to={`/hotel/${hotel.id}`}>{hotel.nombre}</Link>
          </h1>
        </div>
      ))}
    </div>
  );
}

export default HotelCard;
