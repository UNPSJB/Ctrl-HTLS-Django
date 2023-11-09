export default function PaquetesCard({ paquete }) {
  return (
    <div className="bg-white rounded shadow p-4 mb-4">
      <p>{paquete.nombre}</p>
      <p>{paquete.fecha_inicio}</p>
      <p>{paquete.fecha_fin}</p>
      <p>{paquete.precio}</p>
      <p>{paquete.coeficiente_descuento}</p>
      <input type="checkbox" />
    </div>
  );
}
