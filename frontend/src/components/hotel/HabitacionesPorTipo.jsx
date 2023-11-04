export default function HabitacionesPorTipo({ habitacionesPorTipo }) {
    return (
      <div>
        <h2>Habitaciones por tipo:</h2>
        {habitacionesPorTipo.map((tipo, index) => (
          <div key={index}>
            <h3>{tipo.nombre}</h3>
            <p>Cantidad: {tipo.cantidad}</p>
            <p>Habitaciones: {tipo.habitaciones.join(", ")}</p>
          </div>
        ))}
      </div>
    );
  }
  