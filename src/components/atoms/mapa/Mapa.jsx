import React from 'react';
import { mapConfig, customIcon } from './mapaConfig';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import style from './Mapa.module.css'
import { sucursales } from '../../../sucursales';

export const Mapa = () => {
  return (
    <div className={style.mapaContainer}>
      <MapContainer
        center={mapConfig.initialCoordinates}
        zoom={mapConfig.zoomLevel}
        scrollWheelZoom={false}
        className={style.mapa}
        id="mapa"
      >
        <TileLayer
          url={mapConfig.tileLayerUrl}
          attribution={mapConfig.tileLayerOptions.attribution}
          maxZoom={mapConfig.tileLayerOptions.maxZoom}
        />

        {sucursales.map((sucursal, index) => (
          <Marker key={index} position={sucursal.coords} icon={customIcon}>
            <Popup>
              <div className="info-box">
                <strong>{sucursal.nombre}</strong><br />
                Dirección: {sucursal.direccion}<br />
                Teléfono: <a href={`https://wa.me/549${sucursal.whatsapp}`} target="_blank" rel="noopener noreferrer">{sucursal.telefono}</a>
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
};
