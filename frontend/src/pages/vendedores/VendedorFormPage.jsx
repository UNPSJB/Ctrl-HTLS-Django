import { useState } from "react";
import SelectPais from "../../components/selectores/SelectPais";
import SelectProvincia from "../../components/selectores/SelectProvincia";
import SelectCiudad from "../../components/selectores/SelectCiudad";

export default function VendedorFormPage() {
  const [pais, setPais] = useState("");
  const [provincia, setProvincia] = useState("");
  const [ciudad, setCiudad] = useState("");

  return (
    <div>
      <form>
        <input type="text" placeholder="nombre" />
        <input type="text" placeholder="apellido" />
        <input type="number" placeholder="documento" />
        <SelectPais pais={pais} setPais={setPais} />
        <SelectProvincia pais={pais} provincia={provincia} setProvincia={setProvincia} />
        <SelectCiudad provincia={provincia} ciudad={ciudad} setCiudad={setCiudad} />
        <input type="text" placeholder="direccion" />
        <input type="number" placeholder="telefono" />
        <input type="email" placeholder="e-mail" />
      </form>
    </div>
  );
}
