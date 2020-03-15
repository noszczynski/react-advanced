import React from "react";
import { createBrowserHistory } from "history";
import { Route, Router } from "react-router";
import Docs from "./views/Docs";
import Patterns from "./views/Patterns";
import Components from "./views/Components";
import Tips from "./views/Tips";
import Atoms from "./views/Atoms";
import Users from "./views/Users";
import Contact from "./views/Contact";

const history = createBrowserHistory();

function App() {
  return (
    <Router history={history}>
      <Route path="/" exact component={Docs} />
      <Route path="/docs" component={Docs} />
      <Route path="/components" component={Components} />
      <Route path="/patterns" component={Patterns} />
      <Route path="/tips" component={Tips} />
      <Route path="/atoms" component={Atoms} />
      <Route path="/users" component={Users} />
      <Route path="/contact" component={Contact} />
    </Router>
  );
}

export default App;
