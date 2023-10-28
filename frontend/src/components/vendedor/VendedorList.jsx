import { useEffect, useState } from "react";
import VendedorCard from "./VendedorCard";
import api from "../../api";

export default function VendedorList() {
  const [vendedores, setVendedores] = useState([]);

  useEffect(() => {
    async function loadVendedores() {
      const res = await api.vendedores.find({});
      setVendedores(res);
    }
    loadVendedores();
  }, []);

  return <VendedorCard vendedores={vendedores} />;
}
