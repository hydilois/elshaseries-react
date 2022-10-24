import React from "react";
import { Link } from "react-router-dom";
import Banner from "../components/partials/NavBar";

const ErrorPage = () => {
  return (
    <>
      <Banner title="Kbusso Erreur 404" subtitle="404" />
      <section class="fore-zero padding-tb">
        <div class="container">
          <div class="section-wrapper">
            <div class="zero-item">
              <div class="zero-thumb">
                <img src="assets/images/404.png" alt="404" />
              </div>
              <div class="zero-content">
                <h2>Oops! Cette page est introuvable</h2>
                <p>
                  Nous somme vraiment désolé mais la page que vous cherchez à
                  accéder est introuvable<i class="icofont-worried"></i>
                </p>
                <Link to="/" class="lab-btn">
                  <span>
                    Retour à l'accueil <i class="icofont-double-right"></i>
                  </span>{" "}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ErrorPage;
