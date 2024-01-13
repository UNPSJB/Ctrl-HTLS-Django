import Header from "../../components/header/Header";
import SelectPais from "../../components/selectores/SelectPais";
import SelectProvincia from "../../components/selectores/SelectProvincia";
import SelectCiudad from "../../components/selectores/SelectCiudad";
import SelectCategoria from "../../components/selectores/SelectCategoria";
import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import api from "../../api";
import SuccessModal from "../../components/successModal";
import SelectEncargado from "../../components/selectores/SelectEncargado";
import EncargadoForm from "../../components/otros/EncargadoForm";
import { useNavigate } from "react-router-dom";

export default function HotelCreatePage({ location }) {
  const [pais, setPais] = useState("");
  const [provincia, setProvincia] = useState("");
  const [ciudad, setCiudad] = useState("");
  const [categoria, setCategoria] = useState(null);
  const [hotelCreado, setHotelCreado] = useState(null);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [encargadoElegido, setEncargadoElegido] = useState(null);
  const [isEncargadoFormOpen, setIsEncargadoFormOpen] = useState(false);
  const [isHabitacionFormOpen, setIsHabitacionFormOpen] = useState(false);
  const [hotelExistente, setHotelExistente] = useState(null);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  useEffect(() => {
    const hotelParaModificar = JSON.parse(
      localStorage.getItem("hotelExistente")
    );
    if (hotelParaModificar) {
      setHotelExistente(hotelParaModificar);

      if (hotelParaModificar.ubicacion) {
        setPais(hotelParaModificar.ubicacion.pais);
        setProvincia(hotelParaModificar.ubicacion.provincia);
        setCiudad(hotelParaModificar.ubicacion.ciudad);
      }
      if (hotelParaModificar.categoria) {
        setCategoria(hotelParaModificar.categoria);
      }
    }
  }, []);

  const onSubmit1 = async (data) => {
    const nombre = data.nombre;
    const calle = data.calle;
    const { numero } = data;

    const newDireccion = { calle, numero, ciudad: ciudad };

    const { id: direccion } = await api.direcciones.create(newDireccion);

    const newHotel = { nombre, direccion, categoria };
    let res;

    if (hotelExistente) {
      // Modificación de hotel existente
      res = await api.hoteles.update(hotelExistente.id, newHotel);
    } else {
      // Creación de nuevo hotel
      res = await api.hoteles.create(newHotel);
    }

    if (res) setHotelCreado(res);

    setShowSuccessModal(true);

    reset();
  };

  const onSubmit2 = async (data) => {
    // Guardar datos del paso 2
    // ...
  };

  const secondNavBarContent = <h1 className="text-3xl">Gestion de Hotel</h1>;

  return (
    <>
      <Header secondNavBarChildren={secondNavBarContent} />
      <section
        id="PASO 1"
        className="grid grid-cols-1 place-items-center mx-auto w-1/3"
      >
        <h2 className="text-2xl font-semibold text-gray-400 font-['Noto Sans']">
          - Paso 1 -
        </h2>
        <h3>Datos obligatorios</h3>
        <form
          className="flex flex-col w-full space-y-3"
          onSubmit={handleSubmit(onSubmit1)}
        >
          <label className="">Nombre</label>
          <input
            className="border-2 h-11 border-ModificarToggle rounded-lg focus:border-ModificarToggle focus:outline-none"
            type="text"
            placeholder="Nombre del Hotel"
            {...register("nombre", { required: true })}
            defaultValue={hotelExistente ? hotelExistente.nombre : ""}
          />
          {errors.nombre && (
            <span className="error-message">Este campo es requerido</span>
          )}
          <label className="">Pais</label>
          <SelectPais
            pais={pais}
            setPais={setPais}
            className="w-full h-full p-2 bg-white rounded-lg border-2 border-ModificarToggle flex-col justify-start items-start gap-2.5 inline-flex focus:border-ModificarToggle focus:outline-none"
            initialValue={hotelExistente ? hotelExistente.ubicacion.pais : null}
          />
          <label className="">Provincia</label>
          <SelectProvincia
            pais={pais}
            provincia={provincia}
            setProvincia={setProvincia}
            className="w-full h-full p-2 bg-white rounded-lg border-2 border-ModificarToggle flex-col justify-start items-start gap-2.5 inline-flex focus:border-ModificarToggle focus:outline-none"
            initialValue={
              hotelExistente ? hotelExistente.ubicacion.provincia : null
            }
          />
          <label className="">Ciudad</label>
          <SelectCiudad
            pais={pais}
            provincia={provincia}
            ciudad={ciudad}
            setCiudad={setCiudad}
            className="w-full h-full p-2 bg-white rounded-lg border-2 border-ModificarToggle flex-col justify-start items-start gap-2.5 inline-flex focus:border-ModificarToggle focus:outline-none"
            initialValue={
              hotelExistente ? hotelExistente.ubicacion.ciudad : null
            }
          />
          <label className="">Calle</label>
          <input
            type="text"
            placeholder="Calle"
            {...register("calle", { required: true })}
            className="border-2 h-11 border-ModificarToggle rounded-lg focus:border-ModificarToggle focus:outline-none"
            defaultValue={
              hotelExistente && hotelExistente.ubicacion
                ? hotelExistente.ubicacion.calle
                : ""
            }
          />
          {errors.calle && <span>Este campo es requerido</span>}
          <label className="">Numero</label>
          <input
            type="number"
            placeholder="Número"
            {...register("numero", { required: true })}
            className="border-2 h-11 border-ModificarToggle rounded-lg focus:border-ModificarToggle focus:outline-none"
            defaultValue={
              hotelExistente && hotelExistente.ubicacion
                ? hotelExistente.ubicacion.numero
                : ""
            }
          />
          {errors.numero && <span>Este campo es requerido</span>}
          <label className="">Categoria</label>
          <SelectCategoria
            className="w-full h-full p-2 bg-white rounded-lg border-2 border-ModificarToggle flex-col justify-start items-start gap-2.5 inline-flex focus:border-ModificarToggle focus:outline-none"
            categoria={categoria}
            setCategoria={setCategoria}
            initialValue={
              hotelExistente ? hotelExistente.categoria.nombre : null
            }
          />
          <div className="flex justify-evenly  mt-3">
            <button
              type="submit"
              className="w-40 h-10 bg-ModificarToggle text-white rounded-md font-bold font-['Noto Sans']"
            >
              Guardar
            </button>
            <button
              type="button"
              onClick={() => {
                reset();

                setShowSuccessModal(false);
              }}
              className="w-40 h-10 bg-AgregarHotel rounded-lg text-black font-bold font-['Noto Sans']"
            >
              Cancelar
            </button>
          </div>
        </form>
      </section>
      <SuccessModal
        show={showSuccessModal}
        onClose={() => setShowSuccessModal(false)}
      />
      {/* {hotelCreado && ( */}
      {hotelCreado && (
        <section
          id="PASO 2"
          className="grid grid-cols-1 place-items-center mx-auto w-1/3"
        >
          <div className="flex w-full">
            <SelectEncargado />
            <button onClick={() => setIsEncargadoFormOpen(true)}>ADD</button>
          </div>
          {isEncargadoFormOpen && (
            <EncargadoForm
              title={"Crear Encargado"}
              isOpen={isEncargadoFormOpen}
              onClose={() => setIsEncargadoFormOpen(false)}
            />
          )}
          {/**ACA VA LA HABITACION */}
          <div className="flex w-full"></div>
        </section>
      )}
    </>
  );
}
