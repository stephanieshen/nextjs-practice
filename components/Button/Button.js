import classes from './Button.module.scss';
import PropTypes from 'prop-types';

const Button = (props) => {
  const cNames = props.classes
    .reduce((acc, classname) => {
      acc = acc + ' ' + classes[classname];
      return acc; 
    }, '');

  return (
    <button
      type={props.type} 
      onClick={props.clicked} 
      className={`${classes.button} ${cNames}`}
    >
      {props.children}
    </button>
  )
}

Button.propTypes = {
  type: PropTypes.string.isRequired,
  children: PropTypes.node,
  clicked: PropTypes.func,
  classes: PropTypes.array
}

export default Button;
