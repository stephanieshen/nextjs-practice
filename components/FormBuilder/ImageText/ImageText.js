import InputFile from "../../FormField/InputFile/InputFile";
import Textarea from "../../FormField/TextArea/TextArea";
import classes from './ImageText.module.scss';

const ImageText = () => {
  return (
    <div className={classes.wrapper}>
      <div className={classes.col}>
        <InputFile />
      </div>
      <div className={classes.col}>
        <Textarea
          placeholder="Description"
          height="227px"
        />
      </div>
    </div>
  )
}

export default ImageText;
