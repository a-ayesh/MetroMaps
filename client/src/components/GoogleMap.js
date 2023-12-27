import React, { useState, useEffect } from "react";

function GoogleMap({ selectedStation }) {
  const [station, setStation] = useState(null);

  useEffect(() => {
    if (selectedStation === "Image") {
      setStation(null);
    }
    async function getStation() {
      const res = await fetch(
        `http://localhost:4000/home/map?station=${selectedStation}`
      );
      const data = await res.json();
      setStation(data[0]);
    }
    getStation();
  }, [selectedStation]);

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
      {!station && (
        <img
          id="TwinCityMap"
          src="images/Islamabad_Metro_Bus_Map_January_2023.png"
          alt="map"
        />
      )}
    </>
  );
}

export default GoogleMap;
