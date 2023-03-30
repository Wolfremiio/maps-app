import React from "react";
import ReactDOM from "react-dom/client";
import { MapsApp } from "./Maps-App";

import mapboxgl from "mapbox-gl"; // or "const mapboxgl = require('mapbox-gl');"

mapboxgl.accessToken =
  "pk.eyJ1IjoiZmxvYm9mbG8yMyIsImEiOiJjbGZsMWYwNHUwMHF5NDJydGkxcWh2ZHMyIn0.EZmLWdMD7t5um5P13Zcuig";

if (!navigator.geolocation) {
  alert("Tu navegador no tiene opción de Geolocalizar");
  throw new Error("Tu navegador no tiene opción de Geolocalizar");
}

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <MapsApp />
  </React.StrictMode>
);
