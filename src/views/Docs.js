import React from "react";
import ItemList from "../components/itemsList";
import Header from "../components/Header";
import PageTemplate from "../Templates/PageTemplate";

const Docs = () => (
  <div>
    <Header />
    <PageTemplate title={`Docs`}>
      <ItemList />
    </PageTemplate>
  </div>
);

export default Docs;
