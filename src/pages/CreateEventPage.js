import React, { useState } from "react";
const CreateEvent = () => {
  const [event, setEvent] = useState({
    nombre: "",
    timestamp: "",
    position: {
      lat: 0,
      lon: 0,
    },
    image: "",
    organizador: "",
  });
  const manejarCambio = (e) => {
    const { name, value } = e.target;
    // Si el campo pertenece a la posición, actualiza el estado anidado
    if (name.startsWith("position.")) {
      const positionKey = name.split(".")[1];
      setEvent((prevEvent) => ({
        ...prevEvent,
        position: {
          ...prevEvent.position,
          [positionKey]: value,
        },
      }));
    } else {
      // Si no, actualiza el estado principal
      setEvent((prevEvent) => ({
        ...prevEvent,
        [name]: value,
      }));
    }
  };

  const manejarEnvio = (e) => {
    e.preventDefault();
    // AÑADIR A LA BASE DE DATOS EL EVENTO
    console.log("Evento creado:", event);
  };
  return (
    <div>
      <h2>Crear Evento</h2>
      <form onSubmit={manejarEnvio}>
        <label>
          Nombre:
          <input
            type="text"
            name="nombre"
            value={event.nombre}
            onChange={manejarCambio}
          />
        </label>
        <br />
        <label>
          timestamp:
          <input
            type="timestamp"
            name="timestamp"
            value={event.timestamp}
            onChange={manejarCambio}
          />
        </label>
        <br />
        <label>
          Latitud:
          <input
            type="text"
            name="position.lat"
            value={event.position.lat}
            onChange={manejarCambio}
          />
        </label>
        <br />
        <label>
          Longitud:
          <input
            type="text"
            name="position.lon"
            value={event.position.lon}
            onChange={manejarCambio}
          />
        </label>
        <br />
        <label>
          Imagen:
          <input
            type="text"
            name="imagen"
            value={event.imagen}
            onChange={manejarCambio}
          />
        </label>
        <br />
        <button type="submit">Crear Evento</button>
      </form>
    </div>
  );
};

export default CreateEvent;
