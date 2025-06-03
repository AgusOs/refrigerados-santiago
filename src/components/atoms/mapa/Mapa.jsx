import { useState,useRef } from 'react';
import { mapConfig, customIcon } from './mapaConfig';
import { useMap } from 'react-leaflet';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import style from './Mapa.module.css'
import { sucursales } from '../../../sucursales';
import { Select, MenuItem, FormControl, InputLabel } from '@mui/material';


const MapController = ({ coords }) => {
  const map = useMap();

  if (coords) {
    map.setView(coords, map.getZoom(), { animate: true });
  }

  return null;
};

export const Mapa = () => {

  const [activeCoords, setActiveCoords] = useState(null);
  const markerRefs = useRef([]);
  const [ciudad, setCiudad] = useState('');

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
        <FormControl fullWidth>
          <InputLabel id="ciudad-label"> Seleccionar ubicacion</InputLabel>
          <Select
            labelId="ciudad-label"
            id="select-ciudad"
            label="Seleccionar ubicacion"
            value={ciudad}
            onChange={(event) => setCiudad(event.target.value)}
          >
            <MenuItem value="Santa Rosa">Santa Rosa</MenuItem>
            <MenuItem value="Toay">Toay</MenuItem>
            <MenuItem value="Pico">Gral. Pico</MenuItem>
            <MenuItem value="Catriló">Catrilo</MenuItem>
            <MenuItem value="Realicó">Realico</MenuItem>
            <MenuItem value="Macachín">Macachín</MenuItem>
            <MenuItem value="Castex">Castex</MenuItem>
            <MenuItem value="Gral. Acha">Gral. Acha</MenuItem>
            {/* <MenuItem value="Victorica">Victorica</MenuItem> */}
          </Select>
        </FormControl>
        {sucursales
        .filter(sucursal => ciudad !== '' && sucursal.nombre.includes(ciudad))
        .map((sucursal, index) => {
          const markerIndex = sucursales.findIndex(s => s.nombre === sucursal.nombre);
          return(
          <div key={index} className={style.sucursalItem}>
            <strong>{sucursal.nombre}</strong>
            Dirección: {sucursal.direccion}<br />
            <button className={style.contactar}>
              <a href={`https://wa.me/549${sucursal.whatsapp}`} style={{ color: 'white', textDecoration: 'none' }} target="_blank" rel="noopener noreferrer">
                Contactar
              </a>
            </button>
            <br />
            <button
              className={style.verEnMapa}
              onClick={() => {
                const marker = markerRefs.current[markerIndex];
                if (marker) {
                  marker.openPopup();
                }
                setActiveCoords(sucursal.coords);
              }}
            >
              Ver en mapa
            </button>
          </div>
        )})}
      </div>
    </div>
  );
};
