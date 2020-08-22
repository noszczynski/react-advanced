import React, { Fragment, useRef, useState } from "react";
import Header from "../components/Header/Header";
import PageTemplate from "../templates/PageTemplate";

const Tips = () => {
  const refInput = useRef(null);
  const refTooltip = useRef(null);
  const [isTooltipOpen, setTooltipOpen] = useState(false);

  const fucusInput = () => {
    refInput.current.focus();
    refInput.current.value = "default value";
  };

  return (
    <Fragment>
      <Header />
      <PageTemplate title={`Tips`}>
        <h2 className={`title is-5`}>content</h2>
        <input ref={refInput} placeholder={`type value`} />
        <button onClick={fucusInput}>focus input</button>
        <button
          className={`button is-large is-primary`}
          disabled={isTooltipOpen}
          onClick={() => setTooltipOpen(true)}
        >
          Open tool-tip
        </button>
        {isTooltipOpen && (
          //TODO close button
          <div ref={refTooltip} className="notification is-primary">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab
            adipisci, animi at atque dicta{" "}
            <strong>dolorem ipsa ipsum iure neque nulla</strong> odio placeat
            possimus quod rem repellendus similique soluta. Laudantium, quia!
          </div>
        )}
      </PageTemplate>
    </Fragment>
  );
};

export default Tips;
