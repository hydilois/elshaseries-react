import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { languageContext } from "../../contexts/languageContext";
import translation from "../../translation";

function Discover() {
  const { language } = useContext(languageContext);
  return (
    <section className="home" id="home">
      <div className="overlay">
        <div className="container">
          <div className="intro display-table">
            <div className="display-table-cell">
              <h3>Hello, {translation[language].name}</h3>
              <h1>Hydil Aicard Sokeing</h1>
              <p>
                Dévelopeur <span></span>
              </p>
              <div className="my-btn">
                <Link to="#contact" className="main-btn">
                {translation[language].contact_me}
                </Link>
              </div>
            </div>
          </div>
          <div className="arrow">
            <Link to="#about">{translation[language].discover}</Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Discover;
