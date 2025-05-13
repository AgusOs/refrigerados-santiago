import L from 'leaflet';

// Configuración del mapa
export const mapConfig = {
  initialCoordinates: [-36.63, -64.3],
  zoomLevel: 12,
  tileLayerUrl: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
  tileLayerOptions: {
    maxZoom: 18,
    attribution: '© OpenStreetMap'
  }
};

// Icono personalizado
export const customIcon = L.icon({
  iconUrl: "/public/assets/images/pin.png",
  iconSize: [50, 50],
  iconAnchor: [20, 40],
  popupAnchor: [0, -40]
});