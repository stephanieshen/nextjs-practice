import { useState } from "react";
import InputFile from "../../FormField/InputFile/InputFile";

const Image = () => {
  const [file, setFile] = useState();

  return (
    <div>
      <InputFile
        fileHandler={(e) => setFile(e)}
      />
    </div>
  )
}

export default Image;
