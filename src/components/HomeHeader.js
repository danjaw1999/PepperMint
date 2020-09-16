import React from "react";
import { NavLink } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
import decoration from "./../assets/Decoration.svg";
const HomeHeader = () => {
  return (
    <header>
      <div className="container">
        <section className="backgroundImg"></section>
        <section className="header">
          <nav className="logMenu">
            <ul>
              <NavLink to="/logowanie" className="linkLogin">
                Zaloguj
              </NavLink>
              <NavLink to="/registration" className="linkReg">
                Załóż konto
              </NavLink>
            </ul>
            <section className="menu">
              <ul>
                <ScrollLink className="menuButtons start">Start</ScrollLink>
                <ScrollLink
                  className="menuButtons"
                  to="ocochodzi"
                  spy={true}
                  smooth={true}
                >
                  O co chodzi?
                </ScrollLink>
                <ScrollLink
                  to="aboutUs"
                  spy={true}
                  smooth={true}
                  className="menuButtons"
                >
                  O nas
                </ScrollLink>
                <ScrollLink
                  className="menuButtons"
                  to="whoWeHelp"
                  spy={true}
                  smooth={true}
                >
                  Fundacja i organizacje
                </ScrollLink>
                <ScrollLink
                  className="menuButtons"
                  to="form"
                  spy={true}
                  smooth={true}
                >
                  Kontakt
                </ScrollLink>
                <NavLink to="/formularz" className="menuButtons">
                  Formularz React
                </NavLink>
              </ul>
            </section>
          </nav>
          <section className="headerMain">
            <div className="slogan">
              <p>Zacznij pomagać!</p>
              <p> Oddaj niechciane rzeczy w zaufane ręce</p>
              <img src={decoration} alt="Black line decoration" />
            </div>
            <div className="buttonBegin">
              <NavLink to="/logowanie" className="btn give">
                Oddaj rzeczy
              </NavLink>
              <NavLink to="/logowanie" className="btn organise">
                Zorganizuj zbiórkę
              </NavLink>
            </div>
          </section>
        </section>
      </div>
    </header>
  );
};

export default HomeHeader;
