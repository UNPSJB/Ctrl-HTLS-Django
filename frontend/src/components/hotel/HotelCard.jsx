function HotelCard({ hoteles }) {
  return (
    <div>
      {hoteles.map((hotel) => (
        <div key={hotel.id}>
          <h1>{hotel.nombre}</h1>
        </div>
      ))}
    </div>
  );
}

export default HotelCard;
