import React from "react";
import { Link as ScrollLink } from "react-scroll";
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";
import decoration from "./../assets/Decoration.svg";
const Wylogowano = () => {
  return (
    <>
      <header>
        <div className="container">
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
                </ul>
              </section>
            </nav>
          </section>
        </div>
      </header>
      <div className="container">
        <div className="logoutDiv">
          <p>
            Wylogowanie nastąpiło <br /> pomyślnie!
          </p>
          <img src={decoration} alt="Black line decoration" />
          <Link to="/" className="buttonLoggout">
            Strona główna
          </Link>
        </div>
      </div>
    </>
  );
};
export default Wylogowano;
