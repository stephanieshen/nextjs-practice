import PropTypes from 'prop-types';
import classes from './InputText.module.scss';

const InputText = (props) => {
  return (
    <input
      type="text" 
      placeholder={props.placeholder}
      className={classes.inputText}
      onChange={props.changed}
      value={props.value ? props.value : ''}
    />
  )
}

InputText.propTypes = {
  placeholder: PropTypes.string,
  changed: PropTypes.func,
  value: PropTypes.string
}

export default InputText;
