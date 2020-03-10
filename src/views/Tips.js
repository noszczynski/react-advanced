import React, { Fragment } from "react";
import Header from "../components/Header";
import Columns from "../components/Columns/Columns";
import PageTemplate from "../Templates/PageTemplate";

const Tips = () => (
  <Fragment>
    <Header />
    <PageTemplate title={`Tips`}>
      <Columns />
    </PageTemplate>
  </Fragment>
);

export default Tips;
