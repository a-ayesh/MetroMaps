import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import { useTranslation } from 'react-i18next'
import i18next from 'i18next'

/**
 * Renders a component that allows the user to find their closest metro station.
 * Uses geolocation to get the user's location and fetches the closest stop based on the coordinates.
 *
 * @returns {JSX.Element} The Locater component.
 */
function Locater() {
  const { t } = useTranslation();
  const [userLocation, setUserLocation] = useState(null);
  const [userCity, setUserCity] = useState(null);

  // get user location
  const handleButtonClick = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setUserLocation({ latitude, longitude });
        },
        (error) => {
          console.error("Error getting user location:", error);
        }
      );
    } else {
      console.error("Geolocation is not supported by this browser.");
    }
  };

  // fetch closest stop to user location
  useEffect(() => {
    async function updateUserCity() {
      if (userLocation) {
        const res = await fetch(
          `http://localhost:4000/home/geolocate?latitude=${userLocation.latitude}&longitude=${userLocation.longitude}`
        );
        const data = await res.text();
        setUserCity(data);
      }
    }
    updateUserCity();
  }, [userLocation]);

  return (
    <>
      <div className="d-flex justify-content-center mt-5 mb-3">
        <Button
          variant="route-map"
          size="lg"
          className="mx-auto"
          block
          onClick={handleButtonClick}
        >
          {t("locater.button")}
        </Button>
      </div>
      {userCity && (
        <div
          id="Locater-map"
          className="border m-3 col-8 mx-auto p-3 shadow-lg"
        >
          <iframe
            src={userCity}
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="rounded"
          ></iframe>
        </div>
      )}
    </>
  );
}

export default Locater;
