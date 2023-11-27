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
        <SelectPais pais={pais} setPais={setPais}
          className="form-input placeholder: text-Letras bg-FondoHotel w-full p-2 rounded-md" 
        />
        <SelectProvincia
          pais={pais}
          provincia={provincia}
          setProvincia={setProvincia}
          className="form-input placeholder: text-Letras bg-FondoHotel w-full p-2 rounded-md"
        />
        <SelectCiudad
          provincia={provincia}
          ciudad={ciudad}
          setCiudad={setCiudad}
          className="form-input placeholder: text-Letras bg-FondoHotel w-full p-2 rounded-md"
        />
      </Filtro>
      <h3 className="text-3xl ">VENDEDORES</h3>
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
