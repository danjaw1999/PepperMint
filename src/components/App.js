import React from "react";
import Home from "./Home";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Logowanie from "./Logowanie";
import Rejestracja from "./Rejestracja";
import Wylogowano from "./Wylogowano";
const App = () => {
  return (
    <BrowserRouter>
      <>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/logowanie" component={Logowanie} />
          <Route path="/registration" component={Rejestracja} />
          <Route path="/wylogowano" component={Wylogowano} />
        </Switch>
      </>
    </BrowserRouter>
  );
};

export default App;
