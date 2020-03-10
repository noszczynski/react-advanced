import React from "react";
import styles from "./itemsList.module.scss";
import cx from "classnames";
import withCollapse from "../../hoc/withCollapse";
import PropTypes from "prop-types";

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

const ItemList = ({ isCollapsed, setCollapsed }) => {
  const listClass = cx(styles.list, {
    [styles.isCollapsed]: isCollapsed
  });

  return (
    <div>
      <button
        className={cx("button is-dark", styles.collapseButton)}
        onClick={() => setCollapsed(!isCollapsed)}
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
};

ItemList.propTypes = {
  isCollapsed: PropTypes.bool,
  setCollapsed: PropTypes.func.isRequired
};

ItemList.defaultProps = {
  isCollapsed: false
};

export default withCollapse(ItemList);
