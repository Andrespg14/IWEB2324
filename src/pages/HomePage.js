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
            {/* VARIOS MARCADORES
          <Markers points={trees}></Markers>
           */}
          </Map>
        </div>
      </APIProvider>
    </div>
  );
}

export default HomePage;
