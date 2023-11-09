import HabitacionCard from "./HabitacionCard";

function HabitacionList({ habitaciones }) {
  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Habitaciones por tipo:</h2>
      {/* Se muestra una matriz de 3 columnas como minimo */}
      <div className="grid grid-cols-3 gap-4"> 
        {habitaciones.map((tipo, index) => (
          <HabitacionCard key={index} tipo={tipo} />
        ))}
      </div>
    </div>
  );
}


export default HabitacionList