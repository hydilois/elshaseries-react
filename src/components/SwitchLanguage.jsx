import React from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { languageContext } from "../contexts/languageContext";

function SwitchLanguage() {
  const { switchLanguage, language } = useContext(languageContext);
  return (
    <>
      {language === "en" && (
        <li>
          <Link to="#" onClick={() => switchLanguage("fr")}>
            <img
              className="flag_icon"
              src="./assets/images/flags/fr.svg"
              alt=""
            />
          </Link>
        </li>
      )}
      {language === "fr" && (
        <li>
          <Link to="#" onClick={() => switchLanguage("en")}>
            <img
              className="flag_icon"
              src="./assets/images/flags/gb.svg"
              alt=""
            />
          </Link>
        </li>
      )}
    </>
  );
}

export default SwitchLanguage;
