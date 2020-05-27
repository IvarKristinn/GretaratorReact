import React from "react";
import { Switch, Route, Router } from "react-router-dom";
import Container from "@material-ui/core/Container";

import Navbar from "./components/Navbar";
import Landing from "./components/Landing";
import About from "./components/About";
import Nicknames from "./components/NameForm";
import { history } from "./helpers";

export default function App() {
  return (
    <Container maxWidth="xl">
      <Navbar />
      <Container maxWidth="lg">
        <Router history={history}>
          <Switch>
            <Route exact path="/" component={Landing} />
            <Route exact path="/about" component={About} />
            <Route exact path="/nicknames" component={Nicknames} />
          </Switch>
        </Router>
      </Container>
    </Container>
  );
}
