import { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

function Fecha() {
  const [fecha, setFecha] = useState(new Date());

  const onChange = (date) => {
    setFecha(date);
  };

  return (
    <div className="">
      <Calendar onChange={onChange} value={fecha} />
    </div>
  );
}

export default Fecha;
