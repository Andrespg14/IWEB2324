import React from "react";
import EditarUsuario from "../pages/EditUserPage";

const App = () => {
  const usuarioEjemplo = {
    nombre: "Ejemplo",
    email: "ejemplo@email.com",
    position: {
      latitud: "123",
      longitud: "456",
    },
    imagen: "imagen.png",
  };

  const guardarCambios = (usuarioActualizado) => {
    // Lógica para guardar los cambios en el servidor o donde sea necesario
    console.log("Usuario actualizado:", usuarioActualizado);
  };

  return (
    <div>
      <h1>Aplicación de Edición de Usuarios</h1>
      <EditarUsuario
        usuarioInicial={usuarioEjemplo}
        onGuardar={guardarCambios}
      />
    </div>
  );
};

export default App;
