import React, { useEffect, useState } from "react";
import Accordion from "react-bootstrap/Accordion";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";

function MetroSelect({ onStationSelect, selectedCity }) {
  const [stops, setStops] = useState([]);

  const handleButtonClick = (station) => {
    onStationSelect(station);
  };

  async function getStops() {
    const res = await fetch(
      `http://localhost:4000/home/stops?city=${selectedCity}`
    );
    const data = await res.json();
    return data;
  }

  useEffect(() => {
    async function updateStops() {
      const data = await getStops();
      setStops(data);
      console.log(stops);
    }
    updateStops();
  }, [selectedCity]);

  return (
    <Accordion>
      <Button
        className="mx-auto d-block mb-3"
        variant="route-map"
        size="sm"
        onClick={() => handleButtonClick("Image")}
      >
        Route Map
      </Button>
      <Accordion.Item eventKey="0">
        <Accordion.Header>Red Line</Accordion.Header>
        <Accordion.Body>
          {stops
            .filter((stop) => stop.line === "Red Line")
            .map((stop) => (
              <Button
                variant="metro-select"
                size="sm"
                onClick={() => handleButtonClick(stop.name)}
              >
                {stop.name}
              </Button>
            ))}
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>Orange Line</Accordion.Header>
        <Accordion.Body>
          {stops
            .filter((stop) => stop.line === "Orange Line")
            .map((stop) => (
              <Button
                variant="metro-select"
                size="sm"
                onClick={() => handleButtonClick(stop.name)}
              >
                {stop.name}
              </Button>
            ))}
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
        <Accordion.Header>Blue Line</Accordion.Header>
        <Accordion.Body>
          {stops
            .filter((stop) => stop.line === "Blue Line")
            .map((stop) => (
              <Button
                variant="metro-select"
                size="sm"
                onClick={() => handleButtonClick(stop.name)}
              >
                {stop.name}
              </Button>
            ))}
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="3">
        <Accordion.Header>Green Line</Accordion.Header>
        <Accordion.Body>
          {stops
            .filter((stop) => stop.line === "Green Line")
            .map((stop) => (
              <Button
                variant="metro-select"
                size="sm"
                onClick={() => handleButtonClick(stop.name)}
              >
                {stop.name}
              </Button>
            ))}
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
}

export default MetroSelect;
