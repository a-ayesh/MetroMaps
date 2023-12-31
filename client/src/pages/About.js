import React from 'react';
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next'
import i18next from 'i18next'

const AboutUs = () => {
    const { t } = useTranslation();
    return (
        <div id="root">
          <header id="style-two">
            <h1>{t("about.title")}</h1>
            <p>{t("about.subtitle")}</p>
          </header>
          <section id="feature">
            <h1>{t("about.heading1")}</h1>
            <div className="feature-container">
                <div className="feature">
                    <div className="text-content">
                    <h3>{t("about.feature1")}</h3>
                    <p>{t("about.desc1")}</p>
                    </div>
                    <img src="images/live.png" alt="Live Tracking"/>
                </div>
                <div className="feature">
                    <div className="text-content">
                    <h3>{t("about.feature2")}</h3>
                    <p>{t("about.desc2")}</p>
                    </div>
                    <img src="images/city.png" alt="Metrobus Maps" />
                </div>
                <div className="feature">
                    <div className="text-content">
                    <h3>{t("about.feature3")}</h3>
                    <p>{t("about.desc3")}</p>
                    </div>
                    <img src="images/map.png" alt="Next Stop Information" />
                </div>
            </div>
          </section>
          <div id="style-two">
            <section>
              <h2>{t("about.heading1")}</h2>
              <p>{t("about.para2")}</p>
            </section>
          </div>
          <div id="style-two">
            <section>
              <h2>{t("about.heading3")}</h2>
              <div className="team-members">
                {/* Display team member details */}
                <div className="team-member">
                  <h3>{t("about.sub1head")}</h3>
                  <p>{t("about.subpara1")}</p>
                </div>
                <div className="team-member">
                  <h3>{t("about.sub2head")}</h3>
                  <p>{t("about.subpara2")}</p>
                </div>
              </div>
            </section>
          </div>
          <footer id='feature'>
            <center>
                <h4>{t("about.closing")}</h4>
                <Link to='/contact'>
                <Button variant="success" size="md">{t("about.contact")}</Button>
                </Link>
            </center>

          </footer>
        </div>
      );
};

export default AboutUs;
