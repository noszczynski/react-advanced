import React from "react";
import { NavLink } from "react-router-dom";
import "bulma";
import cx from "classnames";
import styles from "./Navigation.module.scss";

const NAV_ITEMS = [
  { label: "Collapsed list", value: "collapsed" },
  { label: "Input focus", value: "input" },
  { label: "Downshift", value: "downshift" },
  { label: "Todo", value: "todo" },
  { label: "Gsap", value: "gsap" },
  { label: "Modal", value: "modal" },
  { label: "Multi page form", value: "form" }
];

function Navigation() {
  return (
    <nav className={cx(`navbar is-primary`, styles.navbar)} role={`navigation`}>
      <h1 className={`title is-2 has-text-white`}>Magia Reacta</h1>
      <h2 className={`title is-5 has-text-white`}>kurs zaawansowany</h2>
      <div className={`navbar-menu`}>
        <ul className={`navbar-start`}>
          {NAV_ITEMS.map(({ label, value }) => (
            <li className={`navbar-item`} key={value}>
              <NavLink to={`/${value}`} className={`has-text-white`}>
                {label}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

export default Navigation;
