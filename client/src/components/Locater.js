import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";

function Locater() {
  const [userLocation, setUserLocation] = useState(null);
  const [userCity, setUserCity] = useState(null);

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
          Find Your Closest Metro Station
        </Button>
      </div>
      {userCity && (
        <div id="Locater-map" className="border m-3 col-8 mx-auto p-3 shadow-lg">
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
