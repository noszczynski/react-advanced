import React, { Fragment } from "react";
import Header from "../components/Header";
import PageTemplate from "../Templates/PageTemplate";

const Tips = () => (
  <Fragment>
    <Header />
    <PageTemplate title={`Tips`}>
      <h2 className={`title is-5`}>content</h2>
    </PageTemplate>
  </Fragment>
);

export default Tips;
