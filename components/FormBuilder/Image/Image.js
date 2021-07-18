import { useState } from "react";
import InputFile from "../../FormField/InputFile/InputFile";
import classes from './Image.module.scss';

const Image = () => {
  const [image, setImage] = useState();

  return (
    <div>
      {!image ? (
        <InputFile
          uploadHandler={(e) => setImage(e)}
        />
      ) : (
        <div
          className={classes.img}
          style={{
            backgroundImage: `url(${image})`
          }}
        />
      )}
    </div>
  )
}

export default Image;
