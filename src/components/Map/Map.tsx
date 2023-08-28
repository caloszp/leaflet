import { type MapOptions } from "leaflet";
import { MapContainer, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import type { HTMLProps } from "react";

import "./Map.css";

type DivProps = HTMLProps<HTMLDivElement>;

export interface MapContainerProps extends MapOptions, DivProps {
  containerClassName?: string;
}

export function Map({
  containerClassName,
  center = [0, 0],
  zoom = 1,
}: MapContainerProps) {
  return (
    <div className={containerClassName}>
      <MapContainer center={center} zoom={zoom} scrollWheelZoom={false}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
      </MapContainer>
    </div>
  );
}
