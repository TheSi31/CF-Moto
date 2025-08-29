'use client';

import style from "./Map.module.css"
import { useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

export default function Map() {
  useEffect(() => {
    delete (L.Icon.Default.prototype as any)._getIconUrl;
    L.Icon.Default.mergeOptions({
      iconRetinaUrl: `${process.env.NEXT_PUBLIC_BASE_PATH}/leaflet/marker-icon-2x.png`,
      iconUrl: `${process.env.NEXT_PUBLIC_BASE_PATH}/leaflet/marker-icon.png`,
      shadowUrl: `${process.env.NEXT_PUBLIC_BASE_PATH}/leaflet/marker-shadow.png`,
    });
  }, []);

  const position: [number, number] = [52.0, 30.0];
  return (
    <MapContainer
      className={style.map}
      center={position}
      zoom={13}
    >
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      <Marker position={position}>
        <Popup>Мы здесь 📍</Popup>
      </Marker>
    </MapContainer>
  );
}
