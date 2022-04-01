import React from "react";
import "./Navbar.scss";
import { Link, NavLink } from "react-router-dom";
import NavLinks from "./NavLinks";
import Button from "../Button/Button";
import styles from "../Button/ButtonStyles.module.css";

const Navbar = () => {
  const RenderRoutes = () => {
    return NavLinks.map((link) => {
      return (
        <NavLink
          id="RouterNavLink"
          to={`/${link.type.toLowerCase()}`}
          key={link.id}
        >
          <li>
            <span>{link.type}</span>
            <div className="dropdown-wrapper">
              <div className="dropdown-info">
                <p className="dropdown-title f-muli fw-700">{link.type}</p>
                <hr />
                <p className="dropdown-text fw-300">{link.text}</p>
              </div>
              <ul className="dropdown">
                {link.routes.map((route) => (
                  <li key={route}>
                    <Link to={`/${route.replace(/\s+/g, "").toLowerCase()}`}>
                      <img
                        src="./assets/img/font-icons/arrow-right.svg"
                        alt=""
                      />
                      {` ${route.toUpperCase()}`}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </li>
        </NavLink>
      );
    });
  };
  return (
    <div className="Navbar">
      <div className="logo">
        <Link to={"/"} className="h-100 d-flex align-items-center">
          <img
            src="./assets/img/wayland-logo-default.png"
            alt="Wayland.io Logo"
          />
          <img
            src="./assets/img/wayland-logo-hover.png"
            alt="Wayland.io Logo"
          />
        </Link>
      </div>
      <div className="nav">
        <ul>{RenderRoutes()}</ul>
      </div>
      <div className="nav-contact">
        <Link to={"/contact"} className="h-100 d-flex align-items-center">
          <Button
            wrap={styles.navbar_btn_wrap}
            transition={styles.navbar_btn_transition}
            btn={styles.navbar_btn}
            text={"CONNECT"}
            transitionText={"SEND"}
          />
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
