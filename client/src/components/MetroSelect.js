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
        className="mx-auto d-block"
        variant="route-map"
        size="sm"
        onClick={() => handleButtonClick("Image")}
      >
        Route Map
      </Button>
      <Accordion.Item eventKey="0">
        <Accordion.Header>Red Line</Accordion.Header>
        <Accordion.Body style={{ backgroundColor: "#f5f5f5" }}>
          <Button
            variant="metro-select"
            size="sm"
            onClick={() => handleButtonClick("Saddar")}
          >
            Saddar
          </Button>
          <br />
          <Button
            variant="metro-select"
            size="sm"
            onClick={() => handleButtonClick("Marrir Chowk")}
          >
            Marrir Chowk
          </Button>
          <br />
          <Button
            variant="metro-select"
            size="sm"
            onClick={() => handleButtonClick("Liaquat Bagh")}
          >
            Liaquat Bagh
          </Button>
          <br />
          <Button
            variant="metro-select"
            size="sm"
            onClick={() => handleButtonClick("Committee Chowk")}
          >
            Committee Chowk
          </Button>
          <br />
          <Button
            variant="metro-select"
            size="sm"
            onClick={() => handleButtonClick("Waris Khan")}
          >
            Waris Khan
          </Button>
          <br />
          <Button
            variant="metro-select"
            size="sm"
            onClick={() => handleButtonClick("Chandni Chowk")}
          >
            Chandni Chowk
          </Button>
          <br />
          <Button
            variant="metro-select"
            size="sm"
            onClick={() => handleButtonClick("Rehmanabad")}
          >
            Rehmanabad
          </Button>
          <br />
          <Button
            variant="metro-select"
            size="sm"
            onClick={() => handleButtonClick("6th Road")}
          >
            6th Road
          </Button>
          <br />
          <Button
            variant="metro-select"
            size="sm"
            onClick={() => handleButtonClick("Shamsabad")}
          >
            Shamsabad
          </Button>
          <br />
          <Button
            variant="metro-select"
            size="sm"
            onClick={() => handleButtonClick("Faizabad")}
          >
            Faizabad
          </Button>
          <br />
          <Button
            variant="metro-select"
            size="sm"
            onClick={() => handleButtonClick("IJP")}
          >
            IJP
          </Button>
          <br />
          <Button
            variant="metro-select"
            size="sm"
            onClick={() => handleButtonClick("Potohar")}
          >
            Potohar
          </Button>
          <br />
          <Button
            variant="metro-select"
            size="sm"
            onClick={() => handleButtonClick("Khayaban-e-Johar")}
          >
            Khayaban-e-Johar
          </Button>
          <br />
          <Button
            variant="metro-select"
            size="sm"
            onClick={() => handleButtonClick("Faiz Ahmad Faiz")}
          >
            Faiz Ahmad Faiz
          </Button>
          <br />
          <Button
            variant="metro-select"
            size="sm"
            onClick={() => handleButtonClick("Kashmir Highway")}
          >
            Kashmir Highway
          </Button>
          <br />
          <Button
            variant="metro-select"
            size="sm"
            onClick={() => handleButtonClick("Chaman")}
          >
            Chaman
          </Button>
          <br />
          <Button
            variant="metro-select"
            size="sm"
            onClick={() => handleButtonClick("Ibn-e-Sina")}
          >
            Ibn-e-Sina
          </Button>
          <br />
          <Button
            variant="metro-select"
            size="sm"
            onClick={() => handleButtonClick("Katchery")}
          >
            Katchery
          </Button>
          <br />
          <Button
            variant="metro-select"
            size="sm"
            onClick={() => handleButtonClick("PIMS")}
          >
            PIMS
          </Button>
          <br />
          <Button
            variant="metro-select"
            size="sm"
            onClick={() => handleButtonClick("Stock Exchange")}
          >
            Stock Exchange
          </Button>
          <br />
          <Button
            variant="metro-select"
            size="sm"
            onClick={() => handleButtonClick("7th Avenue")}
          >
            7th Avenue
          </Button>
          <br />
          <Button
            variant="metro-select"
            size="sm"
            onClick={() => handleButtonClick("Shaheed-e-Millat")}
          >
            Shaheed-e-Millat
          </Button>
          <br />
          <Button
            variant="metro-select"
            size="sm"
            onClick={() => handleButtonClick("Parade Ground")}
          >
            Parade Ground
          </Button>
          <br />
          <Button
            variant="metro-select"
            size="sm"
            onClick={() => handleButtonClick("Secretariat")}
          >
            Secretariat
          </Button>
          <br />
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>Orange Line</Accordion.Header>
        <Accordion.Body>
          <Button variant="link">Link</Button>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
        <Accordion.Header>Blue Line</Accordion.Header>
        <Accordion.Body>
          <Button variant="link">Link</Button>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="3">
        <Accordion.Header>Green Line</Accordion.Header>
        <Accordion.Body>
          <Button variant="link">Link</Button>
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
}

export default MetroSelect;
