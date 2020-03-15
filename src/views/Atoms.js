import React, { Fragment } from "react";
import Header from "../components/Header";
import PageTemplate from "../Templates/PageTemplate";
import Animate from "../components/Animate/Animate";

const Atoms = () => {
  return (
    <Fragment>
      <Header />
      <PageTemplate title={`Atoms`}>
        <Animate />
      </PageTemplate>
    </Fragment>
  );
};

export default Atoms;
