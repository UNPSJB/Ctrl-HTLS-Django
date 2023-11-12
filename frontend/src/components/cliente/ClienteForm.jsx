import Modal from "../Modal";
import SelectPais from "../selectores/SelectPais";
import SelectProvincia from "../selectores/SelectProvincia";
import SelectCiudad from "../selectores/SelectCiudad";
import api from "../../api";
import { useState } from "react";
import SelectTipoDocumento from "../selectores/SelectTipoDocumento";
import { useForm } from "react-hook-form";

export default function ClienteForm({ isOpen, onClose }) {
  const [pais, setPais] = useState("");
  const [provincia, setProvincia] = useState("");
  const [ciudad, setCiudad] = useState("");
  const [tipoDocumento, setTipoDocumento] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = handleSubmit(async (data) => {
    const { nombre, apellido, documento, calle, numero, telefono, email } =
      data;
    const newDireccion = { calle, numero, ciudad: ciudad };
    const { id: direccion } = await api.direcciones.create(newDireccion);
    const newCliente = {
      nombre,
      apellido,
      documento,
      tipo_documento: tipoDocumento,
      direccion,
      telefono,
      email,
      puntos: 0,
    };
    console.log(newCliente);
    // try {
    //   const res = await api.clientes.create(newCliente);
    // } catch (error) {
    //   console.error("ERROR", error);
    // }
  });

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          placeholder="nombre"
          {...register("nombre", { required: true })}
        />
        {errors.nombre && <span>Este campo es requerido</span>}

        <input
          type="text"
          placeholder="apellido"
          {...register("apellido", { required: true })}
        />
        {errors.apellido && <span>Este campo es requerido</span>}
        <SelectTipoDocumento
          tipoDocumento={tipoDocumento}
          setTipoDocumento={setTipoDocumento}
        />
        <input
          type="number"
          placeholder="documento"
          {...register("documento", { required: true })}
        />
        {errors.documento && <span>Este campo es requerido</span>}
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
        <input
          type="text"
          placeholder="calle"
          {...register("calle", { required: true })}
        />
        {errors.calle && <span>Este campo es requerido</span>}
        <input
          type="number"
          placeholder="numero"
          {...register("numero", { required: true })}
        />
        {errors.numero && <span>Este campo es requerido</span>}
        <input
          type="number"
          placeholder="telefono"
          {...register("telefono", { required: true })}
        />
        {errors.telefono && <span>Este campo es requerido</span>}
        <input
          type="email"
          placeholder="e-mail"
          {...register("email", { required: true })}
        />
        {errors.email && <span>Este campo es requerido</span>}

        {/* Botones en la misma fila */}
        <div className="flex justify-end mt-4">
          <button
            type="submit"
            className="mr-2 bg-ModificarToggle text-white p-2 rounded"
          >
            Guardar
          </button>
          <button
            onClick={onClose}
            className="bg-AgregarHotel text-LetraAgregarHotel p-2 rounded"
          >
            Cerrar
          </button>
        </div>
      </form>
    </Modal>
  );
}
