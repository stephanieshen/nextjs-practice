import PropTypes from 'prop-types';
import classes from './FormField.module.scss';
import InputText from './InputText/InputText';
import Textarea from './TextArea/TextArea';

const FormField = (props) => {

  const field = (type) => {
    switch (type) {
      case 'text':
      case 'email':
      case 'password':
        return (
          <InputText
            placeholder={props.label}
            type={props.type}
          />
        );
      case 'textarea':
        return (
          <Textarea
            placeholder={props.label}
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
  type: PropTypes.string.isRequired
}

export default FormField;
