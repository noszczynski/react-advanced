import React, { Fragment } from "react";
import Header from "../components/Header/Header";
import PageTemplate from "../templates/PageTemplate";
import Animate from "../components/Animate/Animate";

const GsapAnimation = () => {
  return (
    <Fragment>
      <Header />
      <PageTemplate title={`GSAP`}>
        <Animate />
      </PageTemplate>
    </Fragment>
  );
};

export default GsapAnimation;
