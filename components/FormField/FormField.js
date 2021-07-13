import PropTypes from 'prop-types';
import classes from './FormField.module.scss';
import InputText from './InputText/InputText';
import Textarea from './TextArea/TextArea';

const FormField = (props) => {

  const field = (type) => {
    switch (type) {
      case 'text':
        return (
          <InputText
            placeholder={props.label} 
            changed={props.changed} 
            value={props.value}
          />
        );
      case 'textarea':
        return (
          <Textarea
            changed={props.changed} 
            value={props.value}
          />
        );
    }
  }

  return (
    <div>
      <div className={classes.fieldWrapper}>
        {field(props.type)}
      </div>
    </div>
  )
}

FormField.propTypes = {
  label: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  changed: PropTypes.func,
  value: PropTypes.string
}

export default FormField;
