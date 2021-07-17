import PropTypes from 'prop-types';
import classes from './Textarea.module.scss';

const Textarea = (props) => {
  return (
    <textarea
      style={{ height: props.height }}
      placeholder={props.placeholder}
      className={classes.textArea} 
      rows={8}
    />
  )
}

Textarea.propTypes = {
  placeholder: PropTypes.string,
  height: PropTypes.string
}

export default Textarea;
