import { useState } from "react";
import InputFile from "../../FormField/InputFile/InputFile";

const Image = () => {
  const [image, setImage] = useState();

  return (
    <div>
      <InputFile
        uploadHandler={(e) => setImage(e)}
      />
    </div>
  )
}

export default Image;
