import React, { useContext } from 'react'
import { languageContext } from '../../contexts/languageContext';
import translation from '../../translation';

function Facts() {
    const { language } = useContext(languageContext);
  return (
    <>
    <section className="facts">
            <div className="overlay"></div>
            <div className="container">
                <div className="row">
                    <div className="col-md-3 col-sm-6">
                        <div className="fact-item wow fadeInLeft" data-wow-duration="1.7s">
                            <h4><span className="fact-icon"><i className="fa fa-code"></i></span>{translation[language].projects}</h4>
                            <span className="fact-number" data-from="0" data-to="554" data-speed="2500"></span>
                        </div>
                    </div>
                    <div className="col-md-3 col-sm-6">
                        <div className="fact-item wow fadeInLeft" data-wow-duration="1.7s">
                            <h4><span className="fact-icon"><i className="fa fa-users"></i></span>{translation[language].satisfied}</h4>
                            <span className="fact-number" data-from="0" data-to="540" data-speed="2500"></span>
                        </div>
                    </div>
                    <div className="col-md-3 col-sm-6">
                        <div className="fact-item wow fadeInLeft" data-wow-duration="1.7s">
                            <h4><span className="fact-icon"><i className="fa fa-clock-o"></i></span>{translation[language].hours}</h4>
                            <span className="fact-number" data-from="0" data-to="1200" data-speed="2500"></span>
                        </div>
                    </div>
                    <div className="col-md-3 col-sm-6">
                        <div className="fact-item wow fadeInLeft" data-wow-duration="1.7s">
                            <h4><span className="fact-icon"><i className="fa fa-coffee"></i></span>{translation[language].coffee}</h4>
                            <span className="fact-number" data-from="0" data-to="160" data-speed="2500"></span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default Facts