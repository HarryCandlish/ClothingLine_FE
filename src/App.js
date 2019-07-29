import React from "react";
import { HashRouter as Router, Route } from "react-router-dom";

import Nav from "./components/Nav";
import Home from "./pages/Home";

function App() {
  return (
    <Router>
      <Nav />
      <Route exact path="/" component={Home} />
    </Router>
  );
}

export default App;
