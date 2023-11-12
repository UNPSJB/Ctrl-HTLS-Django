import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";

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
    <div className="p-4 border rounded shadow">
      <h3 className="uppercase text-3xl text-blue-600">
        {tipo.tipo_habitacion.nombre}
      </h3>
      <p className="text-gray-600">{tipo.tipo_habitacion.descripcion}</p>
      <p className="text-green-500">
        {tipo.habitaciones.length}{" "}
        {tipo.habitaciones.length == 1
          ? "Habitación disponible"
          : "Habitaciones disponibles"}
      </p>
      <div className="flex justify-center items-center space-x-2">
        <button
          onClick={incrementCount}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          <FontAwesomeIcon icon={faPlus} />
        </button>
        <span className="text-2xl">{count}</span>
        <button
          onClick={decrementCount}
          className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
        >
          <FontAwesomeIcon icon={faMinus} />
        </button>
      </div>
    </div>
  );
}

export default HabitacionCard;
