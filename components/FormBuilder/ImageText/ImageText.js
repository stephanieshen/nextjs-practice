import PropTypes from 'prop-types';
import InputFile from "../../FormField/InputFile/InputFile";
import Textarea from "../../FormField/TextArea/TextArea";
import classes from './ImageText.module.scss';

const ImageText = (props) => {

  return (
    <div className={classes.wrapper}>
      <div className={classes.col}>
        <InputFile
          fileHandler={props.changed}
        />
      </div>
      <div className={classes.col}>
        <Textarea
          placeholder={props.description}
          onChangedHandler={props.changed}
          height="300px"
        />
      </div>
    </div>
  )
}

ImageText.propTypes ={
  placeholder: PropTypes.string,
  changed: PropTypes.func
}

export default ImageText;
