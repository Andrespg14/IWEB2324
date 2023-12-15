// DADA UNA PUBLICID DE IMAGEN, LA MUESTRA
import { AdvancedImage, responsive, placeholder } from "@cloudinary/react";
import { Cloudinary } from "@cloudinary/url-gen";
import { useState } from "react";
function CloudinaryShowImage(props) {
  // recibir de props el "ngjs2p1rigyree9mp1ui"
  const [cloudName] = useState("daef41lib");
  const cld = new Cloudinary({
    cloud: {
      cloudName,
    },
  });
  //const myImage = cld.image("ngjs2p1rigyree9mp1ui");
  const myImage = cld.image(props.publicId);
  return (
    <div style={{ width: "400px" }}>
      <AdvancedImage
        style={{ maxWidth: "100%" }}
        cldImg={myImage}
        plugins={[responsive(), placeholder()]}
      />
    </div>
  );
}

export default CloudinaryShowImage;
