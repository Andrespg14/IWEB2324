import React, { useState } from "react";

const CrearUsuario = () => {
  const [usuario, setUsuario] = useState({
    nombre: "",
    email: "",
    position: {
      lat: 1,
      lon: 1,
    },
    imagen: "",
  });
  const manejarCambio = (e) => {
    const { name, value } = e.target;
    // Si el campo pertenece a la posición, actualiza el estado anidado
    if (name.startsWith("position.")) {
      const positionKey = name.split(".")[1];
      setUsuario((prevUsuario) => ({
        ...prevUsuario,
        position: {
          ...prevUsuario.position,
          [positionKey]: value,
        },
      }));
    } else {
      // Si no, actualiza el estado principal
      setUsuario((prevUsuario) => ({
        ...prevUsuario,
        [name]: value,
      }));
    }
  };

  const manejarEnvio = (e) => {
    e.preventDefault();
    // Aquí puedes enviar los datos del usuario a tu servidor o realizar la lógica necesaria
    console.log("Usuario creado:", usuario);
  };
  return (
    <div>
      <h2>Crear Usuario</h2>
      <form onSubmit={manejarEnvio}>
        <label>
          Nombre:
          <input
            type="text"
            name="nombre"
            value={usuario.nombre}
            onChange={manejarCambio}
          />
        </label>
        <br />
        <label>
          Email:
          <input
            type="email"
            name="email"
            value={usuario.email}
            onChange={manejarCambio}
          />
        </label>
        <br />
        <label>
          Latitud:
          <input
            type="text"
            name="position.lat"
            value={usuario.position.lat}
            onChange={manejarCambio}
          />
        </label>
        <br />
        <label>
          Longitud:
          <input
            type="text"
            name="position.lon"
            value={usuario.position.lon}
            onChange={manejarCambio}
          />
        </label>
        <br />
        <label>
          Imagen:
          <input
            type="text"
            name="imagen"
            value={usuario.imagen}
            onChange={manejarCambio}
          />
        </label>
        <br />
        <button type="submit">Crear Usuario</button>
      </form>
    </div>
  );
};

export default CrearUsuario;
