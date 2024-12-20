import clsx from "clsx";
import { NavLink } from "react-router-dom";
import s from "./AuthNav.module.css";

const AuthNav = () => {
  const buildLinkClass = ({ isActive }) => {
    return clsx(s.link, isActive && s.activeLink);
  };
  return (
    <nav className={s.nav}>
      <NavLink className={buildLinkClass} to="/register">
        Sign Up
      </NavLink>
      <NavLink className={buildLinkClass} to="/login">
        Log in
      </NavLink>
    </nav>
  );
};

export default AuthNav;
