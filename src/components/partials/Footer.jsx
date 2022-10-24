import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { languageContext } from "../../contexts/languageContext";
import translation from "../../translation";

function Footer() {
  const {language} = useContext(languageContext);
  return (
    <>
      <footer className="footer text-center">
        <div className="container">
          <Link className="logo" to="#">
            <span>Elsha</span>Series
          </Link>
          <ul className="footer-social-icons list-unstyled">
            <li>
              <Link to="https://www.facebook.com/hydilaicard.sokeing" title="Facebook">
                <i className="fa fa-facebook"></i>
              </Link>
            </li>
            <li>
              <Link to="#" title="Twitter">
                <i className="fa fa-twitter"></i>
              </Link>
            </li>
            <li>
              <Link to="https://gitlab.com/elsha" title="Gitlab">
                <i className="fa fa-gitlab"></i>
              </Link>
            </li>
            <li>
              <Link to="https://github.com/hydilois" title="Github">
                <i className="fa fa-github"></i>
              </Link>
            </li>
            <li>
              <Link to="https://www.linkedin.com/in/hydil-aicard-sokeing-b0b74310b/" title="Linkedin">
                <i className="fa fa-linkedin"></i>
              </Link>
            </li>
          </ul>
          <div className="copyright">
            <p>
            {translation[language].copyright} &copy; 2022{" "}
              <Link to="#" target="_blank">
                Elsha Series
              </Link>
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
