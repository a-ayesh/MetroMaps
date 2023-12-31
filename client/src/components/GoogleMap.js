import React, { useState, useEffect } from "react";

/**
 * Renders a Google Map component.
 * @param {Object} props - The component props.
 * @param {string} props.selectedStation - The selected station.
 * @param {string} props.selectedCity - The selected city.
 * @returns {JSX.Element} - The Google Map component.
 */
function GoogleMap({ selectedStation, selectedCity }) {
  const [station, setStation] = useState(null);
  const [img_src, setImgSrc] = useState(null);

  // query DB for google location of requested stop
  useEffect(() => {
    if (selectedStation === "Image") {
      setStation(null);
    } else {
      async function getStation() {
        const res = await fetch(
          `http://localhost:4000/home/map?station=${selectedStation}`
        );
        const data = await res.json();
        setStation(data[0]);
      }
      getStation();
    }
  }, [selectedStation]);

  // set map image based on selected city
  useEffect(() => {
    switch (selectedCity) {
      case "Twin Cities":
        setImgSrc("images/Islamabad_Metro_Bus_Map_January_2023.png");
        break;
      case "Peshawar":
        setImgSrc("images/Route-Map-of-Peshawar-BRT.jpg");
        break;
      case "Lahore":
        setImgSrc("images/Lahore_Metro_Bus_Map.png");
        break;
      case "Multan":
        setImgSrc("images/Multan_Metro_Bus_Map.png");
        break;
      case "Karachi":
        setImgSrc("images/Karachi_Metro_Bus_Map.png");
        break;
    }
  }, [selectedCity]);

  return (
    <>
      {station && (
        <iframe
          src={station}
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      )}
      {!station && <img id="TwinCityMap" src={img_src} alt="map" />}
    </>
  );
}

export default GoogleMap;
