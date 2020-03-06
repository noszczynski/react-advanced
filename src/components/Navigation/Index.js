import React from "react";
import { NavLink } from "react-router-dom";
import "bulma";
import cx from "classnames";
import styles from "./Navigation.module.scss";

function Navigation() {
  return (
    <nav className={cx(`navbar is-primary`, styles.navbar)} role={`navigation`}>
      <h1 className={`title is-2 has-text-white`}>Magia Reacta</h1>
      <h2 className={`title is-5 has-text-white`}>kurs zaawansowany</h2>
      <div className={`navbar-menu`}>
        <ul className={`navbar-start`}>
          <li className={`navbar-item`}>
            <NavLink to={`/docs`} className={`has-text-white`}>
              docs
            </NavLink>
          </li>
          <li className={`navbar-item`}>
            <NavLink to={`/tips`} className={`has-text-white`}>
              tips
            </NavLink>
          </li>
          <li className={`navbar-item`}>
            <NavLink to={`/patterns`} className={`has-text-white`}>
              patterns
            </NavLink>
          </li>
          <li className={`navbar-item`}>
            <NavLink to={`/components`} className={`has-text-white`}>
              components
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navigation;
