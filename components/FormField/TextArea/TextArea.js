import PropTypes from 'prop-types';
import classes from './TextArea.module.scss';

const Textarea = (props) => {
  return (
    <textarea
      style={{ height: props.height }}
      placeholder={props.placeholder}
      className={classes.textArea} 
      rows={8}
      onChange={(e) => props.onChangedHandler(e)}
    />
  )
}

Textarea.propTypes = {
  placeholder: PropTypes.string,
  height: PropTypes.string,
  onChangedHandler: PropTypes.func
}

export default Textarea;
