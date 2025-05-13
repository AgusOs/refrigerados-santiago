import React, { useRef } from 'react';
import { mapConfig, customIcon } from './mapaConfig';
import { useMap } from 'react-leaflet';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import style from './Mapa.module.css'
import { sucursales } from '../../../sucursales';


const MapController = ({ coords }) => {
  const map = useMap();

  if (coords) {
    map.setView(coords, map.getZoom(), { animate: true });
  }

  return null;
};

export const Mapa = () => {

  const [activeCoords, setActiveCoords] = React.useState(null);
  const markerRefs = useRef([]);

  return (
    <div className={style.mapaContainer}>
      <MapContainer
        center={mapConfig.initialCoordinates}
        zoom={mapConfig.zoomLevel}
        scrollWheelZoom={true}
        className={style.mapa}
        id="mapa"
      >
        <TileLayer
          url={mapConfig.tileLayerUrl}
          attribution={mapConfig.tileLayerOptions.attribution}
          maxZoom={mapConfig.tileLayerOptions.maxZoom}
        />
        
        {activeCoords && <MapController coords={activeCoords} />}

        {sucursales.map((sucursal, index) => (
          <Marker
            key={index}
            position={sucursal.coords}
            icon={customIcon}
            ref={(el) => (markerRefs.current[index] = el)}
          >
            <Popup>
              <div className="info-box">
                <strong>{sucursal.nombre}</strong><br />
                Dirección: {sucursal.direccion}<br />
                WhatsApp: <a href={`https://wa.me/549${sucursal.whatsapp}`} style={{ color: 'black', textDecoration: 'none' }} target="_blank" rel="noopener noreferrer">{sucursal.telefono}</a>
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>

      <div className={style.sucursales}>
        {sucursales.map((sucursal, index) => (
          <div key={index} className={style.sucursalItem}>
            <strong>{sucursal.nombre}</strong>
            Dirección: {sucursal.direccion}<br />
            WhatsApp: <a href={`https://wa.me/549${sucursal.whatsapp}`} style={{ color: 'black', textDecoration: 'none' }} target="_blank" rel="noopener noreferrer">{sucursal.telefono}</a><br />
            <button
              className={style.verEnMapa}
              onClick={() => {
                const marker = markerRefs.current[index];
                if (marker) {
                  marker.openPopup();
                }
                setActiveCoords(sucursal.coords);
              }}
            >
              Ver en mapa
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};
