function obtenerTokenDesdeCookie() {
  const cookies = document.cookie.split("; ");
  console.log(cookies);
  for (const cookie of cookies) {
    const [nombre, valor] = cookie.split("=");
    if (nombre === "miToken") {
      return valor;
    }
  }
  return null;
}

export default obtenerTokenDesdeCookie;
