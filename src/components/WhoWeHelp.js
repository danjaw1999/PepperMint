import React from "react";
import decoration from "./../assets/Decoration.svg";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import Fundation from "./Fundation";
import Organisation from "./Organisation";
import Local from "./Local";

const WhoWeHelp = () => {
  return (
    <section className="whoWeHelp" name="whoWeHelp">
      <div className="container">
        <p>Komu pomagamy?</p>
        <img src={decoration} alt="Black line decoration" />
        <div className="whoMenu">
          <BrowserRouter className="browser">
            <div className="menuListAbout">
              <ul className="listAbout">
                <Link to="/" className="list">
                  Fundacjom
                </Link>
                <Link to="/home/organisations" className="list listMid">
                  Organizacjom pozarządowym
                </Link>
                <Link to="/home/local" className="list">
                  Lokalnym zbiórkom
                </Link>
              </ul>
            </div>
            <>
              <Switch>
                <Route exact path="/" component={Fundation} />
                <Route path="/home/organisations" component={Organisation} />
                <Route path="/home/local" component={Local} />
              </Switch>
            </>
          </BrowserRouter>
        </div>
      </div>
    </section>
  );
};

export default WhoWeHelp;
