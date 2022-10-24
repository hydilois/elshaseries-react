import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { languageContext } from "../../contexts/languageContext";
import translation from "../../translation";
import SwitchLanguage from "../SwitchLanguage";
import SwitchTheme from "../SwitchTheme";

const NavBar = () => {
  const { language } = useContext(languageContext);
  return (
    <>
      <nav className="navbar navbar-default ">
        <div className="container">
          <div className="navbar-header">
            <button className="menu-toggle">
              <span className="bar"></span>
              <span className="bar"></span>
              <span className="bar"></span>
            </button>

            <Link className="navbar-brand" to="#">
              <span>Elsha</span>Series
            </Link>
          </div>

          <div className="navbar-links" id="ournavbar">
            <ul className="nav navbar-nav navbar-right">
              <li className="nav-brand text-center visible-xs-block">
                <Link to="#">
                  <span>Elsha</span>Series
                </Link>
              </li>
              <li>
                <Link
                  className="active"
                  to="#"
                  data-value="#home"
                  data-name="Home"
                >
                  {translation[language].home}
                </Link>
              </li>
              <li>
                <Link to="#" data-value="#about" data-name="About">
                  {translation[language].about}
                </Link>
              </li>
              <li>
                <Link to="#" data-value="#services" data-name="Services">
                  {translation[language].services}
                </Link>
              </li>
              <li>
                <Link to="#" data-value="#resume" data-name="Resume">
                  {translation[language].resume}
                </Link>
              </li>
              <li>
                <Link to="#" data-value="#portfolio" data-name="Portfolio">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link to="#" data-value="#blog" data-name="Blog">
                  Blog
                </Link>
              </li>
              <li>
                <Link to="#" data-value="#contact" data-name="Contact">
                  Contact
                </Link>
              </li>
              <SwitchLanguage />
              <SwitchTheme/>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
