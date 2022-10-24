import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { languageContext } from "../../contexts/languageContext";
import translation from "../../translation";

function Skills() {
  const { language } = useContext(languageContext);
  return (
    <section className="skills">
      <div className="container">
        <div className="main-title">
          <h2>{translation[language].skills}</h2>
          <span>04.</span>
        </div>
        <div className="row">
          <div className="col-md-5">
            <div className="skills-left">
              <h4>{translation[language].abilities}</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              {/* <a href="#portfolio" className="main-btn">
                My Portfolio
              </a> */}
            </div>
          </div>
          <div className="col-md-7">
            <div className="skills-list">
              <h3 className="list-item active">
                <a href="#pro-skills">{translation[language].professionnal}</a>
              </h3>
              <h3 className="list-item">
                <a href="#perso-skills">{translation[language].personal}</a>
              </h3>
            </div>
            <div className="skills-content">
              <div className="professional-skills" id="pro-skills">
                <h3>{translation[language].professionnal}</h3>
                <div className="progress-container">
                  <div className="progress">
                    <div
                      className="progress-bar"
                      role="progressbar"
                      aria-valuenow="95"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    ></div>
                    <h4>
                      Html5 &amp; Css3<span className="percent">90%</span>
                    </h4>
                  </div>
                </div>
                <div className="progress-container">
                  <div className="progress">
                    <div
                      className="progress-bar"
                      role="progressbar"
                      aria-valuenow="78"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    ></div>
                    <h4>
                      JavaScript<span className="percent">78%</span>
                    </h4>
                  </div>
                </div>
                <div className="progress-container">
                  <div className="progress">
                    <div
                      className="progress-bar"
                      role="progressbar"
                      aria-valuenow="89"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    ></div>
                    <h4>
                      Php<span className="percent">89%</span>
                    </h4>
                  </div>
                </div>
                <div className="progress-container">
                  <div className="progress">
                    <div
                      className="progress-bar"
                      role="progressbar"
                      aria-valuenow="80"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    ></div>
                    <h4>
                      Symfony<span className="percent">80%</span>
                    </h4>
                  </div>
                </div>
              </div>
              <div className="personal-skills" id="perso-skills">
                <h3>{translation[language].personal}</h3>
                <div className="progress-container">
                  <div className="progress">
                    <div
                      className="progress-bar"
                      role="progressbar"
                      aria-valuenow="85"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    ></div>
                    <h4>
                      Communication<span className="percent">85%</span>
                    </h4>
                  </div>
                </div>
                <div className="progress-container">
                  <div className="progress">
                    <div
                      className="progress-bar"
                      role="progressbar"
                      aria-valuenow="80"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    ></div>
                    <h4>
                    {translation[language].team_work}<span className="percent">80%</span>
                    </h4>
                  </div>
                </div>
                <div className="progress-container">
                  <div className="progress">
                    <div
                      className="progress-bar"
                      role="progressbar"
                      aria-valuenow="75"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    ></div>
                    <h4>
                    {translation[language].motivation}<span className="percent">75%</span>
                    </h4>
                  </div>
                </div>
                <div className="progress-container">
                  <div className="progress">
                    <div
                      className="progress-bar"
                      role="progressbar"
                      aria-valuenow="70"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    ></div>
                    <h4>
                    {translation[language].speed}<span className="percent">70%</span>
                    </h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
