import React from "react";
import cx from "classnames";
import Collapse from "../../providers/Collapse";
import styles from "./ItemsList.module.scss";

const items = [
  ` Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
  A accusantium ad aliquam corporis ex explicabo facere id inventore 
  ipsum laborum nam quas quod ratione rerum saepe sapiente similique, 
  totam veniam. `,
  ` Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
  A accusantium ad aliquam corporis ex explicabo facere id inventore 
  ipsum laborum nam quas quod ratione rerum saepe sapiente similique, 
  totam veniam. `,
  ` Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
  A accusantium ad aliquam corporis ex explicabo facere id inventore 
  ipsum laborum nam quas quod ratione rerum saepe sapiente similique, 
  totam veniam. `,
  ` Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
  A accusantium ad aliquam corporis ex explicabo facere id inventore 
  ipsum laborum nam quas quod ratione rerum saepe sapiente similique, 
  totam veniam. `,
  ` Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
  A accusantium ad aliquam corporis ex explicabo facere id inventore 
  ipsum laborum nam quas quod ratione rerum saepe sapiente similique, 
  totam veniam. `,
  ` Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
  A accusantium ad aliquam corporis ex explicabo facere id inventore 
  ipsum laborum nam quas quod ratione rerum saepe sapiente similique, 
  totam veniam. `
];

const ItemList = () => {
  const listClass = isCollapsed =>
    cx(styles.list, {
      [styles.isCollapsed]: isCollapsed
    });

  return (
    <Collapse
      render={({ isCollapsed, setCollapsed }) => (
        <div>
          <button
            className={cx("button is-dark", styles.collapseButton)}
            onClick={() => setCollapsed(!isCollapsed)}
          >
            Collapse
          </button>
          <ul className={listClass(isCollapsed)}>
            {items.map((content, i) => (
              <li className={`notification is-primary`} key={i}>
                <button className={`delete`} />
                {content}
              </li>
            ))}
          </ul>
        </div>
      )}
    />
  );
};

// ItemList.propTypes = {
//   isCollapsed: PropTypes.bool,
//   setCollapsed: PropTypes.func.isRequired
// };
//
// ItemList.defaultProps = {
//   isCollapsed: false
// };

export default ItemList;
