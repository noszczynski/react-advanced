import React from "react";
import ItemList from "../components/itemsList";
import Header from "../components/Header";

function Docs() {
  return (
    <div>
      <Header />
      <div>
        <h1 className={`title is-1`}>Docs</h1>
        <ItemList />
      </div>
    </div>
  );
}

export default Docs;
