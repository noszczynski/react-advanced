import React from "react";
import styles from "./App.module.scss";
import ItemsList from "./components/itemsList/itemsList";

function App() {
  return (
    <div className={styles.app}>
      <ItemsList />
    </div>
  );
}

export default App;
