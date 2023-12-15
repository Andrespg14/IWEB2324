import React, { useState, useEffect } from "react";
import CrearUsuario from "./pages/CreateUserPage";
// GoogleMaps
import ReactGoogleMaps from "./components/ReactGoogleMaps";

import {
  GoogleOAuthProvider,
  GoogleLogin,
  googleLogout,
} from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";
import obtenerTokenDesdeCookie from "./components/CheckToken";

// Cloudinary Images
import CloudinaryUploadButton from "./components/CloudinaryUploadButton";
import CloudinaryShowImage from "./components/CloudinaryShowImage";

//Sandbox
import EditarUsuario from "./pages/EditUserPage";

function App() {
  // Para el ID de la imagen
  const [publicId, setPublicId] = useState();
  // PLANTILLA FETCH
  const getInfo = () => {
    fetch("http://localhost:8000/users/657b5ac5350c1cff03680faa", {
      method: "GET",
    })
      .then((response) => {
        //Parsear la solicitud a json
        return response.json();
      })
      .then((data) => {
        //Acceder a los datos del usuario parseado
        console.log("DATA: ", data);
        setPublicId(data.image);
      })
      .catch((error) => {
        console.error("Error during fetch:", error);
      });
  };
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
    <div className="App">
      {/* CLOUDINARY THINGS
      <CloudinaryUploadButton></CloudinaryUploadButton>
      <button onClick={getInfo}>Mostrar Raulito</button>
      <CloudinaryShowImage publicId={publicId}></CloudinaryShowImage>
      */}
      {/*
      <GoogleOAuthProvider clientId="236637991490-art8k04sevukccpe3ggh58ac6b3norpl.apps.googleusercontent.com">
        <GoogleLogin
          onSuccess={(credentialResponse) => {
            const decoded = jwtDecode(credentialResponse.credential);
            console.log(decoded);
            document.cookie = `access_token=${decoded}, path=/;`;
            const value = obtenerTokenDesdeCookie();
            console.log(value);
          }}
          onError={() => {
            console.log("Login Failed");
          }}
        />
        <h1>HOLA SEGUNDA VERSION DE VERCEL</h1>
      </GoogleOAuthProvider>
      */}
      <EditarUsuario
        usuarioInicial={usuarioEjemplo}
        onGuardar={guardarCambios}
      />
    </div>
  );
}

export default App;
