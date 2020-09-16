import React from "react";

const Local = () => {
  return (
    <>
      <div className="container">
        <div className="spanList">
          <p className="header">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation.
          </p>
        </div>
        <div className="mainList">
          <ul className="namesOfSubjects">
            <li>
              <div className="leftSiteList">
                <p className="mainTextList">Zbiórka “Lorem Ipsum 1”</p>
                <p className="secondTextList">
                  Quis varius quam quisque id diam vel quam elementum pulvinar.
                </p>
              </div>
              <div className="rightSiteList">
                <p>Egestas, sed, tempus</p>
              </div>
            </li>
            <li>
              <div className="leftSiteList">
                <p className="mainTextList">Zbiórka “Lorem Ipsum 2”</p>
                <p className="secondTextList">
                  Hendrerit gravida rutrum quisque non tellus orci ac auctor
                  augue.
                </p>
              </div>
              <div className="rightSiteList">
                <p>Ut, aliquam, purus, sit, amet</p>
              </div>
            </li>
            <li className="lastListName">
              <div className="leftSiteList">
                <p className="mainTextList">Zbiórka “Lorem Ipsum 3”</p>
                <p className="secondTextList">
                  Scelerisque in dictum non consectetur a erat nam.
                </p>
              </div>
              <div className="rightSiteList">
                <p>Mi, quis, hendrerit, dolor</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};
export default Local;
