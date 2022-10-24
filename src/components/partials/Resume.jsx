import React, { useContext } from "react";
import { languageContext } from "../../contexts/languageContext";
import translation from "../../translation";

function Resume() {
  const { language } = useContext(languageContext);
  return (
    <>
      <section className="resume" id="resume">
        <div className="container">
          <div className="main-title">
            <h2>{translation[language].my_resume}</h2>
            <span>03.</span>
          </div>
          <div className="row">
            <div className="col-md-6">
              <div className="education">
                <div className="resume-item">
                  <div className="resume-date">
                    2013 - 2016
                    <i className="fa fa-graduation-cap"></i>
                  </div>
                  <span>INGT en Informatique de Gestion</span>
                  <h4>Institut Supérieur de Sahel</h4>
                  <p>
                    Obtention du diplôme d'Ingénieur de Travaus en Informatique
                    et Télécommunication, spécialisé en Informatique de gestion,
                    Option Analyste Programmeur.
                  </p>
                </div>
                <div className="resume-item">
                  <div className="resume-date">
                    2018 - 2019
                    <i className="fa fa-graduation-cap"></i>
                  </div>
                  <span>Art de la gestion</span>
                  <h4>Swiss E-learning Institute</h4>
                  <p>
                    Étude du développement des méthodes et outils nécessaire à
                    la gestion et la croissance des entreprises.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="experience">
                <div className="resume-item">
                  <div className="resume-date">
                    2016-2017
                    <i className="fa fa-suitcase"></i>
                  </div>
                  <span>Stagiaire en développement Web</span>
                  <h4>Envato</h4>
                  <p>Développement de sites web et applications Web</p>
                </div>
                <div className="resume-item">
                  <div className="resume-date">
                    2018 - 2020
                    <i className="fa fa-suitcase"></i>
                  </div>
                  <span>Chef de la cellule Informatique</span>
                  <h4>BALACCUL(Balatchi Cooperative Credit Union)</h4>
                  <p>
                    Responsable de la mise en place du parc Informatique de la
                    structure, de la digitalisation des différents services et
                    développement des plateformes web.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6">
              <div className="education">
                <div className="resume-item">
                  <div className="resume-date">
                    2020 - 2021
                    <i className="fa fa-graduation-cap"></i>
                  </div>
                  <span>Responsable des plateformes de e-learning</span>
                  <h4>CECOSDA Formation</h4>
                  <p>
                    Mise en place des plateformes de e-learning
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="experience">
                <div className="resume-item">
                  <div className="resume-date">
                    2016-2017
                    <i className="fa fa-suitcase"></i>
                  </div>
                  <span>Responsable Technique</span>
                  <h4>Themis Technology</h4>
                  <p>
                   Digitalisation des services
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Resume;
