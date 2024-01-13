import PaquetesCard from "./PaquetesCard";

export default function PaquetesList({ paquetes, onPaqueteToggle }) {
  return (
    <>
      <h2 className="text-2xl font-bold mb-4 text-center">
        PAQUETES TURISTICOS
      </h2>
      <div className="grid grid-cols-4 gap-4 justify-items-center">
        {paquetes.map((paquete, index) => (
          <PaquetesCard
            key={index}
            paquete={paquete}
            onToggle={onPaqueteToggle}
          />
        ))}
      </div>
    </>
  );
}
