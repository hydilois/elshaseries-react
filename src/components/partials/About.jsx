import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { languageContext } from "../../contexts/languageContext";
import translation from "../../translation";

function About() {
  const { language } = useContext(languageContext);
  return (
    <section className="about-me" id="about">
      <div className="container">
        <div className="row">
          <div className="col-lg-5 col-md-6">
            <div className="about-image">
              <img
                className="img-responsive"
                src="./assets/images/about.jpg"
                alt=""
              />
            </div>
          </div>
          <div className="col-lg-7 col-md-6">
            <div className="about-info">
              <div className="main-title">
                <h2>{translation[language].about_me}</h2>
                <span>01.</span>
              </div>
              <h3>Hello! {translation[language].i_am} Hydil Aicard Sokeing</h3>
              <p>{translation[language].presentation}</p>
              <div className="personal-info">
                <p>
                  <span>
                    <i className="fa fa-user"></i>
                  </span>
                  Hydil Aicard Sokeing
                </p>
                <p>
                  <span>
                    <i className="fa fa-phone"></i>
                  </span>
                  +237 654 136 893
                </p>
                <p>
                  <span>
                    <i className="fa fa-envelope"></i>
                  </span>
                  <Link to="#">shydilaicard@gmail.com</Link>
                </p>
                <p>
                  <span>
                    <i className="fa fa-map-marker"></i>
                  </span>
                  Yaoundé, {translation[language].cm}
                </p>
                <div className="social-media">
                  <span>
                    <Link title="Facebook" to="https://www.facebook.com/hydilaicard.sokeing" target="_blank">
                      <i className="fa fa-facebook"></i>
                    </Link>
                    <Link title="Twitter" to="#" target="_blank">
                      <i className="fa fa-twitter"></i>
                    </Link>
                    <Link title="gitlab" to="https://gitlab.com/elsha" target="_blank">
                      <i className="fa fa-gitlab"></i>
                    </Link>
                    <Link title="Github" to="https://github.com/hydilois" target="_blank">
                      <i className="fa fa-github"></i>
                    </Link>
                    <Link title="Linkedin" to="https://www.linkedin.com/in/hydil-aicard-sokeing-b0b74310b/" target="_blank">
                      <i className="fa fa-linkedin"></i>
                    </Link>
                  </span>
                </div>
              </div>
              <Link
                to="./assets/files/CV_SOKEING-Hydil-Aicard.pdf"
                target="_blank"
                className="main-btn"
              >
                {translation[language].download_cv}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
