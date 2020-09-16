import React from "react";
import decoration from "./../assets/Decoration.svg";
import shirt from "./../assets/Icon-1.svg";
import pack from "./../assets/Icon-2.svg";
import magnifier from "./../assets/Icon-3.svg";
import courier from "./../assets/Icon-4.svg";
import { NavLink } from "react-router-dom";
const HomeFourSteps = () => {
  return (
    <>
        <div className="mainText" name="ocochodzi">
          <span>Wystarczą 4 proste kroki</span>
          <img src={decoration} alt="Black line decoration" />
        </div>
        <section className="instruction">
      <div className="container">
          <div className="step">
            <img src={shirt} alt="Black line decoration" />
            <span className="text">Wybierz rzeczy</span>
            <hr />
            <span className="shortText">ubrania, zabawki, sprzęt i inne </span>
          </div>
          <div className="step">
            <img src={pack} alt="Black line decoration" />
            <span className="text">Spakuj je</span>
            <hr />
            <span className="shortText">skorzystaj z worków na śmieci </span>
          </div>
          <div className="step">
            <img src={magnifier} alt="Black line decoration" />
            <span className="text">Zdecyduj komu chcesz pomóc</span>
            <hr />
            <span className="shortText">wybierz zaufane miejsce </span>
          </div>
          <div className="step">
            <img src={courier} alt="Black line decoration" />
            <span className="text">Zamów kuriera</span>
            <hr />
            <span className="shortText">
              kurier przyjedzie w dogodnym terminie{" "}
            </span>
          </div>
      </div>
        </section>
        <div className="buttonOnMid">
          <NavLink to="/logowanie" className="btn">
            Oddaj rzeczy
          </NavLink>
        </div>
    </>
  );
};
export default HomeFourSteps;
