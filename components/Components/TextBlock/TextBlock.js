import PropTypes from 'prop-types';
import classes from './TextBlock.module.scss';

const TextBlock = (props) => {
  const { fields } = props;
  
  return (
    <p className={classes.textBlock}>
      {fields.value}
    </p>
  )
}

TextBlock.propTypes = {
  fields: PropTypes.object
}

export default TextBlock;
