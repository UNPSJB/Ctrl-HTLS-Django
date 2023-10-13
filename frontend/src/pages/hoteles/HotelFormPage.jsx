import { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { createHotel } from '../../api/hotel.api';
import { getAllPaises } from '../../api/ubicacion.api';

export default function HotelFormPage() {
  const {
    register,
    handleSubmit,
    formState: { errors }, // Asegúrate de importar errors de useForm
  } = useForm();
  const navigate = useNavigate();
  const [pais, setPais] = useState('');
  const [paises, setPaises] = useState([]);

  useEffect(() => {
    async function loadPaises() {
      const res = await getAllPaises();
      setPaises(res.data);
    }

    loadPaises();
  }, []);

  const onSubmit = handleSubmit(async (data) => {
    const newData = { ...data, pais };
    await createHotel(newData);
    navigate('/hoteles');
  });

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          placeholder="nombre"
          {...register('nombre', { required: true })}
        />
        {errors.nombre && <span>Este campo es requerido</span>}

        <input
          type="text"
          placeholder="direccion"
          {...register('direccion', { required: true })}
        />
        {errors.direccion && <span>Este campo es requerido</span>}

        <select {...register('pais')} value={pais} onChange={(e) => setPais(e.target.value)}>
          <option value="">Seleccione un país</option>
          {paises.map((paisItem) => (
            <option key={paisItem.codigo} value={paisItem.codigo}>
              {paisItem.nombre}
            </option>
          ))}
        </select>

        <button type="submit">Guardar</button>
      </form>
    </div>
  );
}
