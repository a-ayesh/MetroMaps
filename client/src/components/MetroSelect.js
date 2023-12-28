import React from "react";
import Accordion from "react-bootstrap/Accordion";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";

function MetroSelect({ onStationSelect }) {
  const handleButtonClick = (station) => {
    onStationSelect(station);
  };

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
          <Button
            variant="metro-select"
            size="sm"
            onClick={() => handleButtonClick("Saddar")}
          >
            Saddar
          </Button>
          <Button
            variant="metro-select"
            size="sm"
            onClick={() => handleButtonClick("Marrir Chowk")}
          >
            Marrir Chowk
          </Button>
          <Button
            variant="metro-select"
            size="sm"
            onClick={() => handleButtonClick("Liaquat Bagh")}
          >
            Liaquat Bagh
          </Button>
          <Button
            variant="metro-select"
            size="sm"
            onClick={() => handleButtonClick("Committee Chowk")}
          >
            Committee Chowk
          </Button>
          <Button
            variant="metro-select"
            size="sm"
            onClick={() => handleButtonClick("Waris Khan")}
          >
            Waris Khan
          </Button>
          <Button
            variant="metro-select"
            size="sm"
            onClick={() => handleButtonClick("Chandni Chowk")}
          >
            Chandni Chowk
          </Button>
          <Button
            variant="metro-select"
            size="sm"
            onClick={() => handleButtonClick("Rehmanabad")}
          >
            Rehmanabad
          </Button>
          <Button
            variant="metro-select"
            size="sm"
            onClick={() => handleButtonClick("6th Road")}
          >
            6th Road
          </Button>
          <Button
            variant="metro-select"
            size="sm"
            onClick={() => handleButtonClick("Shamsabad")}
          >
            Shamsabad
          </Button>
          <Button
            variant="metro-select"
            size="sm"
            onClick={() => handleButtonClick("Faizabad")}
          >
            Faizabad
          </Button>
          <Button
            variant="metro-select"
            size="sm"
            onClick={() => handleButtonClick("IJP")}
          >
            IJP
          </Button>
          <Button
            variant="metro-select"
            size="sm"
            onClick={() => handleButtonClick("Potohar")}
          >
            Potohar
          </Button>
          <Button
            variant="metro-select"
            size="sm"
            onClick={() => handleButtonClick("Khayaban-e-Johar")}
          >
            Khayaban-e-Johar
          </Button>
          <Button
            variant="metro-select"
            size="sm"
            onClick={() => handleButtonClick("Faiz Ahmad Faiz")}
          >
            Faiz Ahmad Faiz
          </Button>
          <Button
            variant="metro-select"
            size="sm"
            onClick={() => handleButtonClick("Kashmir Highway")}
          >
            Kashmir Highway
          </Button>
          <Button
            variant="metro-select"
            size="sm"
            onClick={() => handleButtonClick("Chaman")}
          >
            Chaman
          </Button>
          <Button
            variant="metro-select"
            size="sm"
            onClick={() => handleButtonClick("Ibn-e-Sina")}
          >
            Ibn-e-Sina
          </Button>
          <Button
            variant="metro-select"
            size="sm"
            onClick={() => handleButtonClick("Katchery")}
          >
            Katchery
          </Button>
          <Button
            variant="metro-select"
            size="sm"
            onClick={() => handleButtonClick("PIMS")}
          >
            PIMS
          </Button>
          <Button
            variant="metro-select"
            size="sm"
            onClick={() => handleButtonClick("Stock Exchange")}
          >
            Stock Exchange
          </Button>
          <Button
            variant="metro-select"
            size="sm"
            onClick={() => handleButtonClick("7th Avenue")}
          >
            7th Avenue
          </Button>
          <Button
            variant="metro-select"
            size="sm"
            onClick={() => handleButtonClick("Shaheed-e-Millat")}
          >
            Shaheed-e-Millat
          </Button>
          <Button
            variant="metro-select"
            size="sm"
            onClick={() => handleButtonClick("Parade Ground")}
          >
            Parade Ground
          </Button>
          <Button
            variant="metro-select"
            size="sm"
            onClick={() => handleButtonClick("Secretariat")}
          >
            Secretariat
          </Button>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>Orange Line</Accordion.Header>
        <Accordion.Body>
          <Button
            variant="metro-select"
            size="sm"
            onClick={() => handleButtonClick("Islamabad International Airport")}
          >
            Islamabad International Airport
          </Button>
          <Button
            variant="metro-select"
            size="sm"
            onClick={() => handleButtonClick("26 No.")}
          >
            26 No.
          </Button>
          <Button
            variant="metro-select"
            size="sm"
            onClick={() => handleButtonClick("Golra Morr")}
          >
            Golra Morr
          </Button>
          <Button
            variant="metro-select"
            size="sm"
            onClick={() => handleButtonClick("NUST")}
          >
            NUST
          </Button>
          <Button
            variant="metro-select"
            size="sm"
            onClick={() => handleButtonClick("G-12")}
          >
            G-12
          </Button>
          <Button
            variant="metro-select"
            size="sm"
            onClick={() => handleButtonClick("G-11")}
          >
            G-11
          </Button>
          <Button
            variant="metro-select"
            size="sm"
            onClick={() => handleButtonClick("G-10")}
          >
            G-10
          </Button>
          <Button
            variant="metro-select"
            size="sm"
            onClick={() => handleButtonClick("NHA")}
          >
            NHA
          </Button>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
        <Accordion.Header>Blue Line</Accordion.Header>
        <Accordion.Body>
        <Button
            variant="metro-select"
            size="sm"
            onClick={() => handleButtonClick("Saddar")}
          >
            Saddar
          </Button>
          <Button
            variant="metro-select"
            size="sm"
            onClick={() => handleButtonClick("Marrir Chowk")}
          >
            Marrir Chowk
          </Button>
          <Button
            variant="metro-select"
            size="sm"
            onClick={() => handleButtonClick("Liaquat Bagh")}
          >
            Liaquat Bagh
          </Button>
          <Button
            variant="metro-select"
            size="sm"
            onClick={() => handleButtonClick("Committee Chowk")}
          >
            Committee Chowk
          </Button>
          <Button
            variant="metro-select"
            size="sm"
            onClick={() => handleButtonClick("Waris Khan")}
          >
            Waris Khan
          </Button>
          <Button
            variant="metro-select"
            size="sm"
            onClick={() => handleButtonClick("Chandni Chowk")}
          >
            Chandni Chowk
          </Button>
          <Button
            variant="metro-select"
            size="sm"
            onClick={() => handleButtonClick("Rehmanabad")}
          >
            Rehmanabad
          </Button>
          <Button
            variant="metro-select"
            size="sm"
            onClick={() => handleButtonClick("6th Road")}
          >
            6th Road
          </Button>
          <Button
            variant="metro-select"
            size="sm"
            onClick={() => handleButtonClick("Shamsabad")}
          >
            Shamsabad
          </Button>
          <Button
            variant="metro-select"
            size="sm"
            onClick={() => handleButtonClick("Faizabad")}
          >
            Faizabad
          </Button>
          <Button
            variant="metro-select"
            size="sm"
            onClick={() => handleButtonClick("IJP")}
          >
            IJP
          </Button>
          <Button
            variant="metro-select"
            size="sm"
            onClick={() => handleButtonClick("Potohar")}
          >
            Potohar
          </Button>
          <Button
            variant="metro-select"
            size="sm"
            onClick={() => handleButtonClick("Khayaban-e-Johar")}
          >
            Khayaban-e-Johar
          </Button>
          <Button
            variant="metro-select"
            size="sm"
            onClick={() => handleButtonClick("Faiz Ahmad Faiz")}
          >
            Faiz Ahmad Faiz
          </Button>
          <Button
            variant="metro-select"
            size="sm"
            onClick={() => handleButtonClick("Kashmir Highway")}
          >
            Kashmir Highway
          </Button>
          <Button
            variant="metro-select"
            size="sm"
            onClick={() => handleButtonClick("Chaman")}
          >
            Chaman
          </Button>
          <Button
            variant="metro-select"
            size="sm"
            onClick={() => handleButtonClick("Ibn-e-Sina")}
          >
            Ibn-e-Sina
          </Button>
          <Button
            variant="metro-select"
            size="sm"
            onClick={() => handleButtonClick("Katchery")}
          >
            Katchery
          </Button>
          <Button
            variant="metro-select"
            size="sm"
            onClick={() => handleButtonClick("PIMS")}
          >
            PIMS
          </Button>
          <Button
            variant="metro-select"
            size="sm"
            onClick={() => handleButtonClick("Stock Exchange")}
          >
            Stock Exchange
          </Button>
          <Button
            variant="metro-select"
            size="sm"
            onClick={() => handleButtonClick("7th Avenue")}
          >
            7th Avenue
          </Button>
          <Button
            variant="metro-select"
            size="sm"
            onClick={() => handleButtonClick("Shaheed-e-Millat")}
          >
            Shaheed-e-Millat
          </Button>
          <Button
            variant="metro-select"
            size="sm"
            onClick={() => handleButtonClick("Parade Ground")}
          >
            Parade Ground
          </Button>
          <Button
            variant="metro-select"
            size="sm"
            onClick={() => handleButtonClick("Secretariat")}
          >
            Secretariat
          </Button>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="3">
        <Accordion.Header>Green Line</Accordion.Header>
        <Accordion.Body>
        <Button
            variant="metro-select"
            size="sm"
            onClick={() => handleButtonClick("Saddar")}
          >
            Saddar
          </Button>
          <Button
            variant="metro-select"
            size="sm"
            onClick={() => handleButtonClick("Marrir Chowk")}
          >
            Marrir Chowk
          </Button>
          <Button
            variant="metro-select"
            size="sm"
            onClick={() => handleButtonClick("Liaquat Bagh")}
          >
            Liaquat Bagh
          </Button>
          <Button
            variant="metro-select"
            size="sm"
            onClick={() => handleButtonClick("Committee Chowk")}
          >
            Committee Chowk
          </Button>
          <Button
            variant="metro-select"
            size="sm"
            onClick={() => handleButtonClick("Waris Khan")}
          >
            Waris Khan
          </Button>
          <Button
            variant="metro-select"
            size="sm"
            onClick={() => handleButtonClick("Chandni Chowk")}
          >
            Chandni Chowk
          </Button>
          <Button
            variant="metro-select"
            size="sm"
            onClick={() => handleButtonClick("Rehmanabad")}
          >
            Rehmanabad
          </Button>
          <Button
            variant="metro-select"
            size="sm"
            onClick={() => handleButtonClick("6th Road")}
          >
            6th Road
          </Button>
          <Button
            variant="metro-select"
            size="sm"
            onClick={() => handleButtonClick("Shamsabad")}
          >
            Shamsabad
          </Button>
          <Button
            variant="metro-select"
            size="sm"
            onClick={() => handleButtonClick("Faizabad")}
          >
            Faizabad
          </Button>
          <Button
            variant="metro-select"
            size="sm"
            onClick={() => handleButtonClick("IJP")}
          >
            IJP
          </Button>
          <Button
            variant="metro-select"
            size="sm"
            onClick={() => handleButtonClick("Potohar")}
          >
            Potohar
          </Button>
          <Button
            variant="metro-select"
            size="sm"
            onClick={() => handleButtonClick("Khayaban-e-Johar")}
          >
            Khayaban-e-Johar
          </Button>
          <Button
            variant="metro-select"
            size="sm"
            onClick={() => handleButtonClick("Faiz Ahmad Faiz")}
          >
            Faiz Ahmad Faiz
          </Button>
          <Button
            variant="metro-select"
            size="sm"
            onClick={() => handleButtonClick("Kashmir Highway")}
          >
            Kashmir Highway
          </Button>
          <Button
            variant="metro-select"
            size="sm"
            onClick={() => handleButtonClick("Chaman")}
          >
            Chaman
          </Button>
          <Button
            variant="metro-select"
            size="sm"
            onClick={() => handleButtonClick("Ibn-e-Sina")}
          >
            Ibn-e-Sina
          </Button>
          <Button
            variant="metro-select"
            size="sm"
            onClick={() => handleButtonClick("Katchery")}
          >
            Katchery
          </Button>
          <Button
            variant="metro-select"
            size="sm"
            onClick={() => handleButtonClick("PIMS")}
          >
            PIMS
          </Button>
          <Button
            variant="metro-select"
            size="sm"
            onClick={() => handleButtonClick("Stock Exchange")}
          >
            Stock Exchange
          </Button>
          <Button
            variant="metro-select"
            size="sm"
            onClick={() => handleButtonClick("7th Avenue")}
          >
            7th Avenue
          </Button>
          <Button
            variant="metro-select"
            size="sm"
            onClick={() => handleButtonClick("Shaheed-e-Millat")}
          >
            Shaheed-e-Millat
          </Button>
          <Button
            variant="metro-select"
            size="sm"
            onClick={() => handleButtonClick("Parade Ground")}
          >
            Parade Ground
          </Button>
          <Button
            variant="metro-select"
            size="sm"
            onClick={() => handleButtonClick("Secretariat")}
          >
            Secretariat
          </Button>
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
}

export default MetroSelect;
