import PaquetesCard from "./PaquetesCard";

export default function PaquetesList({ paquetes }) {
  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Paquetes Turisticos:</h2>
      {/* Se muestra una matriz de 3 columnas como minimo */}
      <div className="grid grid-cols-3 gap-4">
        {paquetes.map((paquete, index) => (
          <PaquetesCard key={index} paquete={paquete} />
        ))}
      </div>
    </div>
  );
}
