import styles from "./Header.module.css";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <NavLink
          to={"/"}
          className={({ isActive, isPending }) =>
          `${styles.link} ${isActive ? styles.active : ""}`
          }
        >
          Home
        </NavLink>
        <NavLink
          to={"/employers"}
          className={({ isActive }) =>
            `${styles.link} ${isActive ? styles.active : ""}`
          }
        >
          Funcionarios
        </NavLink>
      </nav>
    </header>
  );
};

export default Header;
