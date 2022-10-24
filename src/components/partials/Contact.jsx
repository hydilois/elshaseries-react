import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { languageContext } from "../../contexts/languageContext";
import translation from "../../translation";

function Contact() {
  const { language } = useContext(languageContext);
  return (
    <>
      <section className="contact" id="contact">
        <div className="container">
          <div className="main-title">
            <h2>{translation[language].contact_me}</h2>
            <span>08.</span>
          </div>
          <div className="row">
            <div className="col-sm-4">
              <div className="contact-boxes">
                <div className="contact-box">
                  <div className="title-box">
                    <h4>
                      {translation[language].location}
                      <span className="icon-box">
                        <i className="fa fa-map-marker"></i>
                      </span>
                    </h4>
                  </div>
                  <div className="content-box">
                    <p>Yaoundé, {translation[language].cm}</p>
                    <p>Mendong</p>
                  </div>
                </div>
                <div className="contact-box">
                  <div className="title-box">
                    <h4>
                      Email
                      <span className="icon-box">
                        <i className="fa fa-envelope"></i>
                      </span>
                    </h4>
                  </div>
                  <div className="content-box">
                    <p>
                      <Link to="#">shydilaicard@gmail.com</Link>
                    </p>
                    <p>
                      <Link to="#">ntsshaseries@gmail.com</Link>
                    </p>
                  </div>
                </div>
                <div className="contact-box">
                  <div className="title-box">
                    <h4>
                    {translation[language].phone}
                      <span className="icon-box">
                        <i className="fa fa-phone"></i>
                      </span>
                    </h4>
                  </div>
                  <div className="content-box">
                    <p>+237 654 136 893</p>
                    <p>+237 680 742 595</p>
                  </div>
                </div>
                <div className="contact-box">
                  <div className="title-box">
                    <h4>
                    {translation[language].website}
                      <span className="icon-box">
                        <i className="fa fa-globe"></i>
                      </span>
                    </h4>
                  </div>
                  <div className="content-box">
                    <p>www.elshaseries.icarpro.fr</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-8">
              <form
                className="contact-form"
                action="#"
                method="post"
              >
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    name="name"
                    required
                  />
                  <label htmlFor="name">{translation[language].full_name}</label>
                  <span className="input-border"></span>
                </div>
                <div className="form-group">
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    name="email"
                    required
                  />
                  <label htmlFor="email">{translation[language].email}</label>
                  <span className="input-border"></span>
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    id="subject"
                    name="subject"
                    required
                  />
                  <label htmlFor="subject">{translation[language].subject}</label>
                  <span className="input-border"></span>
                </div>
                <div className="form-group">
                  <textarea
                    className="form-control"
                    id="message"
                    name="message"
                    required
                  ></textarea>
                  <label htmlFor="message">{translation[language].message}</label>
                  <span className="input-border"></span>
                </div>
                <button
                  className="contact-btn main-btn btn btn-block"
                  type="submit"
                  name="send"
                >
                  {translation[language].send_message}
                </button>
                <div className="form-message text-center">
                  <span></span>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Contact;
