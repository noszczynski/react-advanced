import React from "react";
import { createBrowserHistory } from "history";
import { Route, Router } from "react-router";
import CollapsedList from "./views/CollapsedList";
import DownshiftPage from "./views/DownshiftPage";
import TodoList from "./views/TodoList";
import Tips from "./views/Tips";
import Modal from "./views/Modal";
import MultiPageForm from "./views/MultiPageForm";
import GsapAnimation from "./views/GsapAnimation";

const history = createBrowserHistory();

function App() {
  return (
    <Router history={history}>
      <Route path="/" exact component={CollapsedList} />
      <Route path="/collapsed" component={CollapsedList} />
      <Route path="/todo" component={TodoList} />
      <Route path="/downshift" component={DownshiftPage} />
      <Route path="/input" component={Tips} />
      <Route path="/gsap" component={GsapAnimation} />
      <Route path="/modal" component={Modal} />
      <Route path="/form" component={MultiPageForm} />
    </Router>
  );
}

export default App;
