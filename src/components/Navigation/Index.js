import React from "react";
import { NavLink } from "react-router-dom";
import "bulma";
import cx from "classnames";
import styles from "./Navigation.module.scss";

const NAV_ITEMS = ["docs", "tips", "patterns", "components", "atoms", "users"];

function Navigation() {
  return (
    <nav className={cx(`navbar is-primary`, styles.navbar)} role={`navigation`}>
      <h1 className={`title is-2 has-text-white`}>Magia Reacta</h1>
      <h2 className={`title is-5 has-text-white`}>kurs zaawansowany</h2>
      <div className={`navbar-menu`}>
        <ul className={`navbar-start`}>
          {NAV_ITEMS.map(item => (
            <li className={`navbar-item`} key={item}>
              <NavLink to={`/${item}`} className={`has-text-white`}>
                {item}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

export default Navigation;
