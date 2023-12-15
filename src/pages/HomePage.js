import React, { useEffect } from "react";
import useApi from "../components/useApi";
import EventGrid from "../components/EventGrid";
// GoogleMaps
import ReactGoogleMaps from "../components/ReactGoogleMaps";
import {
  APIProvider,
  Map,
  AdvancedMarker,
  Pin,
  InfoWindow,
  Marker,
} from "@vis.gl/react-google-maps";
import { useState } from "react";

function HomePage() {
  const { data, isPending, error } = useApi("http://localhost:8000/events");
  const position = { lat: 53.54, lng: 10 };
  const [open, setOpen] = useState(false);
  const [marker, setMarker] = useState();
  const [positions, setPositions] = useState([]);
  const trees = [
    { id: 1, position: { lat: 37.1775, lng: -3.5986 } },
    { id: 2, position: { lat: 37.1841, lng: -3.6047 } },
    { id: 3, position: { lat: 37.175, lng: -3.6042 } },
    { id: 4, position: { lat: 37.1826, lng: -3.6067 } },
    { id: 5, position: { lat: 37.1698, lng: -3.5841 } },
    { id: 6, position: { lat: 37.1848, lng: -3.5812 } },
    { id: 7, position: { lat: 37.1785, lng: -3.5982 } },
    { id: 8, position: { lat: 37.177, lng: -3.5989 } },
    { id: 9, position: { lat: 37.1793, lng: -3.6053 } },
    { id: 10, position: { lat: 37.1741, lng: -3.6065 } },
  ];
  const handleMapClick = (event) => {
    console.log(event);
    const newMarker = {
      lat: event.detail.latLng.lat,
      lng: event.detail.latLng.lng,
    };

    setMarker(newMarker);

    console.log("Latitud:", newMarker.lat);
    console.log("Longitud:", newMarker.lng);
  };

  const Markers = ({ points }) => {
    return (
      <>
        {points.map((point) => (
          <AdvancedMarker position={point.position} key={point.id}>
            <span style={{ fontSize: "1rem" }}>🔴</span>
          </AdvancedMarker>
        ))}
      </>
    );
  };
  useEffect(() => {
    if (data && data.length > 0) {
      const nuevasPosiciones = data.map((event) => event.position);
      setPositions(nuevasPosiciones);
    }
  }, [data]);

  return (
    <div className="home">
      <h1>Home</h1>
      {error && <dif> Error: {error} </dif>}
      {isPending && <div> Loading... </div>}
      {data && <EventGrid events={data} title="Eventos Destacados" />}
      <APIProvider apiKey="AIzaSyBRoYpvhIx7Z_OOl6SYVrOViKBZ6uapEug">
        <div className="container-md" style={{ height: "50vh", width: "50%" }}>
          <Map
            zoom={9}
            center={position}
            mapId={"fb4b1890b1251195"}
            onClick={handleMapClick}
          >
            {/* UN MARCADOR AVANZADO */}
            <AdvancedMarker position={marker} onClick={() => setOpen(true)}>
              <Pin></Pin>
            </AdvancedMarker>
            {/* VARIOS MARCADORES*/}
            <Markers points={trees}></Markers>
          </Map>
        </div>
      </APIProvider>
    </div>
  );
}

export default HomePage;
