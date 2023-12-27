import React, { useRef, useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Map from "./components/Map";
import TopNavBar from "./components/TopNavbar";

function App() {
  return (
    <div>
      <TopNavBar />
      <Map />
    </div>
  );
}

export default App;
