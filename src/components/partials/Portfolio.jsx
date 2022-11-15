import React, { useContext } from "react";
import { languageContext } from "../../contexts/languageContext";
import translation from "../../translation";

function Portfolio() {
    const { language } = useContext(languageContext);
  return (
    <>
      <section className="portfolio" id="portfolio">
        <div className="container">
          <div className="main-title">
            <h2>{translation[language].portfolio}</h2>
            <span>05.</span>
          </div>
          <div className="filter-menu">
            <ul id="control" className="list-filter list-unstyled">
              <li className="active" data-filter="all">{translation[language].all}</li>
              <li data-filter="1">{translation[language].web}</li>
              <li data-filter="2">{translation[language].mobile}</li>
            </ul>
          </div>
          <div className="portfolio-content">
            <div id="filtr-container" className="row">
              <div
                className="col-md-4 col-sm-6 filtr-item"
                data-category="1"
                data-sort="value"
              >
                <div className="item">
                  <img
                    className="img-responsive"
                    src="../assets/images/portfolio/item-1.jpg"
                    alt=""
                  />
                  <div className="overlay">
                    <a
                      className="icon-img"
                      href="./assets/images/portfolio/item-1.jpg"
                    >
                      <i className="fa fa-search-plus"></i>
                    </a>
                    <h4 className="item-title">SchoolLab</h4>
                    <div className="item-category">
                      <span>Application Web</span>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="col-md-4 col-sm-6 filtr-item"
                data-category="2"
                data-sort="value"
              >
                <div className="item">
                  <img
                    className="img-responsive"
                    src="../assets/images/portfolio/item-2.jpg"
                    alt=""
                  />
                  <div className="overlay">
                    <a
                      className="icon-img"
                      href="./assets/images/portfolio/item-2.jpg"
                    >
                      <i className="fa fa-search-plus"></i>
                    </a>
                    <h4 className="item-title">Project Title</h4>
                    <div className="item-category">
                      <span>Graphic Design</span>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="col-md-4 col-sm-6 filtr-item"
                data-category="3"
                data-sort="value"
              >
                <div className="item">
                  <img
                    className="img-responsive"
                    src="../assets/images/portfolio/item-3.jpg"
                    alt=""
                  />
                  <div className="overlay">
                    <a
                      className="icon-img"
                      href="./assets/images/portfolio/item-3.jpg"
                    >
                      <i className="fa fa-search-plus"></i>
                    </a>
                    <h4 className="item-title">Project Title</h4>
                    <div className="item-category">
                      <span>Branding</span>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="col-md-4 col-sm-6 filtr-item"
                data-category="1"
                data-sort="value"
              >
                <div className="item">
                  <img
                    className="img-responsive"
                    src="../assets/images/portfolio/item-4.jpg"
                    alt=""
                  />
                  <div className="overlay">
                    <a
                      className="icon-img"
                      href="./assets/images/portfolio/item-4.jpg"
                    >
                      <i className="fa fa-search-plus"></i>
                    </a>
                    <h4 className="item-title">La Main Levée</h4>
                    <div className="item-category">
                      <span>Application Web</span>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="col-md-4 col-sm-6 filtr-item"
                data-category="2"
                data-sort="value"
              >
                <div className="item">
                  <img
                    className="img-responsive"
                    src="../assets/images/portfolio/item-5.jpg"
                    alt=""
                  />
                  <div className="overlay">
                    <a
                      className="icon-img"
                      href="./assets/images/portfolio/item-5.jpg"
                    >
                      <i className="fa fa-search-plus"></i>
                    </a>
                    <h4 className="item-title">Project Title</h4>
                    <div className="item-category">
                      <span>Graphic Design</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Portfolio;
