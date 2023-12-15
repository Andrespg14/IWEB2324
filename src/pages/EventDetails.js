import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import useApi from "../components/useApi";

import CloudinaryUploadButton from "../components/CloudinaryUploadButton";
import CloudinaryShowImage from "../components/CloudinaryShowImage";

export default function EventDetails() {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const eventId = searchParams.get("EventId");

  const [event, setEvent] = useState({});

  useEffect(() => {
    async function getEvent() {
      try {
        const response = await fetch(`http://localhost:8000/events/${eventId}`);
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const event = await response.json();
        setEvent(event);
      } catch (error) {
        console.error("Error fetching product:", error);
      }
    }
    getEvent();
  }, [eventId]);

  if (!event || Object.keys(event).length === 0) {
    return <p>Cargando...</p>;
  }

  return (
    <div>
      <h1>Detalles evento: {eventId}</h1>
      <h1>Evento: {event.nombre}</h1>
      <h1>Organizador: {event.organizador}</h1>
      <h1>Lugar: {event.lugar}</h1>
      <h1>
        Posicion: {event.position.lat}, {event.position.lon}
      </h1>
      <CloudinaryShowImage publicId={event.image}></CloudinaryShowImage>

      <h1>Cambiar imagen: </h1>
      <CloudinaryUploadButton></CloudinaryUploadButton>
    </div>
  );
}
