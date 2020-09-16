import React from "react";

const Fundation = () => {
  return (
    <>
      <div className="container">
        <div className="spanList">
          <p className="header">
            W naszej bazie znajdziesz listę zweryfikowanych Fundacji, z którymi
            współpracujemy. Możesz sprawdzić czym się zajumją, komu pomagają i
            czego potrzebują.
          </p>
        </div>
        <div className="mainList">
          <ul className="namesOfSubjects">
            <li>
              <div className="leftSiteList">
                <p className="mainTextList">Fundacja "Dbam o Zdrowie"</p>
                <p className="secondTextList">
                  Cel i misja: Pomoc osobom znajdującym się w trudnej sytuacji
                  życiowej.
                </p>
              </div>
              <div className="rightSiteList">
                <p>ubrania, jedzenie, sprzęt AGB, meble, zabawki</p>
              </div>
            </li>
            <li>
              <div className="leftSiteList">
                <p className="mainTextList">Fundacja "Dla Dzieci"</p>
                <p className="secondTextList">
                  Cel i misja: Pomoc dzieciom z ubogich rodzin.
                </p>
              </div>
              <div className="rightSiteList">
                <p>ubrania, meble, zabawki</p>
              </div>
            </li>
            <li className="lastListName">
              <div className="leftSiteList">
                <p className="mainTextList">Fundacja “Bez domu”</p>
                <p className="secondTextList">
                  Cel i misja: Pomoc dla osób nie posiadających miejsca
                  zamieszkania.
                </p>
              </div>
              <div className="rightSiteList">
                <p>ubrania, jedzenie, ciepłe koce</p>
              </div>
            </li>
          </ul>
          <ul className="pagination">
            <li>1</li>
            <li>2</li>
            <li>3</li>
          </ul>
        </div>
      </div>
    </>
  );
};
export default Fundation;
