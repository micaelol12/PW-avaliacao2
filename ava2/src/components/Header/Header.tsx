import styles from "./Header.module.css";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <img src="/logo.svg" alt="logo da imagine" />
        <span>Imagine</span>
      </div>
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
        <NavLink
          to={"/cadastro"}
          className={({ isActive }) =>
            `${styles.link} ${isActive ? styles.active : ""}`
          }
        >
          Cadastro 2
        </NavLink>
      </nav>
    </header>
  );
};

export default Header;
