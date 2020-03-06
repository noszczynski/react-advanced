import React, { useState } from "react";
import styles from "./itemsList.module.scss";
import cx from "classnames";

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

function ItemList() {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const listClass = cx(styles.list, {
    [styles.isCollapsed]: isCollapsed
  });

  return (
    <div className={styles.wrapper}>
      <button
        className={cx("button is-dark", styles.collapseButton)}
        onClick={() => setIsCollapsed(!isCollapsed)}
      >
        Collapse
      </button>
      <ul className={listClass}>
        {items.map((content, i) => (
          <li className={`notification is-primary`} key={i}>
            <button className={`delete`} />
            {content}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ItemList;
