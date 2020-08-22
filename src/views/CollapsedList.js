import React from "react";
import Header from "../components/Header/Header";
import PageTemplate from "../templates/PageTemplate";
import ItemList from "../components/ItemsList/ItemsList";

const CollapsedList = () => (
  <div>
    <Header />
    <PageTemplate title={`Collapsed list`}>
      <ItemList />
    </PageTemplate>
  </div>
);

export default CollapsedList;
