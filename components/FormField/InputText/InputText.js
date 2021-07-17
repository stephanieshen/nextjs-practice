import PropTypes from 'prop-types';
import classes from './InputText.module.scss';

const InputText = (props) => {
  return (
    <input
      type={props.type}
      placeholder={props.placeholder}
      className={classes.inputText}
    />
  )
}

InputText.propTypes = {
  placeholder: PropTypes.string,
  type: PropTypes.string
}

export default InputText;
