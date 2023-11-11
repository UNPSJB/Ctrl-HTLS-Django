import Header from "../components/header/Header";
import ButtonLink from "../components/helpers/ButtonLink";

export default function Home() {
  {
    /** Crear constante que contendra secondNavBarChildren
     *  const secondNavBarContent = ()
     */
  }
  const secondNavBarContent = (
    <>
      <ButtonLink texto={"Agregar Hotel"} url={"/hotel-form"} />
      <ButtonLink texto={"Agregar Vendedor"} url={"/vendedor-form"} />
    </>
  );
  return (
    <>
      {/* el parametro secondNavBarChildren={} son los sitios o acciones mas utilizadas */}
      <Header secondNavBarChildren={secondNavBarContent} />
    </>
  );
}
