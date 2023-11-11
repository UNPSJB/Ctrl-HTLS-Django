import { useState } from "react";
import VendedorList from "../../components/vendedor/VendedorList";
import Filtro from "../../components/Filtro";
import SelectPais from "../../components/selectores/SelectPais";
import SelectProvincia from "../../components/selectores/SelectProvincia";
import SelectCiudad from "../../components/selectores/SelectCiudad";
import Header from "../../components/header/Header";
import ButtonLink from "../../components/helpers/ButtonLink";

function VendedoresPage() {
  const [pais, setPais] = useState("");
  const [provincia, setProvincia] = useState("");
  const [ciudad, setCiudad] = useState("");

  const secondNavBarContent = (
    <>
      <Filtro>
        <SelectPais pais={pais} setPais={setPais} />
        <SelectProvincia
          pais={pais}
          provincia={provincia}
          setProvincia={setProvincia}
        />
        <SelectCiudad
          provincia={provincia}
          ciudad={ciudad}
          setCiudad={setCiudad}
        />
      </Filtro>
      <h2>VENDEDORES</h2>
      <ButtonLink texto={"Agregar Vendedor"} url={"/vendedor-form"} />
    </>
  );
  return (
    <>
      <Header secondNavBarChildren={secondNavBarContent} />
      <VendedorList />
    </>
  );
}

export default VendedoresPage;
