import React from "react";
import Header from "../components/Header/Header";
import PageTemplate from "../templates/PageTemplate";
import ItemList from "../components/ItemsList/ItemsList";

const Docs = () => (
  <div>
    <Header />
    <PageTemplate title={`Docs`}>
      <ItemList />
    </PageTemplate>
  </div>
);

export default Docs;
