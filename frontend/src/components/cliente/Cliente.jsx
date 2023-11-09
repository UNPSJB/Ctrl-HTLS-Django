import Modal from "../Modal";
import SelectPais from "../../components/selectores/SelectPais";
import SelectProvincia from "../../components/selectores/SelectProvincia";
import SelectCiudad from "../../components/selectores/SelectCiudad";
import api from "../../api";
import { useState } from "react";

export default function Cliente({ isOpen }) {
  const [pais, setPais] = useState("");
  const [provincia, setProvincia] = useState("");
  const [ciudad, setCiudad] = useState("");

  const handleSubmit = async (data) => {
    const { calle, numero } = data;
    const newDireccion = { calle, numero, ciudad: ciudad };
    const { id: direccion } = await api.direcciones.create(newDireccion);

    const newCliente = { nombre, apellido, documento, telefono };
  };

  return (
    <Modal isOpen={isOpen}>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="nombre" />
        <input type="text" placeholder="apellido" />
        <input type="number" placeholder="documento" />
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
        <input type="text" placeholder="calle" />
        <input type="number" placeholder="numero" />
        <input type="number" placeholder="telefono" />
        <input type="email" placeholder="e-mail" />

        <button type="submit">Guardar</button>
      </form>
    </Modal>
  );
}
