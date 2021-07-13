import PropTypes from 'prop-types';
import classes from './Textarea.module.scss';

const Textarea = (props) => {
  return (
    <textarea
      className={classes.textArea} 
      rows={8} 
      onChange={props.changed} 
      value={props.value ? props.value : ''}
    />
  )
}

Textarea.propTypes = {
  changed: PropTypes.func,
  value: PropTypes.string
}

export default Textarea;
