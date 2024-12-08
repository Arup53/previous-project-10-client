import React, { useRef } from "react";
import { MapContainer, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
function Map() {
  const mapRef = useRef(null);
  const latitude = 40.707498;
  const longitude = -73.990202;

  return (
    <MapContainer
      center={[latitude, longitude]}
      zoom={13}
      ref={mapRef}
      style={{ height: "40vh", width: "20vw" }}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {/* Additional map layers or components can be added here */}
    </MapContainer>
  );
}

export default Map;
