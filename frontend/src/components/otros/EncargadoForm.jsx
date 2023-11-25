import Modal from "../Modal";
import SelectPais from "../selectores/SelectPais";
import SelectProvincia from "../selectores/SelectProvincia";
import SelectCiudad from "../selectores/SelectCiudad";
import api from "../../api";
import { useState } from "react";
import SelectTipoDocumento from "../selectores/SelectTipoDocumento";
import { useForm } from "react-hook-form";

export default function EncargadoForm({ title, isOpen, onClose }) {
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
    const { nombre, apellido, documento, calle, numero, telefono, correo } =
      data;
    const newDireccion = { calle, numero, ciudad: ciudad };
    const { id: direccion } = await api.direcciones.create(newDireccion);
    const newEncargado = {
      nombre,
      apellido,
      documento,
      tipo_documento: tipoDocumento,
      direccion,
      telefono,
      correo,
    };
    try {
      const res = await api.encargados.create(newEncargado);
    } catch (error) {
      console.error("ERROR", error);
    }
  });
  return (
    <Modal title={title} isOpen={isOpen} onClose={onClose}>
      <form className="mx-auto bg-FondoHotel p-1 rounded-lg border border-black-300" onSubmit={onSubmit}>
        <input
          type="text"
          placeholder="nombre"
          {...register("nombre", { required: true })}
          className="form-input placeholder: text-Letras bg-FondoHotel w-full p-2 rounded-md"
        />
        {errors.nombre && <span className="text-Letras">Este campo es requerido</span>}

        <input
          type="text"
          placeholder="apellido"
          {...register("apellido", { required: true })}
          className="form-input placeholder: text-Letras bg-FondoHotel w-full p-2 rounded-md"
        />
        {errors.apellido && <span className="text-Letras">Este campo es requerido</span>}
        <SelectTipoDocumento
          tipoDocumento={tipoDocumento}
          setTipoDocumento={setTipoDocumento}
          className="form-input placeholder: text-Letras bg-FondoHotel w-full p-2 rounded-md"
        />
        <input
          type="number"
          placeholder="documento"
          {...register("documento", { required: true })}
          className="form-input placeholder: text-Letras bg-FondoHotel w-full p-2 rounded-md"
        />
        {errors.documento && <span className="text-Letras">Este campo es requerido</span>}
        <SelectPais pais={pais} setPais={setPais} 
          className="text-Letras bg-FondoHotel w-full p-2 rounded-md"
        />
        <SelectProvincia
          pais={pais}
          provincia={provincia}
          setProvincia={setProvincia}
          className="text-Letras bg-FondoHotel w-full p-2 rounded-md"
        />
        <SelectCiudad
          provincia={provincia}
          ciudad={ciudad}
          setCiudad={setCiudad}
          className="text-Letras bg-FondoHotel w-full p-2 rounded-md"
        />
        <input
          type="text"
          placeholder="calle"
          {...register("calle", { required: true })}
          className="text-Letras bg-FondoHotel w-full p-2 rounded-md"
        />
        {errors.calle && <span className="text-Letras">Este campo es requerido</span>}
        <input
          type="number"
          placeholder="numero"
          {...register("numero", { required: true })}
          className="text-Letras bg-FondoHotel w-full p-2 rounded-md"
        />
        {errors.numero && <span className="text-Letras">Este campo es requerido</span>}
        <input
          type="number"
          placeholder="telefono"
          {...register("telefono", { required: true })}
          className="text-Letras bg-FondoHotel w-full p-2 rounded-md"
        />
        {errors.telefono && <span className="text-Letras">Este campo es requerido</span>}
        <input
          type="correo"
          placeholder="e-mail"
          {...register("correo", { required: true })}
          className="text-Letras bg-FondoHotel w-full p-2 rounded-md"
        />
        {errors.correo && <span className="text-Letras">Este campo es requerido</span>}

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
