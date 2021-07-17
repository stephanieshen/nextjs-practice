import PropTypes from 'prop-types';
import classes from './FormField.module.scss';
import InputFile from './InputFile/InputFile';
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
      case 'file':
        return (
          <InputFile />
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
  type: PropTypes.string.isRequired,
  label: PropTypes.string
}

export default FormField;
