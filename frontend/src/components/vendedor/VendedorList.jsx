import { useEffect, useState } from "react";
import VendedorCard from "./VendedorCard";
import api from "../../api";

export default function VendedorList({ pais, provincia, ciudad }) {
  const [vendedores, setVendedores] = useState([]);

  // useEffect(() => {
  //   api.vendedores.getAll().then((res) => {
  //     setVendedores(res);
  //   });
  // }, [pais, provincia, ciudad]);

  useEffect(() => {
    api.vendedores
      .find({ pais, provincia, ciudad })
      .then((res) => {
        setVendedores(res);
      });
  }, [pais, provincia, ciudad]);

  return (
    <div>
      {vendedores.map((vendedor) => (
        <VendedorCard key={vendedor.documento} vendedor={vendedor} />
      ))}
    </div>
  );
}
