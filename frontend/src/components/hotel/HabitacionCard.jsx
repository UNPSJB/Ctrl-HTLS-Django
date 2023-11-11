import { useState } from "react";

function HabitacionCard({ tipo, onCountChange }) {
  const [count, setCount] = useState(0);

  const incrementCount = () => {
    if (count < tipo.habitaciones.length) {
      const newCount = count + 1;
      setCount(newCount);
      onCountChange(
        tipo.tipo_habitacion.nombre,
        tipo.habitaciones.slice(0, newCount)
      );
    }
  };

  const decrementCount = () => {
    if (count > 0) {
      const newCount = count - 1;
      setCount(newCount);
      onCountChange(
        tipo.tipo_habitacion.nombre,
        tipo.habitaciones.slice(0, newCount)
      );
    }
  };

  return (
    <div className="bg-white rounded shadow p-4 mb-4">
      <h3 className="text-xl font-semibold">{tipo.nombre}</h3>
      <p className="mt-2">Cantidad: {tipo.habitaciones.length}</p>
      <p className="mt-2">
        IDs Habitaciones: {tipo.habitaciones.join(", ")} SOLO TESTEO
      </p>
      <div className="mt-4">
        <button
          className="bg-blue-500 text-white px-2 py-1 rounded mr-2"
          onClick={incrementCount}
        >
          +
        </button>
        <span>{count}</span>
        <button
          className="bg-blue-500 text-white px-2 py-1 rounded ml-2"
          onClick={decrementCount}
        >
          -
        </button>
      </div>
    </div>
  );
}

export default HabitacionCard;
