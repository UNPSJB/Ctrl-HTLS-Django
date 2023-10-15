function HotelCard({ hoteles }) {
  return (
    <div>
      {hoteles.map((hotel) => (
        <div key={hotel.id}>
          <h1>{hotel.nombre}</h1>
          <button type="button">Modificar</button>
          <button type="button">Eliminar</button>
        </div>
      ))}
    </div>
  );
}

export default HotelCard;
