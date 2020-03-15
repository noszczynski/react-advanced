import React, { useContext, useState } from "react";
import PageTemplate from "../../templates/PageTemplate";

const MultiStepContext = React.createContext({
  currentPage: 0,
  changePage: () => {}
});

const ProgressBar = () => {
  const { currentPage, childrenLength } = useContext(MultiStepContext);
  const progressBarStyle = {
    background: "hsl(348, 100%, 61%)",
    position: "fixed",
    top: 0,
    left: 0,
    height: "5px",
    zIndex: "100",
    width: "100vw",
    transition: "transform .3s ease-in-out",
    transform: `scaleX(${currentPage / childrenLength})`,
    transformOrigin: "0% 50%"
  };
  return <div style={progressBarStyle} />;
};

const Page = ({ children, pageIndex }) => {
  const { currentPage } = useContext(MultiStepContext);
  return currentPage === pageIndex ? children : null;
};

const Controls = () => {
  const { changePage, currentPage, childrenLength } = useContext(
    MultiStepContext
  );

  return (
    <div>
      <ProgressBar />
      <button
        className={`button is-primary`}
        onClick={() => changePage(currentPage - 1)}
        disabled={currentPage <= 0}
      >
        previous
      </button>
      <button
        className={`button is-warning`}
        onClick={() => changePage(currentPage + 1)}
        disabled={currentPage >= childrenLength}
      >
        next
      </button>
      {currentPage >= childrenLength && (
        <button className={`button is-danger`}>submit</button>
      )}
    </div>
  );
};

const MultiStep = ({ children }) => {
  const [currentPage, setCurrentPage] = useState(0);
  const changePage = newPageIndex => {
    setCurrentPage(newPageIndex);
  };

  return (
    <MultiStepContext.Provider
      value={{
        currentPage,
        changePage,
        childrenLength: children.length
      }}
    >
      <PageTemplate title={`Contact`}>
        <div>{children}</div>
      </PageTemplate>
    </MultiStepContext.Provider>
  );
};

export { MultiStep, Page, Controls };
