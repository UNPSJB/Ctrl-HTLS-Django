import { useEffect, useState } from "react";
import VendedorCard from "./VendedorCard";
import api from "../../api";

export default function VendedorList() {
  const [vendedores, setVendedores] = useState([]);

  useEffect(() => {
    api.vendedores.find({}).then((res) => {
      setVendedores(res);
    });
  }, []);

  return <VendedorCard vendedores={vendedores} />;
}
