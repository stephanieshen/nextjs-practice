import PropTypes from 'prop-types';
import classes from './Textarea.module.scss';

const Textarea = (props) => {
  return (
    <div>
      <label className={classes.label}>
        {props.placeholder}
      </label>
      <textarea
        className={classes.textArea} 
        rows={8}
      />
    </div>
  )
}

Textarea.propTypes = {
  placeholder: PropTypes.string
}

export default Textarea;
