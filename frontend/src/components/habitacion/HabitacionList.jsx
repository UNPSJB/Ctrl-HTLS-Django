import HabitacionCard from "./HabitacionCard";

function HabitacionList({ habitaciones, onCountChange }) {
  return (
    <>
      <h2 className="text-2xl font-bold mb-4 text-center">HABITACIONES</h2>
      <div className="grid grid-cols-4 gap-4 justify-items-center">
        {Object.entries(habitaciones).map(([tipo, habitaciones], index) => (
          <HabitacionCard
            key={index}
            tipo={tipo}
            habitaciones={habitaciones}
            onCountChange={onCountChange}
          />
        ))}
      </div>
    </>
  );
}

export default HabitacionList;
