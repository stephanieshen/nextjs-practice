import { useState } from "react";
import InputFile from "../../FormField/InputFile/InputFile";
import Textarea from "../../FormField/TextArea/TextArea";
import classes from './ImageText.module.scss';

const ImageText = () => {
  const [image, setImage] = useState();

  return (
    <div className={classes.wrapper}>
      <div className={classes.col}>
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
      <div className={classes.col}>
        <Textarea
          placeholder="Description"
          height="300px"
        />
      </div>
    </div>
  )
}

export default ImageText;
