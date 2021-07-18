import { useState } from "react";
import InputFile from "../../FormField/InputFile/InputFile";
import Textarea from "../../FormField/TextArea/TextArea";
import classes from './TextImage.module.scss';

const TextImage = () => {
  const [image, setImage] = useState();

  return (
    <div className={classes.wrapper}>
      <div className={classes.col}>
        <Textarea
          placeholder="Description"
          height="300px"
        />
      </div>
      <div className={classes.col}>
        <InputFile
          uploadHandler={(e) => setImage(e)}
        />
      </div>
    </div>
  )
}

export default TextImage;
