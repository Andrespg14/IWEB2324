"use client";

import { useState } from "react";
import {
  APIProvider,
  Map,
  AdvancedMarker,
  Pin,
  InfoWindow,
  Marker,
} from "@vis.gl/react-google-maps";

export default function Intro() {
  const position = { lat: 36.73169313880723, lng: -4.426478709816886 };
  const [open, setOpen] = useState(false);
  const [marker, setMarker] = useState();
  const handleMapClick = (event) => {
    //console.log(event);
    /* MARCADOR DEL CLICK
    const newMarker = {
      lat: event.detail.latLng.lat,
      lng: event.detail.latLng.lng,
    };

    setMarker(newMarker);
    console.log("Latitud:", newMarker.lat);
    console.log("Longitud:", newMarker.lng);
*/
    fetch("http://localhost:8000/users/657b485038b6a843e64372ba")
      .then((response) => {
        //Parsear la solicitud a json
        return response.json();
      })
      .then((data) => {
        //Acceder a los datos del usuario parseado
        console.log("DATA: ", data);
        const userMarker = {
          lat: data.position.lat,
          lng: data.position.lon,
        };
        setMarker(userMarker);
      })
      .catch((error) => {
        console.error("Error during fetch:", error);
      });
  };
  return (
    <APIProvider apiKey="AIzaSyBRoYpvhIx7Z_OOl6SYVrOViKBZ6uapEug">
      <div className="container-md" style={{ height: "100vh", width: "100%" }}>
        <Map
          zoom={9}
          center={position}
          mapId={"fb4b1890b1251195"}
          onClick={handleMapClick}
        >
          <AdvancedMarker position={marker} onClick={() => setOpen(true)}>
            <Pin></Pin>
          </AdvancedMarker>
        </Map>
      </div>
    </APIProvider>
  );
}
