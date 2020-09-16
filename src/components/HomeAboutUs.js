import React from "react";
import decoration from "./../assets/Decoration.svg";
import signature from "./../assets/Signature.svg";
const HomeAboutUs = () => {
  return (
    <div className="aboutUs" name="aboutUs">
      <section className="aboutUsText">
        <p>O nas</p>
        <img src={decoration} alt="Black line decoration" />
        <span>
          Nori grape silver beet broccoli kombu beet greens fava bean potato
          quandong celery. Bunya nuts black-eyed pea prairie turnip leek lentil
          turnip greens parsnip.
        </span>
        <img src={signature} alt="Signature" />
      </section>
      <section className="people"></section>
    </div>
  );
};
export default HomeAboutUs;
