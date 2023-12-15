import React, { useState } from "react";

const EditarUsuario = ({ usuarioInicial, onGuardar }) => {
  const [usuario, setUsuario] = useState(usuarioInicial);

  const manejarCambio = (e) => {
    const { name, value } = e.target;
    setUsuario((prevUsuario) => ({
      ...prevUsuario,
      ...(name.startsWith("position.")
        ? { position: { ...prevUsuario.position, [name.split(".")[1]]: value } }
        : { [name]: value }),
    }));
  };

  const manejarEnvio = (e) => {
    e.preventDefault();
    // Aquí puedes enviar los datos del usuario actualizado al servidor o realizar la lógica necesaria
    onGuardar(usuario);
  };

  return (
    <div>
      <h2>Editar Usuario</h2>
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
            name="position.latitud"
            value={usuario.position.latitud}
            onChange={manejarCambio}
          />
        </label>
        <br />
        <label>
          Longitud:
          <input
            type="text"
            name="position.longitud"
            value={usuario.position.longitud}
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
        <button type="submit">Guardar Cambios</button>
      </form>
    </div>
  );
};

export default EditarUsuario;
