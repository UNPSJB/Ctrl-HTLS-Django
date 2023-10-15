import { Link } from "react-router-dom";
import styles from "./Navigation.module.css";

export default function Navigation() {
  return (
    <div className={styles.navbar}>
      <Link to="/">Home</Link>
      <Link to="/hoteles">Hoteles</Link>
      <Link to="/vendedores">Vendedores</Link>
      <Link to="/clientes">Clientes</Link>
      <Link to="/ventas">Ventas</Link>
    </div>
  );
}
