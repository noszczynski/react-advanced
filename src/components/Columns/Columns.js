import React from "react";
import styles from "./Columns.module.scss";
import cx from "classnames";
import withAuth from "../../hoc/withAuth";

const items = [
  `Lorem ipsum dolor sit amet.`,
  `Lorem ipsum dolor sit amet teo novum greta`,
  `Lorem ipsum dolor sit amet.`,
  `Lorem ipsum dolor sit amet. Maxim garde mate.`
];

const Columns = ({
  isAuthorised,
  setAuthorised,
  isCollapsed,
  setCollapsed
}) => {
  const listClass = cx(styles.list, {
    [styles.isCollapsed]: isCollapsed,
    [styles.isAuthorised]: isAuthorised
  });

  return (
    <div>
      <button
        className={cx("button is-dark", styles.collapseButton)}
        onClick={() => setCollapsed(!isCollapsed)}
      >
        Collapse
      </button>
      <button
        className={cx("button is-primary", styles.collapseButton)}
        onClick={() => setAuthorised(!isAuthorised)}
      >
        login
      </button>
      <ul className={listClass}>
        {items.map((content, i) => (
          <li className={`notification is-primary`} key={i}>
            {content}
            <button className={`delete`} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default withAuth(Columns);
