"use client";

import { useState, useEffect } from "react";
import { MapContainer, Marker, Popup, TileLayer, Tooltip } from "react-leaflet";
import 'leaflet/dist/leaflet.css';
import "leaflet-defaulticon-compatibility";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";

export default function Map(props: any) {
  const [geoData, setGeoData] = useState({ lat: 49.905058, lng: 10.883185 });
  const center = [geoData.lat, geoData.lng];

  return (
    <div className="leaflet-container">
      <MapContainer
        center={[geoData.lat, geoData.lng]}
        zoom={14}
        scrollWheelZoom={false}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {geoData.lat && geoData.lng && (
          <Marker position={[geoData.lat, geoData.lng]}>
            <Popup>APEvertising</Popup>
          </Marker>
        )}
      </MapContainer>
    </div>
  );
}
