import React from "react";
import { MapContainer, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";

const MapComponent = () => {
  const mapRef = React.useRef(null);
  return (
    <div
      role="application"
      style={{
        height: "100vh",
        width: "100vw",
      }}
    >
      <MapContainer center={[51.0, 19.0]} zoom={4} maxZoom={18} ref={mapRef}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />
      </MapContainer>
    </div>
  );
};

export default MapComponent;

//  --transformIgnorePatterns \"node_modules/(?!react-leaflet)/\"
