import Header from "../components/header/Header";
import ButtonLink from "../components/helpers/ButtonLink";
import fondoHotel from "../public/Buenavista.jpeg"

export default function Home() {
  const secondNavBarContent = (
    <>
      <ButtonLink texto={"Agregar Hotel"} url={"/hotel-form"} />
      <ButtonLink texto={"Agregar Vendedor"} url={"/vendedor-form"} />
    </>
  );
  return (
    <>
      <Header secondNavBarChildren={secondNavBarContent} />
      <div className="fixed inset-0 flex items-center justify-center z-[-1]">
        <img
          src={fondoHotel}
          alt="Imagen de fondo"
          className="object-cover w-full h-full"
        />
      </div>
    </>
  );
}
