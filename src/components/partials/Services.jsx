import React, { useContext } from "react";
import { languageContext } from "../../contexts/languageContext";
import translation from "../../translation";

function Services() {
    const { language } = useContext(languageContext);
  return (
    <>
      <section className="services" id="services">
            <div className="container">
                <div className="main-title">
                    <h2>{translation[language].my_services}</h2>
                    <span>02.</span>
                </div>
                <div className="row">
                    <div className="col-md-3 col-sm-6">
                        <div className="service wow fadeInRight" data-wow-duration="1.7s">
                            <div className="service-icon">
                                <i className="fa fa-pencil fa-lg"></i>
                            </div>
                            <h4>{translation[language].web_developpment}</h4>
                            <p>{translation[language].web_developpment_content}</p>
                            <div className="service-number">01.</div>
                        </div>
                    </div>
                    <div className="col-md-3 col-sm-6">
                        <div className="service wow fadeInRight" data-wow-duration="1.7s">
                            <div className="service-icon">
                                <i className="fa fa-flag fa-lg"></i>
                            </div>
                            <h4>{translation[language].mobile_developpment}</h4>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed eiusm.</p>
                            <div className="service-number">02.</div>
                        </div>
                    </div>
                    <div className="col-md-3 col-sm-6">
                        <div className="service wow fadeInRight" data-wow-duration="1.7s">
                            <div className="service-icon">
                                <i className="fa fa-code fa-lg"></i>
                            </div>
                            <h4>{translation[language].training}</h4>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed eiusm.</p>
                            <div className="service-number">03.</div>
                        </div>
                    </div>
                    <div className="col-md-3 col-sm-6">
                        <div className="service wow fadeInRight" data-wow-duration="1.7s">
                            <div className="service-icon">
                                <i className="fa fa-support fa-lg"></i>
                            </div>
                            <h4>{translation[language].assistant}</h4>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed eiusm.</p>
                            <div className="service-number">04.</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
  );
}

export default Services;
