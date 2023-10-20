import { useState } from "react"
import SelectUbicacion from "../../components/SelectUbicacion";

export default function VendedorFormPage() {

  const [pais, setPais] = useState("todos");
  const [provincia, setProvincia] = useState("todos");
  const [ciudad, setCiudad] = useState("todos");

  return (
    <div> 
      <form>
        <input type="text" placeholder="nombre" />
        <input type="text" placeholder="apellido" />
        <input type="number" placeholder="documento" />
        <SelectUbicacion
          pais={pais}
          setPais={setPais}
          provincia={provincia}
          setProvincia={setProvincia}
          ciudad={ciudad}
          setCiudad={setCiudad}
        />
        <input type="text" placeholder="direccion"/>
        <input type="number" placeholder="telefono"/>
        <input type="email" placeholder="e-mail"/>
      </form>
    </div>
  )
}
