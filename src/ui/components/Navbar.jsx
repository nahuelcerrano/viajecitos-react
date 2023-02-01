import React from "react";
import { Link } from "react-router-dom";
import navStyles from "./navbar.module.css";

export const Navbar = () => {
  return (
    <div className={navStyles.header}>
      <nav className={navStyles.navbar}>
        <Link className={navStyles.logo} to="/">
          Viajecitos
        </Link>

        <ul className={navStyles.menu}>
          <li className={navStyles.list}>
            <Link to="/viajes">Viajes</Link>
          </li>

          <li className={navStyles.list}>
            <Link to="/about">Nosotros</Link>
          </li>

          <li className={navStyles.list}>
            <Link to="/oficinas">Oficinas</Link>
          </li>
        </ul>

        <Link to="/contact">
          <button className={navStyles.contacto}>
            Contacto
          </button>
        </Link>
      </nav>
    </div>
  );
};
