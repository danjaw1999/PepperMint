import React, { useState } from "react";
import { Link as ScrollLink } from "react-scroll";
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";
import decoration from "./../assets/Decoration.svg";
const Rejestracja = () => {
  const [form, setForm] = useState({
    email: "",
    password: "",
    password2: ""
  });
  const { email, password, password2 } = form;
  const [errors, setErrors] = useState({
    email: "",
    password: "",
    password2: ""
  });
  const handleFormData = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  function validateEmail(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }
  const validate = () => {
    const err = {};
    const email = document.querySelector("input[name=email]").value;
    const b3 = document.querySelector(".passInput");
    const b2 = document.querySelector(".emailInput");
    const b1 = document.querySelector(".pass2Input");

    if (validateEmail(email) === true) {
      err.email = "";
      b2.style.borderColor = "#3c3c3c";
    } else {
      err.email = "Podany email jest nieprawidłowy!";
      b2.style.borderColor = "red";
    }

    if (b3.value.length < 6) {
      err.password = "Podane hasło jest za krótkie!";
      b3.style.borderColor = "red";
    } else {
      err.password = "";
      b3.style.borderColor = "#3c3c3c";
    }
    if (b1.value.length < 6 || b1.value != b3.value) {
      err.password2 = "Podane hasła nie są takie same";
      b1.style.borderColor = "red";
    } else {
      err.password2 = "";
      b1.style.borderColor = "#3c3c3c";
    }

    setErrors(err);
    return !Object.values(err).find((e) => e.length > 0);
  };
  const handleOnSubmit = (e) => {
    e.preventDefault();
    validate();
  };
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
                  <Link to="/" className="menuButtons start">
                    Start
                  </Link>
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
        <div className="regDiv">
          <p>Załóż konto</p>
          <img src={decoration} alt="Black line decoration" />
          <form onSubmit={handleOnSubmit} method="POST">
            <div className="formLog">
              <div className="label">
                <label>Email</label>
                <input
                  type="email"
                  value={email}
                  name="email"
                  onChange={handleFormData}
                  className="emailInput"
                ></input>
                <p className="errorLog">{errors.email}</p>
              </div>
              <div className="label">
                <label>Hasło</label>
                <input
                  type="password"
                  value={password}
                  name="password"
                  onChange={handleFormData}
                  className="passInput"
                ></input>
                <p className="errorLog">{errors.password}</p>
              </div>
              <div className="label">
                <label>Powtórz Hasło</label>
                <input
                  type="password"
                  value={password2}
                  name="password2"
                  onChange={handleFormData}
                  className="pass2Input"
                ></input>
                <p className="errorLog">{errors.password2}</p>
              </div>
            </div>

            <div className="buttonLog">
              <button type="submit" className="buttonLogg">
                Załóż konto
              </button>
              <Link to="/logowanie" className="buttonLogg">
                Zaloguj się
              </Link>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};
export default Rejestracja;
