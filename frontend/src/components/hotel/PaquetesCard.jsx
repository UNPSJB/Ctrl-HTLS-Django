export default function PaquetesCard({ paquete, onToggle }) {
  return (
    <div className="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-md flex items-center space-x-4">
      <div>
        <div className="text-xl font-medium text-black">{paquete.nombre}</div>
        <p className="text-gray-500">{paquete.fecha_inicio}</p>
        <p className="text-gray-500">{paquete.fecha_fin}</p>
        <p className="text-gray-500">{paquete.coeficiente_descuento}</p>
        <input
          type="checkbox"
          onChange={() => onToggle(paquete.id)}
          className="mt-2"
        />
      </div>
    </div>
  );
}
