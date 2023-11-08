export default function Home() {
  return (
    <div>
      <div className="flex justify-center space-x-28 bg-SitiosFrecuentes text-Letras py-4  text-xl">
        <p className="font-navSitiosFrecuentes">Sitios Frecuentes</p>
      </div>
      <div className=" flex justify-center space-x-28 bg-FrecuentesItems font-navSitiosFrecuentes text-Letras">
        <p>Gestion de Hoteles</p>
        <p>Historial de Ventas</p>
      </div>
    </div>
  );
}
