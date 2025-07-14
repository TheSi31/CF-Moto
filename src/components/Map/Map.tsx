'use client';

import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

// Фикс для отображения иконок
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: '/leaflet/marker-icon-2x.png',
  iconUrl: '/leaflet/marker-icon.png',
  shadowUrl: '/leaflet/marker-shadow.png',
});

const position: [number, number] = [52.0, 30.0]; // координаты компании

export default function Map() {
  return (
    <MapContainer center={position} zoom={13} scrollWheelZoom={false} style={{ height: '500px', minWidth: '700px'}}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={position}>
        <Popup>Мы здесь </Popup>
      </Marker>
    </MapContainer>
  );
}

