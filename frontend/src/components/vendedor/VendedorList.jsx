import { useEffect, useState } from "react"
import api from "../../api"
import VendedorCard from "./VendedorCard"

export default function VendedorList() {

  const [vendedores, setVendedores] = useState([])

  useEffect(() => {
    async function loadVendedores(){
      const res = await api.findVendedores()
      setVendedores(res)
    }
    loadVendedores()
  },[])

  return (
    <VendedorCard vendedores={vendedores}/>
  )
}
