import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import React, { useState } from "react";
import { useTranslation } from 'react-i18next'
import i18next from 'i18next'

/**
 * Represents the top navigation bar component.
 * @param {Object} props - The component props.
 * @param {Function} props.onCitySelect - The function to be called when a city is selected.
 * @returns {JSX.Element} The rendered top navigation bar component.
 */
function TopNavBar({ onCitySelect }) {
  const { t } = useTranslation();
  const [selectedCity, setSelectedCity] = useState("Twin Cities");

  const handleItemClick = (city) => {
    onCitySelect(city);
    setSelectedCity(city);
  };

  return (
    <Navbar id="TopNavBar" expand="lg" className="bg-body-tertiary mb-5">
      <Container>
        <Navbar.Brand href="/">
          <img id="Logo" src="images/Logo.png" alt="logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <NavDropdown title={t(`navbar.${(selectedCity === "Twin Cities" )? "Twin": selectedCity}`)} id="basic-nav-dropdown" className="me-4">
              <NavDropdown.Item
                href="#action/3.1"
                onClick={() => handleItemClick("Twin Cities")}
              >
                {t("navbar.Twin")}
              </NavDropdown.Item>
              <NavDropdown.Item
                href="#action/3.2"
                onClick={() => handleItemClick("Peshawar")}
                >
                {t("navbar.Peshawar")}
              </NavDropdown.Item>
              <NavDropdown.Item
                href="#action/3.3"
                onClick={() => handleItemClick("Lahore")}
              >
                {t("navbar.Lahore")}
              </NavDropdown.Item>
              <NavDropdown.Item
                href="#action/3.5"
                onClick={() => handleItemClick("Multan")}
                >
                {t("navbar.Multan")}
              </NavDropdown.Item>
              <NavDropdown.Item
                href="#action/3.6"
                onClick={() => handleItemClick("Karachi")}
                >
                {t("navbar.Karachi")}
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item
                href="#action/3.7"
                onClick={() => handleItemClick("NUST")}
                >
                {t("navbar.NUST")}
                
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="/tracker" className="me-4 custom-link">{t("navbar.TRACKER")}</Nav.Link>
              <Nav.Link href="/" className="me-4 custom-link">{t("navbar.HOME")}</Nav.Link>
            <Nav.Link href="/about" className="me-4 custom-link">{t("navbar.ABOUT")}</Nav.Link>
            <NavDropdown title={t("navbar.LANGUAGE")} id="basic-nav-dropdown" className="me-4">
              <NavDropdown.Item
                // href="#action/3.1"
                onClick={() => {
                  i18next.changeLanguage("en")
                }}

              >
                English
              </NavDropdown.Item>
              <NavDropdown.Item
                // href="#action/3.1"
                onClick={() => {
                  i18next.changeLanguage("ur")
                }}

              >
                اردو
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="/contact" className="me-4 custom-link">{t("navbar.CONTACT")}</Nav.Link>

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default TopNavBar;
