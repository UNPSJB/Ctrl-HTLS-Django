import { useState, useEffect } from "react";
import api from "../../api";

export default function SelectHotel({ hotelElegido, setHotelElegido }) {
	const [hoteles, setHoteles] = useState([])

	useEffect(() => {
		api.hoteles.getAll().then((res) => {
			setHoteles(res);
		});
	}, []);

	const handleChange = (e) => setHotelElegido(e.target.value);

	return (
		<div>
			<select className="select-input !text-Letras !bg-FondoHotel w-full p-2 rounded-md" value={hotelElegido ?? ""} onChange={handleChange}>
				<option value="todos">Hoteles</option>
				{hoteles.map((hotelItem) => (
					<option key={hotelItem.id} value={hotelItem.id}>
						{hotelItem.nombre}
					</option>
				))}
			</select>
		</div>
	);
}