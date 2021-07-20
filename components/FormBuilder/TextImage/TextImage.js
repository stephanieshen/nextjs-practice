import PropTypes from 'prop-types';
import InputFile from "../../FormField/InputFile/InputFile";
import Textarea from "../../FormField/TextArea/TextArea";
import classes from './TextImage.module.scss';

const TextImage = (props) => {

  return (
    <div className={classes.wrapper}>
      <div className={classes.col}>
        <Textarea
          placeholder={props.placeholder}
          onChangedHandler={props.changed}
          height="300px"
        />
      </div>
      <div className={classes.col}>
        <InputFile
          fileHandler={props.changed}
        />
      </div>
    </div>
  )
}

TextImage.propTypes ={
  placeholder: PropTypes.string,
  changed: PropTypes.func
}

export default TextImage;
