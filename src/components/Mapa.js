import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import iconoValue from "leaflet/dist/images/marker-icon.png";
import L from "leaflet";

const customIcon = L.icon({
  iconUrl: iconoValue,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowUrl: "leaflet/dist/images/marker-shadow.png",
});

const Mapa = ({ x, y, direccion }) => {
  return (
    <MapContainer
      center={[x, y]}
      zoom={15}
      scrollWheelZoom={true}
      style={{ height: "200px", width: "100%" }}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker icon={customIcon} position={[x, y]}>
        <Popup>{direccion}</Popup>
      </Marker>
    </MapContainer>
  );
};

export default Mapa;
